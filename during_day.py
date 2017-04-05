import os
import datetime
import urllib

from cloudinary_credentials import CLOUD_NAME, API_KEY, API_SECRET
import cloudinary
import cloudinary.uploader
import cloudinary.api

from RASP import RASP_Object

def updated(url):
    print 'checking if updated'
    now = datetime.datetime.utcnow()

    try:
        image = urllib.URLopener().open(url)
    except IOError:
        print 'caught 404!'
        return False

    last_edit_str = image.headers.headers[2].split(',')[-1].strip()
    last_edit = datetime.datetime.strptime(last_edit_str, '%d %b %Y %H:%M:%S %Z')

    print 'now = %s, last_edit = %s' % (now, last_edit)
    return now > last_edit

cloudinary.config(
    cloud_name=CLOUD_NAME,
    api_key=API_KEY,
    api_secret=API_SECRET
)

rasp = RASP_Object()

for day in ['today', 'tomorrow', 'day_after_tomorrow']:
    full_path = os.path.join('images', '%s_m0.png' % day)
    print 'full path = %s' % full_path
    if not os.path.isfile(full_path):
        url = rasp.create_url(day)
        print 'url = %s' % url
        if updated(url):
            rasp.get_forecast(day, full_path)
            filename = '%s_m0' % day
            cloudinary.uploader.upload(full_path, public_id=filename, unique_filename=False)
