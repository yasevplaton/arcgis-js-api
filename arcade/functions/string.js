// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["require","exports","../Dictionary","../Feature","../languageUtils"],function(t,n,e,r,i){"use strict";function o(t,n){t.trim=function(t,e){return n(t,e,function(t,n,e){return i.pcCheck(e,1,1),i.toString(e[0]).trim()})},t.upper=function(t,e){return n(t,e,function(t,n,e){return i.pcCheck(e,1,1),i.toString(e[0]).toUpperCase()})},t.proper=function(t,e){return n(t,e,function(t,n,e){i.pcCheck(e,1,2);var r=1;2===e.length&&"firstword"===i.toString(e[1]).toLowerCase()&&(r=2);for(var o=/\s/,u=i.toString(e[0]),c="",a=!0,f=0;f<u.length;f++){var l=u[f];if(o.test(l))1===r&&(a=!0);else{l.toUpperCase()!==l.toLowerCase()&&(a?(l=l.toUpperCase(),a=!1):l=l.toLowerCase())}c+=l}return c})},t.lower=function(t,e){return n(t,e,function(t,n,e){return i.pcCheck(e,1,1),i.toString(e[0]).toLowerCase()})},t.guid=function(t,e){return n(t,e,function(t,n,e){if(i.pcCheck(e,0,1),e.length>0)switch(i.toString(e[0]).toLowerCase()){case"digits":return i.generateUUID().replace("-","").replace("-","").replace("-","").replace("-","");case"digits-hyphen":return i.generateUUID();case"digits-hyphen-braces":return"{"+i.generateUUID()+"}";case"digits-hyphen-parentheses":return"("+i.generateUUID()+")"}return"{"+i.generateUUID()+"}"})},t.console=function(t,e){return n(t,e,function(n,e,r){return 0===r.length||(1===r.length?t.console(i.toString(r[0])):t.console(i.toString(r))),i.voidOperation})},t.mid=function(t,e){return n(t,e,function(t,n,e){i.pcCheck(e,2,3);var r=i.toNumber(e[1]);if(isNaN(r))return"";if(r<0&&(r=0),2===e.length)return i.toString(e[0]).substr(r);var o=i.toNumber(e[2]);return isNaN(o)?"":(o<0&&(o=0),i.toString(e[0]).substr(r,o))})},t.find=function(t,e){return n(t,e,function(t,n,e){i.pcCheck(e,2,3);var r=0;if(e.length>2){if(r=i.toNumber(i.defaultUndefined(e[2],0)),isNaN(r))return-1;r<0&&(r=0)}return i.toString(e[1]).indexOf(i.toString(e[0]),r)})},t.left=function(t,e){return n(t,e,function(t,n,e){i.pcCheck(e,2,2);var r=i.toNumber(e[1]);return isNaN(r)?"":(r<0&&(r=0),i.toString(e[0]).substr(0,r))})},t.right=function(t,e){return n(t,e,function(t,n,e){i.pcCheck(e,2,2);var r=i.toNumber(e[1]);return isNaN(r)?"":(r<0&&(r=0),i.toString(e[0]).substr(-1*r,r))})},t.split=function(t,e){return n(t,e,function(t,n,e){i.pcCheck(e,2,4);var r,o=i.toNumber(i.defaultUndefined(e[2],-1)),u=i.toBoolean(i.defaultUndefined(e[3],!1));if(-1===o||null===o||!0===u?r=i.toString(e[0]).split(i.toString(e[1])):(isNaN(o)&&(o=-1),o<-1&&(o=-1),r=i.toString(e[0]).split(i.toString(e[1]),o)),!1===u)return r;for(var c=[],a=0;a<r.length&&!(-1!==o&&c.length>=o);a++)""!==r[a]&&void 0!==r[a]&&c.push(r[a]);return c})},t.text=function(t,e){return n(t,e,function(t,n,e){return i.pcCheck(e,1,2),i.toStringExplicit(e[0],e[1])})},t.concatenate=function(t,e){return n(t,e,function(t,n,e){var r=[];if(e.length<1)return"";if(i.isArray(e[0])){for(var o=i.defaultUndefined(e[2],""),u=0;u<e[0].length;u++)r[u]=i.toStringExplicit(e[0][u],o);return e.length>1?r.join(e[1]):r.join("")}if(i.isImmutableArray(e[0])){for(var o=i.defaultUndefined(e[2],""),u=0;u<e[0].length();u++)r[u]=i.toStringExplicit(e[0].get(u),o);return e.length>1?r.join(e[1]):r.join("")}for(var u=0;u<e.length;u++)r[u]=i.toStringExplicit(e[u]);return r.join("")})},t.reverse=function(t,e){return n(t,e,function(t,n,e){if(i.pcCheck(e,1,1),i.isArray(e[0])){var r=e[0].slice(0);return r.reverse(),r}if(i.isImmutableArray(e[0])){var o=e[0].toArray().slice(0);return o.reverse(),o}throw new Error("Invalid Parameter")})},t.replace=function(t,e){return n(t,e,function(t,n,e){i.pcCheck(e,3,4);var r=i.toString(e[0]),o=i.toString(e[1]),u=i.toString(e[2]);return 4!==e.length||i.toBoolean(e[3])?i.multiReplace(r,o,u):r.replace(o,u)})},t.domainname=function(t,e){return n(t,e,function(t,n,e){if(i.pcCheck(e,2,4),e[0]instanceof r)return e[0].domainValueLookup(i.toString(e[1]),e[2],void 0===e[3]?void 0:i.toNumber(e[3]));throw new Error("Invalid Parameter")})},t.domaincode=function(t,e){return n(t,e,function(t,n,e){if(i.pcCheck(e,2,4),e[0]instanceof r)return e[0].domainCodeLookup(i.toString(e[1]),e[2],void 0===e[3]?void 0:i.toNumber(e[3]));throw new Error("Invalid Parameter")})},t.urlencode=function(t,r){return n(t,r,function(t,n,r){if(i.pcCheck(r,1,1),null===r[0])return"";if(r[0]instanceof e){for(var o="",u=0,c=r[0].keys();u<c.length;u++){var a=c[u],f=r[0].field(a);""!==o&&(o+="&"),o+=null===f?encodeURIComponent(a)+"=":encodeURIComponent(a)+"="+encodeURIComponent(f)}return o}return encodeURIComponent(i.toString(r[0]))})}}Object.defineProperty(n,"__esModule",{value:!0}),n.registerFunctions=o});