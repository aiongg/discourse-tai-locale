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
 
     var taiRom = moment.defineLocale('tai-Rom', {
         // MMMM
         months: [
             'Chiàⁿ Goe̍h', 'Jī Goe̍h', 'Saⁿ Goe̍h', 'Sì Goe̍h', 'Gō͘ Goe̍h', 'La̍k Goe̍h',
             'Chhit Goe̍h', 'Peh Goe̍h', 'Káu Goe̍h', 'Cha̍p Goe̍h', 'Cha̍p-it Goe̍h', 'Cha̍p-jī Goe̍h'
         ],
         // MMM
         monthsShort: '正月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
         // dddd
         weekdays: [
             'Lé Pài', 'Pài It', 'Pài Jī', 'Pài Saⁿ', 'Pài Sì', 'Pài Gō͘', 'Pāi La̍k'
         ],
         // ddd
         weekdaysShort: [
            'Lé Pài', 'Pài 1', 'Pài 2', 'Pài 3', 'Pài 4', 'Pài 5', 'Pāi 6'
         ],
         // dd
         weekdaysMin: 'Lé拜_拜1_拜2_拜3_拜4_拜5_拜6'.split('_'),
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
         // A
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
             future: '%s āu',
             past: '%s chêng',
             s: 'kúi bió',
             ss: '%d bió',
             m: '1 hun-cheng',
             mm: '%d hun-cheng',
             h: '1 tiám-cheng',
             hh: '%d tiám-cheng',
             d: '1 kang',
             dd: '%d kang',
             M: '1 kò goe̍h',
             MM: '%d kò goe̍h',
             y: '1 tang',
             yy: '%d tang',
         },
     });
 
     return taiRom;
 
 })));
 