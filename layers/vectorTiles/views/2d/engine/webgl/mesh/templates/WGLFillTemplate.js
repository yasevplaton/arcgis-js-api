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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","dojo/has","../../../../../../core/Logger","../../../../../../core/libs/earcut/earcut","../../color","../../definitions","../../enums","../../enums","../../number","../../TileClipper","../../WGLDisplayRecord","../Tesselator","./WGLMeshTemplate"],function(e,t,i,r,s,o,l,n,h,a,p,u,f,g,v){Object.defineProperty(t,"__esModule",{value:!0});var d=s.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLFillTemplate"),y=[],_=[],c=function(e){function t(t,i,s,o,l,n,a,p){var f=e.call(this)||this;f.fillColor=o,f.tl=l,f.br=n,f.aux=a,f.isBFS=p,f.geometryType=h.WGLGeometryType.FILL,f.useLibtess=!1;var v=r("esri-featurelayer-webgl");return f.useLibtess="libtess"===((v||{}).tesselator||"libtess"),f.useLibtess&&(f._tesselator=new g.default),f.vvFlags=i,f._materialStore=t,f.materialId=f._materialStore.createSpriteMaterial(s,f.geometryType,i),f._tileClipper=new u.TileClipper(0,0,0,1,8),f._tileClipper.setExtent(512),f}return i(t,e),t.fromSimpleFill=function(e,i,r,s,o,n){void 0===n&&(n=!1);var h=r.color,a=h&&"none"!==r.style&&l.premultiplyAlphaRGBA(h)||0;if(!s)return new t(e,i,null,a,0,0,0,n);var u=s.rect,f=s.width,g=s.height,v=u.x+1,d=u.y+1,y=u.x+1+f,_=u.y+1+g;return new t(e,i,s,a,p.i1616to32(v,d),p.i1616to32(y,_),p.i8888to32(p.nextHighestPowerOfTwo(y-v),p.nextHighestPowerOfTwo(_-d),0,0),n)},t.fromPictureFill=function(e,i,r,s,o,l){void 0===l&&(l=!1);var h=n.PICTURE_FILL_COLOR,a=s.rect,u=s.width,f=s.height,g=a.x+1,v=a.y+1,d=a.x+1+u,y=a.y+1+f;return new t(e,i,s,h,p.i1616to32(g,v),p.i1616to32(d,y),p.i8888to32(p.nextHighestPowerOfTwo(r.width),p.nextHighestPowerOfTwo(r.height),0,0),l)},t.prototype.writeMesh=function(e,t,i,r,s,o,l){if(y.length=0,this.vvFlags&a.WGLVVFlag.COLOR||0!==this.fillColor){if("esriGeometryPolygon"!==i)return void d.error("Unable to handle geometryType: "+i);var n=s.geometry,h=this._isClippingRequired(n),p=h?this._clip(n,!this.useLibtess):n.rings;return this.useLibtess?this._writeMeshLibtess(e,t,i,r,p,h,o,l):this._writeMeshEarcut(e,t,i,r,p,h,o,l)}},t.prototype._isClippingRequired=function(e){for(var t=0,i=e.rings;t<i.length;t++){var r=i[t],s=r.length;if(!(s<3)){var o=r[0][0],l=r[0][1];if(o<-8||o>520||l<-8||l>520)return!0;for(var n=1;n<s;++n)if(o+=r[n][0],l+=r[n][1],o<-8||o>520||l<-8||l>520)return!0}}return!1},t.prototype._clip=function(e,t){var i,r;this._tileClipper.reset(3);for(var s=0,o=e.rings;s<o.length;s++){var l=o[s],n=l.length;if(!(n<3)){i=l[0][0],r=l[0][1],this._tileClipper.moveTo(i,r);for(var h=1;h<n;++h)i+=l[h][0],r+=l[h][1],this._tileClipper.lineTo(i,r);this._tileClipper.close()}}return this._tileClipper.result(t)},t.prototype._writeMeshLibtess=function(e,t,i,r,s,o,l,n){if(s&&s.length){var h=this._materialStore.get(this.materialId),a=[],p=t.indexVector,u=t.get("geometry"),g=new f(r,this.geometryType,this.materialId),v=this._getOffset(u,h),d=o;g.vertexFrom=v,g.indexFrom=p.length,e.push(g),this._tesselator.beginPolygon(y,a);for(var _=0,c=s;_<c.length;_++){var w=c[_];if(!(w.length<3)){this._tesselator.beginContour();var m=void 0,x=void 0;d?(m=w[0].x,x=w[0].y):(m=w[0][0],x=w[0][1]);var C=[m,x,0];this._tesselator.addVertex(C,C);for(var L=1;L<w.length-1;L++){var T=void 0,b=void 0;d?(m=w[L].x,x=w[L].y):(T=w[L][0],b=w[L][1],m+=T,x+=b);var V=[m,x,0];this._tesselator.addVertex(V,V)}this._tesselator.endContour()}}this._tesselator.endPolygon(),this._writeVerticesLibTess(g,u,r,y,h,n),this._writeIndicesLibTess(g,p,v,a)}},t.prototype._writeMeshEarcut=function(e,t,i,r,s,o,l,n){if(s&&s.length){var h=this._materialStore.get(this.materialId),a=t.indexVector,p=t.get("geometry"),u=new f(r,this.geometryType,this.materialId),g=this._getOffset(p,h);u.vertexFrom=g,u.indexFrom=a.length,e.push(u);for(var v=0,d=0,c=o,w=0,m=s;w<m.length;w++){var x=m[w],C=d,L=void 0,T=void 0;c?(L=x[0].x,T=x[0].y):(L=x[0][0],T=x[0][1]),y[d++]=L,y[d++]=T;for(var b=0,V=1;V<x.length;++V){var O=void 0,I=void 0;if(c){var F=L,P=T;L=x[V].x,T=x[V].y,O=L-F,I=T-P}else O=x[V][0],I=x[V][1],L+=O,T+=I;b-=O*(T+T+I),y[d++]=L,y[d++]=T}b>0?(C-v>0&&(this._write(u,a,p,g,r,y,_,v,C,h,n),v=C),_.length=0):b<0&&C-v>0?_.push(.5*(C-v)):d=C}d-v>0&&this._write(u,a,p,g,r,y,_,v,d,h,n),y.length=_.length=0}},t.prototype._write=function(e,t,i,r,s,l,n,h,a,p,u){var f=o(l.slice(h,a),n,2);if(f.length){var g=this._getOffset(i,p);this._writeVertices(e,i,s,l,n,p,u),this._writeIndices(e,t,g,f)}},t.prototype._getOffset=function(e,t){var i=t.materialKeyInfo,r=i.hasVV()?8:6;return e.length/r},t.prototype._writeVertices=function(e,t,i,r,s,o,l){for(var n=0;n<r.length;n+=2){var h=p.i1616to32(r[n],r[n+1]);t.push(h),t.push(i),t.push(this.fillColor),t.push(this.tl),t.push(this.br),t.push(this.aux),this._writeVV(t,l,o),e.vertexCount++}},t.prototype._writeIndices=function(e,t,i,r){for(var s=i,o=0;o<r.length;o+=3)t.push(s+r[o]),t.push(s+r[o+1]),t.push(s+r[o+2]),e.indexCount+=3},t.prototype._writeVerticesLibTess=function(e,t,i,r,s,o){for(var l=0;l<r.length;l+=2){var n=p.i1616to32(r[l],r[l+1]);t.push(n),t.push(i),t.push(this.fillColor),t.push(this.tl),t.push(this.br),t.push(this.aux),this._writeVV(t,o,s),e.vertexCount++}},t.prototype._writeIndicesLibTess=function(e,t,i,r){for(var s=i,o=0;o<r.length;o++)t.push(s+r[o]),e.indexCount++},t.prototype._writeVV=function(e,t,i){i.materialKeyInfo.hasVV()&&(this.isBFS?(e.push(4294967295),e.push(4294967295)):(e.push(t[h.VVType.COLOR]),e.push(t[h.VVType.OPACITY])))},t}(v.default);t.default=c});