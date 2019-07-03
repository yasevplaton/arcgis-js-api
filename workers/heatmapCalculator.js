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

!function(t,e){function i(e){var i=e.data,a=i.action,r=i.msgId;if(a&&r)if("initialize"==a)n=new t.HeatmapCalculator(i),postMessage({msgId:r});else if("calculate"==a){var s=n.calculateImageData(i);postMessage({msgId:r,imageData:s},s)}}if("function"==typeof define&&define.amd?define([],e):t.HeatmapCalculator=e(),t.importScripts&&"function"==typeof t.importScripts){var n;t.addEventListener("message",i,!1)}}(this,function(){function t(t){t=t||{},this.radius=t.blurRadius||10,this.maxVal=t.maxPixelIntensity,this.minVal=t.minPixelIntensity,this.field=t.field,this.fieldOffset=t.fieldOffset,this.width=t.width,this.height=t.height,this.gradient=t.gradient,this.stats=null}function e(t,e){for(var i=new Array(t),n=0;n<t;n++)for(var a=i[n]=new Array(e),r=0;r<e;r++)a[r]=0;return i}function i(t,e){return t-e}var n=!!window.ArrayBuffer;return t.prototype.calculateImageData=function(t){var e=this.radius=t.blurRadius||this.blurRadius;this.maxVal=null!=t.maxPixelIntensity?t.maxPixelIntensity:this.maxPixelIntensity,this.minVal=null!=t.minPixelIntensity?t.minPixelIntensity:this.minPixelIntensity;var i=this.field="field"in t?t.field:this.field,n=this.fieldOffset="fieldOffset"in t?t.fieldOffset:this.fieldOffset,a=t.screenPoints,r=t.gradient;if(r)this.gradient=r;else{if(!this.gradient)return!1;r=this.gradient}var s=t.features,l=t.mapinfo;if(!a)if(s&&l)a=this.screenPoints=this._calculateScreenPoints(s,l);else if(!l&&this.screenPoints){var u=!0;t.width&&t.width!=this.width&&(u=!1,this.width=t.width),t.height&&t.height!=this.height&&(u=!1,this.height=t.height),u?a=this.screenPoints:this.screenPoints=null}if(!a)return!1;var f=l.width||t.width||this.width,o=l.height||t.height||this.height,h=this._calculateIntensityMatrix(a,f,o,e,i,n);return this._lastMatrix=h.matrix,this._maxIntVal=h.max,this._createImageData(f,o,this._lastMatrix,r)},t.prototype._calculateScreenPoints=function(t,e){var i=e.resolution,n=e.width,a=e.height,r=e.extent,s=[];if(!r)return!1;i||(i=a?Math.abs(r[3]-r[1])/a:Math.abs(r[2]-r[0])/n);for(var l=0,u=t.length;l<u;l++){var f=t[l];s[l]={x:Math.round((f.geometry.x-r[0])/i),y:Math.round((r[3]-f.geometry.y)/i),attributes:f.attributes}}return s},t.prototype._calculateIntensityMatrix=function(t,i,n,a,r,s){var l,u=e(n,i),f=Math.round(4.5*a),o=a*a,h=[],c=2*f+1,m=-1,d=1,g=-1/0;s=s||0;for(var x=function(t){return"function"==typeof t?t:t?"abs"==s?function(e){return-1*+e.attributes[t]}:function(e){return+e.attributes[t]+s}:function(){return 1}}(r);++m<c;)h[m]=Math.exp(-Math.pow(m-f,2)/(2*o))/Math.sqrt(2*Math.PI)*(a/2);for(m=0;m<t.length;m++){var v=t[m],y=v.x-f,p=v.y-f,w={x:y,y:p};if(d=+x(v),!isNaN(d)&&null!==d)for(var b=Math.min(v.y+f,n-1),M=Math.min(v.x+f,i-1);p<=b;){for(var I=h[p-w.y];y<=M;)y>-1&&p>-1&&(l=u[p][y]+=I*h[y-w.x]*d)>g&&(g=l),y++;p++,y=w.x}}return{matrix:u,max:g}},t.prototype._createImageData=function(t,e,i,a){if(!n)return this._createPixelData(t,e,i,a);var r=new Uint32Array(t*e);a=a.buffer?new Uint32Array(a.buffer):new Uint32Array(new Uint8Array(a).buffer);for(var s=this.maxVal,l=this.minVal,u=a.length/(s-l),f=0;f<e;f++)for(var o=i[f],h=0;h<t;h++){var c=o[h],m=f*t+h,d=Math.floor((c-l)*u);r[m]=d<0?a[0]:d<a.length?a[d]:a[a.length-1]}return r},t.prototype._createPixelData=function(t,e,i,n){for(var a=new Array(t*e*4),r=this.maxVal,s=this.minVal,l=n.length/4/(r-s),u=3,f=0;f<e;f++)for(var o=i[f],h=0;h<t;h++){var c=o[h],m=4*(f*t+h)+3,d=4*Math.floor((c-s)*l)+3;for(d<3?d=3:d>n.length-1&&(d=n.length-1),u=4;u--;)a[m-u]=n[d-u]}return a},t.calculateStats=function(t,e){if(!t)return!1;for(var i,n,a,r,s,l=t.length,u=0,f=0,o=0,h=0,c=1/0,m=-1/0;l--;)for(a=t[l],i=a.length;i--;)s=a[i],e&&!e(s)||(r||(r=s),n=s-r,h+=s,u+=n,f+=n*n,s<c&&(c=s),s>m&&(m=s),o++);return o>0?{mean:h/o,stdDev:Math.sqrt((f-u*u/o)/o),min:c,max:m,mid:(m-c)/2}:{mean:0,stdDev:0,min:0,max:0,mid:0}},t.getBinnedValues=function(t){function n(){console.log("not enough information to determine bins for HeatmapCalculator.getBinnedValues")}function a(t,e,i){for(var n=[],a=t;a<e;a+=i)n.push(a);return n}t=t||{};var r=t.stats,s=t.min,l=t.max,u=t.bins,f=t.count,o=t.size,h=t.values;if(!h)return console.log("values are required for HeatmapCalculator.getBinnedValues function"),!1;if(r&&null!=r.max&&null!=r.min&&(s=r.min,l=r.max),!u)if(o){if(null==s&&(s=0),null==l){if(null==f)return n(),!1;l=s+f*o}u=a(s,l,o)}else if(f){if(r&&null!=r.min&&null!=r.max?(s=r.min,l=r.max):null!=l&&l>0&&null==s&&(s=0),null==s||null==l)return n(),!1;o=(l-s)/f,u=a(s,l,o)}f=u.length;for(var c,m,d,g,x,v=e(f,0),y=h.length;y--;)for(m=h[y],c=m.length;c--;){for(d=m[c],x=1;x<f&&(g=u[x],!(d<g));x++);v[x-1].push(d)}return v.map(function(t){return t.sort(i)})},t.getHistogramData=function(e){e=e||{};var i=e.binnedData,n=e.stats,a=e.byStdDev,r=e.matrix,s=e.binOptions||{};if(!i){if(!r)return console.log("no data provided to HeatmapCalculator.getHistogramData"),!1;if(s.values=r,a&&(n||(n=t.calculateStats(r)),s.size=n.stdDev),s.stats=n,!(i=t.getBinnedValues(s)))return!1}var l,u,f,o,h;if(i.length,s.bins)o=s.bins;else for(o=[],l=0;l<i.length;l++)f=i[l],o.push(f[0]);for(h=[],l=0;l<o.length-1;l++)f=o[l],h[l]={range:[f,o[l+1]],count:f.length};return n?u=n.max:(f=i[l],u=f[f.length-1]),f=o[l],h[l]={range:[f,u],count:f.length},h},t});