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

define(["require","exports","./GeometryUtils","./Rect","./RectangleBinPack","../../../webgl/Texture"],function(t,e,i,s,a,h){return function(){function t(t,e,i){void 0===i&&(i=0),this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects=new Map,this._spriteCopyQueue=[],this.pixelRatio=1,(t<=0||e<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=t,this._pageHeight=e,i>0&&(this._maxItemSize=i),this.pixelRatio=1|window.devicePixelRatio,this._binPack=new a(this._pageWidth,this._pageHeight);var s=Math.floor(this._pageWidth),h=Math.floor(this._pageHeight);this._mosaicsData[0]=new Uint32Array(s*h),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}return t.prototype.getWidth=function(t){return t>=this._size.length?-1:this._size[t][0]},t.prototype.getHeight=function(t){return t>=this._size.length?-1:this._size[t][1]},t.prototype.getPage=function(t){return t<this._textures.length?this._textures[t]:null},t.prototype.has=function(t){return this._mosaicRects.has(t)},Object.defineProperty(t.prototype,"itemCount",{get:function(){return this._mosaicRects.size},enumerable:!0,configurable:!0}),t.prototype.getSpriteItem=function(t){return this._mosaicRects.get(t)},t.prototype.addSpriteItem=function(t,e,i,s,a,h){if(this._mosaicRects.has(t))return this._mosaicRects.get(t);var r=this._allocateImage(e[0],e[1]),o=r[0],n=r[1],p=r[2];if(o.width<=0||o.height<=0)return null;var _={rect:o,width:e[0],height:e[1],anchorX:i[0],anchorY:i[1],sdf:h,pixelRatio:1,page:n};return this._mosaicRects.set(t,_),this._copy({rect:o,spriteSize:e,spriteData:s,page:n,pageSize:p,repeat:a,sdf:h}),_},t.prototype.hasItemsToProcess=function(){return 0!==this._spriteCopyQueue.length},t.prototype.processNextItem=function(){var t=this._spriteCopyQueue.pop();t&&this._copy(t)},t.prototype.getSpriteItems=function(t){for(var e={},i=0,s=t;i<s.length;i++){var a=s[i];e[a]=this.getSpriteItem(a)}return e},t.prototype.getMosaicItemPosition=function(t,e){var i=this.getSpriteItem(t),s=i&&i.rect;if(!s)return null;s.width=i.width,s.height=i.height;var a=i.width,h=i.height;return{size:[i.width,i.height],tl:[(s.x+1)/this._size[i.page][0],(s.y+1)/this._size[i.page][1]],br:[(s.x+1+a)/this._size[i.page][0],(s.y+1+h)/this._size[i.page][1]],page:i.page}},t.prototype.bind=function(t,e,i,s){void 0===i&&(i=0),void 0===s&&(s=0),this._textures[i]||(this._textures[i]=new h(t,{pixelFormat:6408,dataType:5121,width:this._size[i][0],height:this._size[i][1]},new Uint8Array(this._mosaicsData[i].buffer)));var a=this._textures[i];a.setSamplingMode(e),this._dirties[i]&&(a.setData(new Uint8Array(this._mosaicsData[i].buffer)),a.generateMipmap()),t.bindTexture(a,s),this._dirties[i]=!1},t._copyBits=function(t,e,i,s,a,h,r,o,n,p,_){var g=s*e+i,c=o*h+r;if(_){c-=h;for(var u=-1;u<=p;u++,g=((u+p)%p+s)*e+i,c+=h)for(var l=-1;l<=n;l++)a[c+l]=t[g+(l+n)%n]}else for(var u=0;u<p;u++){for(var l=0;l<n;l++)a[c+l]=t[g+l];g+=e,c+=h}},t.prototype._copy=function(e){if(!(e.page>=this._mosaicsData.length)){var i=e.spriteData,s=this._mosaicsData[e.page];s&&i||console.error("Source or target images are uninitialized!");t._copyBits(i,e.spriteSize[0],0,0,s,e.pageSize[0],e.rect.x+1,e.rect.y+1,e.spriteSize[0],e.spriteSize[1],e.repeat),this._dirties[e.page]=!0}},t.prototype._allocateImage=function(t,e){t+=2,e+=2;var h=Math.max(t,e);if(this._maxItemSize&&this._maxItemSize<h){var r=Math.pow(2,Math.ceil(i.log2(t))),o=Math.pow(2,Math.ceil(i.log2(e))),n=new s(0,0,t,e);return this._mosaicsData.push(new Uint32Array(r*o)),this._dirties.push(!0),this._size.push([r,o]),this._textures.push(void 0),[n,this._mosaicsData.length-1,[r,o]]}var p=t%4?4-t%4:0,_=e%4?4-e%4:0,g=this._binPack.allocate(t+p,e+_);return g.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new a(this._pageWidth,this._pageHeight),this._allocateImage(t,e)):[g,this._currentPage,[this._pageWidth,this._pageHeight]]},t.prototype.dispose=function(){this._binPack=null;for(var t=0,e=this._textures;t<e.length;t++){var i=e[t];i&&i.dispose()}this._textures.length=0,this._mosaicsData.length=0,this._mosaicRects.clear()},t}()});