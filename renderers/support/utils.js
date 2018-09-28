// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["dojo/date/locale","../../Color","../../core/lang","../../core/numberUtils","../../core/unitUtils","dojo/i18n!dojo/cldr/nls/gregorian"],function(e,t,n,a,o,i){function r(e){return e&&e.map(function(e){return new t(e)})}function s(e,t,n){var a="";return 0===t?a=m.lt+" ":t===n&&(a=m.gt+" "),a+e}var l={},m={lte:"<=",gte:">=",lt:"<",gt:">",pct:"%",ld:"–"},u={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},c={millisecond:{dateOptions:{formatLength:"long"},timeOptions:{formatLength:"medium"}},second:{dateOptions:{formatLength:"long"},timeOptions:{formatLength:"medium"}},minute:{dateOptions:{formatLength:"long"},timeOptions:{formatLength:"short"}},hour:{dateOptions:{formatLength:"long"},timeOptions:{formatLength:"short"}},day:{selector:"date",dateOptions:{formatLength:"long"}},month:{selector:"date",dateOptions:{formatLength:"long"}},year:{selector:"date",dateOptions:{selector:"year"}}},d={dateOptions:{formatLength:"short",fullYear:!0},timeOptions:{formatLength:"short"}};return n.mixin(l,{meterIn:{inches:o.convertUnit(1,"meters","inches"),feet:o.convertUnit(1,"meters","feet"),"us-feet":o.convertUnit(1,"meters","us-feet"),yards:o.convertUnit(1,"meters","yards"),miles:o.convertUnit(1,"meters","miles"),"nautical-miles":o.convertUnit(1,"meters","nautical-miles"),millimeters:o.convertUnit(1,"meters","millimeters"),centimeters:o.convertUnit(1,"meters","centimeters"),decimeters:o.convertUnit(1,"meters","decimeters"),meters:o.convertUnit(1,"meters","meters"),kilometers:o.convertUnit(1,"meters","kilometers"),"decimal-degrees":1/o.lengthToDegrees(1,"meters")},timelineDateFormatOptions:{selector:"date",dateOptions:{formatLength:"short",fullYear:!0}},formatDate:function(t,a){var o,r=[];null==t||t instanceof Date||(t=new Date(t)),a=a||{},a=n.mixin({},a);var s=a.selector?a.selector.toLowerCase():null,l=!s||s.indexOf("time")>-1,m=!s||s.indexOf("date")>-1;return l&&(a.timeOptions=a.timeOptions||d.timeOptions,a.timeOptions&&(a.timeOptions=n.mixin({},a.timeOptions),a.timeOptions.selector=a.timeOptions.selector||"time",r.push(a.timeOptions))),m&&(a.dateOptions=a.dateOptions||d.dateOptions,a.dateOptions&&(a.dateOptions=n.mixin({},a.dateOptions),a.dateOptions.selector=a.dateOptions.selector||"date",r.push(a.dateOptions))),r&&r.length?(r=r.map(function(n){return e.format(t,n)}),o=1==r.length?r[0]:i["dateTimeFormat-medium"].replace(/\'/g,"").replace(/\{(\d+)\}/g,function(e,t){return r[t]})):o=e.format(t),o},createColorStops:function(e){var t=e.values,n=e.colors,o=e.labelIndexes,i=e.isDate,r=e.dateFormatOptions;return t.map(function(e,m){var u=!o||o.indexOf(m)>-1,c=null;if(u){var d;d=i?l.formatDate(e,r):a.format(e),d&&(c=s(d,m,t.length-1))}return{value:e,color:n[m],label:c}})},updateColorStops:function(e){var t,n=e.stops,o=e.changes,i=e.isDate,r=e.dateFormatOptions,m=[],u=n.map(function(e){return e.value});o.forEach(function(e){m.push(e.index),u[e.index]=e.value}),t=a.round(u,{indexes:m}),n.forEach(function(e,o){if(e.value=u[o],null!=e.label){var m,c=null;m=i?l.formatDate(t[o],r):a.format(t[o]),m&&(c=s(m,o,n.length-1)),e.label=c}})},createClassBreakLabel:function(e){var t=e.minValue,n=e.maxValue,o=e.isFirstBreak,i=e.normalizationType,r=o?"":m.gt+" ",s="percent-of-total"===i?m.pct:"";return t=null==t?"":a.format(t),n=null==n?"":a.format(n),r+t+s+" "+m.ld+" "+n+s},setLabelsForClassBreaks:function(e){var t=e.classBreakInfos,n=e.classificationMethod,o=e.normalizationType,i=[];t&&t.length&&("standard-deviation"===n?console.log("setLabelsForClassBreaks: cannot set labels for class breaks generated using 'standard-deviation' method."):e.round?(i.push(t[0].minValue),t.forEach(function(e){i.push(e.maxValue)}),i=a.round(i),t.forEach(function(e,t){e.label=l.createClassBreakLabel({minValue:0===t?i[0]:i[t],maxValue:i[t+1],isFirstBreak:0===t,normalizationType:o})})):t.forEach(function(e,t){e.label=l.createClassBreakLabel({minValue:e.minValue,maxValue:e.maxValue,isFirstBreak:0===t,normalizationType:o})}))},updateClassBreak:function(e){var t,n=e.classBreaks,a=e.classificationMethod,o=e.normalizationType,i=e.change,r=i.index,s=i.value,m=-1,u=-1,c=n.length;if("standard-deviation"===a)return void console.log("updateClassBreak: cannot update labels for class breaks generated using 'standard-deviation' method.");0===r?m=r:r===c?u=r-1:(u=r-1,m=r),m>-1&&m<c&&(t=n[m],t.minValue=s,t.label=l.createClassBreakLabel({minValue:t.minValue,maxValue:t.maxValue,isFirstBreak:0===m,normalizationType:o})),u>-1&&u<c&&(t=n[u],t.maxValue=s,t.label=l.createClassBreakLabel({minValue:t.minValue,maxValue:t.maxValue,isFirstBreak:0===u,normalizationType:o}))},calculateDateFormatInterval:function(e){var t,n,a,o,i,r,s,l,m,c,d=e.length,p=1/0;for(e=e.map(function(e){return new Date(e)}),t=0;t<d-1;t++){for(a=e[t],i=[],l=1/0,m="",n=t+1;n<d;n++)o=e[n],r=a.getFullYear()!==o.getFullYear()&&"year"||a.getMonth()!==o.getMonth()&&"month"||a.getDate()!==o.getDate()&&"day"||a.getHours()!==o.getHours()&&"hour"||a.getMinutes()!==o.getMinutes()&&"minute"||a.getSeconds()!==o.getSeconds()&&"second"||"millisecond",s=u[r],s<l&&(l=s,m=r),i.push(r);l<p&&(p=l,c=m)}return c},createUniqueValueLabel:function(e){var t=e.value,n=e.fieldInfo,o=e.domain,i=e.dateFormatInterval,r=String(t),s=o&&o.codedValues?o.getName(t):null;return s?r=s:"number"==typeof t&&(r=n&&"date"===n.type?l.formatDate(t,i&&c[i]):a.format(t)),r},cloneColorVariable:function(e){var a;return e&&(a=n.mixin({},e),a.colors=r(a.colors),a.stops=a.stops&&a.stops.map(function(e){return e=n.mixin({},e),e.color&&(e.color=new t(e.color)),e}),a.legendOptions&&(a.legendOptions=n.mixin({},a.legendOptions))),a},cloneOpacityVariable:function(e){var t;if(e){t=n.mixin({},e);var a=t.opacityValues;a&&(t.opacityValues=a.slice(0)),a=t.stops,a&&(t.stops=a.map(function(e){return n.mixin({},e)})),a=t.legendOptions,a&&(t.legendOptions=n.mixin({},a))}return t},cloneSizeVariable:function(e){var t;if(e){t=n.mixin({},e),t.stops&&(t.stops=t.stops.map(function(e){return n.mixin({},e)}));var a=t.minSize;a&&"object"==typeof a&&(t.minSize=l.cloneSizeVariable(a)),a=t.maxSize,a&&"object"==typeof a&&(t.maxSize=l.cloneSizeVariable(a)),a=t.legendOptions,a&&(t.legendOptions=n.mixin({},a),(a=a.customValues)&&(t.legendOptions.customValues=a.slice(0)))}return t}}),l});