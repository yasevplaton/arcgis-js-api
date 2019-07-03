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

/*
# MIT LICENSE
# Copyright (c) 2011 Devon Govett
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy of this 
# software and associated documentation files (the "Software"), to deal in the Software 
# without restriction, including without limitation the rights to use, copy, modify, merge, 
# publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons 
# to whom the Software is furnished to do so, subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in all copies or 
# substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
# BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
# DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

define(["./Zlib"],function(t){return function(){function e(t){var e,a,i,s,r,n,h,o,d,c,p,l,f,u;for(this.data=t,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},r=null;;){switch(e=this.readUInt32(),d=function(){var t,e;for(e=[],n=t=0;t<4;n=++t)e.push(String.fromCharCode(this.data[this.pos++]));return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(e);break;case"fcTL":r&&this.animation.frames.push(r),this.pos+=4,r={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},s=this.readUInt16(),i=this.readUInt16()||100,r.delay=1e3*s/i,r.disposeOp=this.data[this.pos++],r.blendOp=this.data[this.pos++],r.data=[];break;case"IDAT":case"fdAT":for("fdAT"===d&&(this.pos+=4,e-=4),t=(null!=r?r.data:void 0)||this.imgData,n=l=0;0<=e?l<e:l>e;n=0<=e?++l:--l)t.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(this.transparency.indexed=this.read(e),(c=255-this.transparency.indexed.length)>0)for(n=f=0;0<=c?f<c:f>c;n=0<=c?++f:--f)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(e)[0];break;case 2:this.transparency.rgb=this.read(e)}break;case"tEXt":p=this.read(e),h=p.indexOf(0),o=String.fromCharCode.apply(String,p.slice(0,h)),this.text[o]=String.fromCharCode.apply(String,p.slice(h+1));break;case"IEND":return r&&this.animation.frames.push(r),this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(u=this.colorType)||6===u,a=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*a,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=e}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}var a,i,s,r,n,h;return e.load=function(t,a,i){var s;return"function"==typeof a&&(i=a),s=new XMLHttpRequest,s.open("GET",t,!0),s.responseType="arraybuffer",s.onload=function(){var t,r;return t=new Uint8Array(s.response||s.mozResponseArrayBuffer),r=new e(t),"function"==typeof(null!=a?a.getContext:void 0)&&r.render(a),"function"==typeof i?i(r):void 0},s.send(null)},0,i=1,s=2,a=0,1,e.prototype.read=function(t){var e,a;for(a=[],e=0;0<=t?e<t:e>t;0<=t?++e:--e)a.push(this.data[this.pos++]);return a},e.prototype.readUInt32=function(){var t,e,a,i;return t=this.data[this.pos++]<<24,e=this.data[this.pos++]<<16,a=this.data[this.pos++]<<8,i=this.data[this.pos++],t|e|a|i},e.prototype.readUInt16=function(){var t,e;return t=this.data[this.pos++]<<8,e=this.data[this.pos++],t|e},e.prototype.decodePixels=function(e){var a,i,s,r,n,h,o,d,c,p,l,f,u,g,y,m,w,v,I,b,D,U,x;if(null==e&&(e=this.imgData),0===e.length)return new Uint8Array(0);for(e=new t(e),e=e.getBytes(),f=this.pixelBitlength/8,m=f*this.width,u=new Uint8Array(m*this.height),h=e.length,y=0,g=0,i=0;g<h;){switch(e[g++]){case 0:for(r=I=0;I<m;r=I+=1)u[i++]=e[g++];break;case 1:for(r=b=0;b<m;r=b+=1)a=e[g++],n=r<f?0:u[i-f],u[i++]=(a+n)%256;break;case 2:for(r=D=0;D<m;r=D+=1)a=e[g++],s=(r-r%f)/f,w=y&&u[(y-1)*m+s*f+r%f],u[i++]=(w+a)%256;break;case 3:for(r=U=0;U<m;r=U+=1)a=e[g++],s=(r-r%f)/f,n=r<f?0:u[i-f],w=y&&u[(y-1)*m+s*f+r%f],u[i++]=(a+Math.floor((n+w)/2))%256;break;case 4:for(r=x=0;x<m;r=x+=1)a=e[g++],s=(r-r%f)/f,n=r<f?0:u[i-f],0===y?w=v=0:(w=u[(y-1)*m+s*f+r%f],v=s&&u[(y-1)*m+(s-1)*f+r%f]),o=n+w-v,d=Math.abs(o-n),p=Math.abs(o-w),l=Math.abs(o-v),c=d<=p&&d<=l?n:p<=l?w:v,u[i++]=(a+c)%256;break;default:throw new Error("Invalid filter algorithm: "+e[g-1])}y++}return u},e.prototype.decodePalette=function(){var t,e,a,i,s,r,n,h,o;for(a=this.palette,r=this.transparency.indexed||[],s=new Uint8Array((r.length||0)+a.length),i=0,a.length,t=0,e=n=0,h=a.length;n<h;e=n+=3)s[i++]=a[e],s[i++]=a[e+1],s[i++]=a[e+2],s[i++]=null!=(o=r[t++])?o:255;return s},e.prototype.copyToImageData=function(t,e){var a,i,s,r,n,h,o,d,c,p,l;if(i=this.colors,c=null,a=this.hasAlphaChannel,this.palette.length&&(c=null!=(l=this._decodedPalette)?l:this._decodedPalette=this.decodePalette(),i=4,a=!0),s=t.data||t,d=s.length,n=c||e,r=h=0,1===i)for(;r<d;)o=c?4*e[r/4]:h,p=n[o++],s[r++]=p,s[r++]=p,s[r++]=p,s[r++]=a?n[o++]:this.transparency.grayscale&&this.transparency.grayscale===p?0:255,h=o;else for(;r<d;)o=c?4*e[r/4]:h,s[r++]=n[o++],s[r++]=n[o++],s[r++]=n[o++],s[r++]=a?n[o++]:this.transparency.rgb&&this.transparency.rgb[1]===n[o-3]&&this.transparency.rgb[3]===n[o-2]&&this.transparency.rgb[5]===n[o-1]?0:255,h=o},e.prototype.decode=function(){var t;return t=new Uint8Array(this.width*this.height*4),this.copyToImageData(t,this.decodePixels()),t},r=function(t){var e;return h.width=t.width,h.height=t.height,h.clearRect(0,0,t.width,t.height),h.putImageData(t,0,0),e=new Image,e.src=n.toDataURL(),e},e.prototype.decodeFrames=function(t){var e,a,i,s,n,h,o,d;if(this.animation){for(o=this.animation.frames,d=[],a=n=0,h=o.length;n<h;a=++n)e=o[a],i=t.createImageData(e.width,e.height),s=this.decodePixels(new Uint8Array(e.data)),this.copyToImageData(i,s),e.imageData=i,d.push(e.image=r(i));return d}},e.prototype.renderFrame=function(t,e){var r,n,h;return n=this.animation.frames,r=n[e],h=n[e-1],0===e&&t.clearRect(0,0,this.width,this.height),(null!=h?h.disposeOp:void 0)===i?t.clearRect(h.xOffset,h.yOffset,h.width,h.height):(null!=h?h.disposeOp:void 0)===s&&t.putImageData(h.imageData,h.xOffset,h.yOffset),r.blendOp===a&&t.clearRect(r.xOffset,r.yOffset,r.width,r.height),t.drawImage(r.image,r.xOffset,r.yOffset)},e.prototype.animate=function(t){var e,a,i,s,r,n,h=this;return a=0,n=this.animation,s=n.numFrames,i=n.frames,r=n.numPlays,(e=function(){var n,o;if(n=a++%s,o=i[n],h.renderFrame(t,n),s>1&&a/s<r)return h.animation._timeout=setTimeout(e,o.delay)})()},e.prototype.stopAnimation=function(){var t;return clearTimeout(null!=(t=this.animation)?t._timeout:void 0)},e.prototype.render=function(t){var e,a;return t._png&&t._png.stopAnimation(),t._png=this,t.width=this.width,t.height=this.height,e=t.getContext("2d"),this.animation?(this.decodeFrames(e),this.animate(e)):(a=e.createImageData(this.width,this.height),this.copyToImageData(a,this.decodePixels()),e.putImageData(a,0,0))},e}()});