import os

from cloudinary_credentials import CLOUD_NAME, API_KEY, API_SECRET
import cloudinary
import cloudinary.uploader
import cloudinary.api

cloudinary.config(
    cloud_name=CLOUD_NAME,
    api_key=API_KEY,
    api_secret=API_SECRET
)


def file_on_cloudinary(filename):
    result = cloudinary.api.resources_by_ids([filename])
    resources = result.get('resources', [])
    return bool(resources)

# deleting local files from previous day
for local_file in ['today_m0.png', 'tomorrow_m0.png', 'day_after_tomorrow_m0.png']:
	full_path = os.path.join('images', local_file)
	if os.path.isfile(full_path):
		os.remove(full_path)

# remove yesterday's files on cloudinary
for yesterday_file in ['today_m2', 'today_m1', 'today_m0']:
    if file_on_cloudinary(yesterday_file):
        cloudinary.uploader.destroy(yesterday_file)
    # else:
        # print 'File not present on cloudinary: %s' % yesterday_file
    
        

renames = [
    ('tomorrow_m1', 'today_m2'),
    ('tomorrow_m0', 'today_m1'),
    ('day_after_tomorrow_m0', 'tomorrow_m1')
]

# rename files on cloudinary
for rename in renames:
    print rename[0]

    if file_on_cloudinary(rename[0]):
        cloudinary.uploader.rename(rename[0], rename[1])
        print 'rename complete'
    # else:
        # print 'File not on cloudinary: %s' % rename[0]

# upload placeholder for missing analyses
for not_analyzed_name in ['today_m0', 'tomorrow_m0', 'day_after_tomorrow_m0']:
    placeholder_image = os.path.join('images', 'not_yet_analyzed.png')
    cloudinary.uploader.upload(placeholder_image, public_id=not_analyzed_name, unique_filename=False)
