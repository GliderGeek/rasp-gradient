import urllib
import datetime

url = 'http://blipmaps.nl/plaatjes_morgen/pfdtot.curr+1.1900lst.d2.png'
filename = 'tmp.png'

now = datetime.datetime.now()

image = urllib.URLopener().open(url)
last_time_edited = image.headers.headers[2].split()[-2]
last_edit_hh, last_edit_mm, last_edit_ss = [int(time_str) for time_str in last_time_edited.split(':')]
last_edit = now.replace(hour=last_edit_hh, minute=last_edit_mm, second=last_edit_ss)

print('edit: %s, nu: %s' % (now, last_edit))

print(now > last_edit)
