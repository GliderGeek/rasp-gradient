import os, sys
from mechanize import Browser
from BeautifulSoup import BeautifulSoup
import urllib
from datetime import datetime, date, timedelta
from pytz import timezone
import time


class RASP_Object(object):
    def __init__(self):
        now = date.today()
        self.base_url_rasp = 'http://blipmaps.nl/'
        self.database_name = 'rasp.db'
        self.table_name = 'forecasts'
        self.path_to_files = 'archive/'
        self.current_date = now.strftime("%d-%m-%Y")
        self.tomorrow = (now + timedelta(days=1)).strftime("%d-%m-%Y")
        self.day_after_tomorrow = (now + timedelta(days=2)).strftime("%d-%m-%Y")

    # 1.1900lst for wintertime, 1.2000lst for summertime
    def create_url(self, day):

        amsterdam = timezone('Europe/Amsterdam')
        wintertime_offset = amsterdam.localize(datetime.now()).dst().seconds

        if wintertime_offset == 0:
            dst_name = '1900'
        else:
            dst_name = '2000'

        if day == 'today':
            return self.base_url_rasp + 'plaatjes/pfdtot.curr.%slst.d2.png' % dst_name
        elif day == 'tomorrow':
            return self.base_url_rasp + 'plaatjes_morgen/pfdtot.curr+1.%slst.d2.png' % dst_name
        elif day == 'day_after_tomorrow':
            return self.base_url_rasp + 'plaatjes_overmorgen/pfdtot.curr+2.%slst.d2.png' % dst_name
        else:
            print 'Error in PullRasp.create_url: no valid day: ' + day

    def create_forecasted_date(self, day):
        if day == 'today':
            self.forecasted_date = self.current_date
        elif day == 'tomorrow':
            self.forecasted_date = self.tomorrow
        elif day == 'day_after_tomorrow':
            self.forecasted_date = self.day_after_tomorrow

    def download_forecast(self, url, filename):
        image = urllib.URLopener()
        print 'retrieving to %s' % filename
        image.retrieve(url, filename)

    def get_forecast(self, day, filename):
        self.create_forecasted_date(day)
        url = self.create_url(day)
        self.download_forecast(url, filename)
        print 'Got forecast of %s' % day
