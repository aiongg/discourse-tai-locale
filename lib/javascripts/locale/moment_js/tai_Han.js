//! moment.js locale configuration
//! locale : Taiwanese [tai]
//! author : A'iong : https://github.com/aiongg

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        && typeof require === 'function' ? factory(require('../moment')) :
    typeof define === 'function' && define.amd ? define(['../moment'], factory) :
    factory(global.moment)
 }(this, (function (moment) { 'use strict';
 
     //! moment.js locale configuration
 
     var taiHan = moment.defineLocale('tai-Han', {
         // MMMM
         months: '正月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
         // MMM
         monthsShort: '正月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
         // dddd
         weekdays: '礼拜_拜一_拜二_拜三_拜四_拜五_拜六'.split('_'),
         // ddd
         weekdaysShort: '礼拜_拜一_拜二_拜三_拜四_拜五_拜六'.split('_'),
         // dd
         weekdaysMin: '礼_一_二_三_四_五_六'.split('_'),
         longDateFormat: {
             LT: 'HH:mm',
             LTS: 'HH:mm:ss',
             L: 'YYYY/MM/DD',
             LL: 'YYYY/MM/DD',
             LLL: 'YYYY/MM/DD HH:mm',
             LLLL: 'YYYY/MM/DD dddd HH:mm',
             l: 'YYYY/M/D',
             ll: 'YYYY/M/D',
             lll: 'YYYY/M/D HH:mm',
             llll: 'YYYY/M/D dddd HH:mm',
         },
         meridiemParse: /透早|早起|上午|中昼|下晡|暗冥/,
         meridiemHour: function (hour, meridiem) {
             if (hour === 12) {
                 hour = 0;
             }
             if (meridiem === '透早' || meridiem === '早起' || meridiem === '頂晡') {
                 return hour;
             } else if (meridiem === '中昼') {
                 return hour >= 11 ? hour : hour + 12;
             } else if (meridiem === '下晡' || meridiem === '暗冥') {
                 return hour + 12;
             }
         },
         meridiem: function (hour, minute, isLower) {
             var hm = hour * 100 + minute;
             if (hm > 500 && hm < 700) {
                 return '透早';
             } else if (hm < 900) {
                 return '早起';
             } else if (hm < 1130) {
                 return '頂晡';
             } else if (hm < 1230) {
                 return '中昼';
             } else if (hm < 1800) {
                 return '下晡';
             } else {
                 return '暗冥';
             }
         },
         calendar: {
             sameDay: '[今旦日]LT',
             nextDay: '[明旦再]LT',
             nextWeek: '[後礼拜]dddd LT',
             lastDay: '[昨昏]LT',
             lastWeek: '[頂礼拜]dddd LT',
             sameElse: 'L',
         },
         dayOfMonthOrdinalParse: /\d{1,2}(日|月|拜)/,
         ordinal: function (number, period) {
             switch (period) {
                 case 'd':
                 case 'D':
                 case 'DDD':
                     return number + '日';
                 case 'M':
                     return number + '月';
                 case 'w':
                 case 'W':
                     return number + '拜';
                 default:
                     return number;
             }
         },
         relativeTime: {
             future: '%s後',
             past: '%s前',
             s: '幾秒',
             ss: '%d秒',
             m: '一分鐘',
             mm: '%d分鐘',
             h: '一点鐘',
             hh: '%d点鐘',
             d: '一工',
             dd: '%d工',
             M: '一個月',
             MM: '%d個月',
             y: '一冬',
             yy: '%d冬',
         },
     });
 
     return taiHan;
 
 })));
 