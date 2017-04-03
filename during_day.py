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
    now = datetime.datetime.now()

    try:
        image = urllib.URLopener().open(url)
    except IOError:
        print 'caught 404!'
        return False
    last_time_edited = image.headers.headers[2].split()[-2]
    last_edit_hh, last_edit_mm, last_edit_ss = [int(time_str) for time_str in last_time_edited.split(':')]
    last_edit = now.replace(hour=last_edit_hh, minute=last_edit_mm, second=last_edit_ss)
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
