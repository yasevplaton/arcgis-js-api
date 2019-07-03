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

define(["require","exports","../2d/engine/webgl/Geometry","./GeometryUtils"],function(r,o,n,t){Object.defineProperty(o,"__esModule",{value:!0});var e=function(){function r(r,o,n,t){this.left=r,this.top=o,this.right=n,this.bottom=t}return r.prototype.clone=function(){return new r(this.left,this.top,this.right,this.bottom)},r.prototype.move=function(r,o){this.left+=r,this.top+=o,this.right+=r,this.bottom+=o},r.prototype.rotate=function(r,o){var n=this.left,t=this.right,e=this.top,c=this.bottom,s=n*r-e*o,i=n*o+e*r,a=t*r-e*o,h=t*o+e*r,x=n*r-c*o,m=n*o+c*r,y=t*r-c*o,f=t*o+c*r;this.left=Math.min(s,a,x,y),this.top=Math.min(i,h,m,f),this.right=Math.max(s,a,x,y),this.bottom=Math.max(i,h,m,f)},r.overlaps=function(r,o){return r.right>o.left&&r.left<o.right&&r.bottom>o.top&&r.top<o.bottom},r}();o.Box=e;var c=function(){function r(r,o,n,t){this.anchor=r,this.corners=o,this.minzoom=n,this.maxzoom=t}return r.prototype.left=function(){return this.corners[0].x},r.prototype.right=function(){return this.corners[2].x},r.prototype.top=function(){return this.corners[1].y},r.prototype.bottom=function(){return this.corners[3].y},r}();o.Obstacle=c;var s=function(){function r(r,o,n){this.obstacles=[],this.mapAngle=r,this.padding=o,this.isScreenAligned=n,this.minzoom=i}return r.prototype.addBox=function(r,o,t,e,s,i,a){var h=o.left*t-this.padding,x=o.top*t-this.padding,m=o.right*t+this.padding,y=o.bottom*t+this.padding,f=[new n.Point(h,x),new n.Point(m,x),new n.Point(m,y),new n.Point(h,y)];if(0!==this.mapAngle){var p=Math.cos(this.mapAngle),l=Math.sin(this.mapAngle);r=r.clone(),r.rotate(p,l)}if(this.isScreenAligned||(e+=this.mapAngle),0!==e){var p=Math.cos(e),l=Math.sin(e);f[0].rotate(p,l),f[1].rotate(p,l),f[2].rotate(p,l),f[3].rotate(p,l);for(var u=0,g=1;g<4;g++)f[g].x<f[u].x?u=g:f[g].x===f[u].x&&f[g].y<f[u].y&&(u=g);if(u){for(var v=[],g=0;g<4;g++)v.push(f[(g+u)%4]);f=v}}if(s)for(var d=0,_=f;d<_.length;d++){var b=_[d];b.move(s[0],s[1])}this.obstacles.push(new c(r,f,i,a))},r}();o.Footprint=s;var i=.5,a=function(){function r(){this._grid=[]}return r.prototype.setAngle=function(r){},r.prototype.reset=function(){this._grid=[]},r.prototype.add=function(o){for(var n=this._grid,t=0,e=o.obstacles;t<e.length;t++)for(var c=e[t],s=c.anchor,i=r._gridClamp(Math.min(c.left()+s.x,s.x)),a=r._gridClamp(Math.max(c.right()+s.x,s.x)),h=r._gridClamp(Math.min(c.top()+s.y,s.y)),x=r._gridClamp(Math.max(c.bottom()+s.y,s.y)),m=h;m<=x;m++)for(var y=i;y<=a;y++){var f=n[16*m+y];f||(f=n[16*m+y]=[]),f.push(c)}},r.prototype.getMinZoom=function(o,n,e,c){if(0===o.obstacles.length)return t.C_INFINITY;for(var s=n,i=this._grid,a=0,h=o.obstacles;a<h.length;a++)for(var x=h[a],m=x.anchor,y=r._gridClamp(Math.min(x.left()+m.x,m.x)),f=r._gridClamp(Math.max(x.right()+m.x,m.x)),p=r._gridClamp(Math.min(x.top()+m.y,m.y)),l=r._gridClamp(Math.max(x.bottom()+m.y,m.y)),u=p;u<=l;u++)for(var g=y;g<=f;g++){var v=i[16*u+g];if(v)for(var d=0,_=v;d<_.length;d++){var b=_[d];if(!(x.minzoom>=b.maxzoom||b.minzoom>=x.maxzoom)&&(s=r._calcPlacementZoom(x,b,s))>=2)return t.C_INFINITY}}return s<2?s:t.C_INFINITY},r._gridClamp=function(r){return t.clamp(r>>9,-7,8)},r._calcPlacementZoom=function(o,n,e){var c=n.anchor.x-o.anchor.x;if(0===c&&(o.right()<n.left()||n.right()<o.left()))return e;var s=n.anchor.y-o.anchor.y;if(0===s&&(o.bottom()<n.top()||n.bottom()<o.top()))return e;var i=t.C_INFINITY;if(0!==c){var a=c>0?o.right()-n.left():o.left()-n.right(),h=a/c;h<i&&(i=h);var x=c>0?r._calcExtZoomX(o,n,h):r._calcExtZoomX(n,o,h);x<i&&(i=x)}if(0!==s){var m=s>0?o.bottom()-n.top():o.top()-n.bottom(),y=m/s;y<i&&(i=y);var f=s>0?r._calcExtZoomY(o,n,y):r._calcExtZoomY(n,o,y);f<i&&(i=f)}return i<o.minzoom||i<n.minzoom?e:(i=Math.min(i,o.maxzoom,n.maxzoom),i<e&&(i=e),i)},r._calcExtZoomX=function(r,o,n){var t,e,c,s;if(r.anchor.y+r.corners[2].y/n<o.anchor.y+o.corners[0].y/n){var i=r.corners[2].x-r.corners[3].x,a=r.corners[2].y-r.corners[3].y,h=o.corners[1].x-o.corners[0].x,x=o.corners[1].y-o.corners[0].y,m=i*x-a*h;m>=0?r.anchor.y+r.corners[3].y/n<o.anchor.y+o.corners[0].y/n?(t=r.corners[3],e=o.corners[0],c=o.corners[1],s=1):(t=o.corners[0],e=r.corners[3],c=r.corners[2],s=-1):r.anchor.y+r.corners[2].y/n>o.anchor.y+o.corners[1].y/n?(t=r.corners[2],e=o.corners[0],c=o.corners[1],s=1):(t=o.corners[1],e=r.corners[3],c=r.corners[2],s=-1)}else{var i=r.corners[2].x-r.corners[1].x,a=r.corners[2].y-r.corners[1].y,h=o.corners[3].x-o.corners[0].x,x=o.corners[3].y-o.corners[0].y,m=i*x-a*h;m<0?r.anchor.y+r.corners[1].y/n>o.anchor.y+o.corners[0].y/n?(t=r.corners[1],e=o.corners[0],c=o.corners[3],s=1):(t=o.corners[0],e=r.corners[1],c=r.corners[2],s=-1):r.anchor.y+r.corners[2].y/n<o.anchor.y+o.corners[3].y/n?(t=r.corners[2],e=o.corners[0],c=o.corners[3],s=1):(t=o.corners[3],e=r.corners[1],c=r.corners[2],s=-1)}var y=c.x-e.x,f=c.y-e.y;return s*((t.y-e.y)*y-(t.x-e.x)*f)/((r.anchor.x-o.anchor.x)*f-(r.anchor.y-o.anchor.y)*y)},r._calcExtZoomY=function(r,o,n){var t,e,c,s;if(r.anchor.x+r.corners[3].x/n<o.anchor.x+o.corners[1].x/n){var i=r.corners[3].x-r.corners[2].x,a=r.corners[3].y-r.corners[2].y,h=o.corners[0].x-o.corners[1].x,x=o.corners[0].y-o.corners[1].y,m=i*x-a*h;m<0?r.anchor.x+r.corners[2].x/n<o.anchor.x+o.corners[1].x/n?(t=r.corners[2],e=o.corners[1],c=o.corners[0],s=1):(t=o.corners[1],e=r.corners[2],c=r.corners[3],s=-1):r.anchor.x+r.corners[3].x/n>o.anchor.x+o.corners[0].x/n?(t=r.corners[3],e=o.corners[1],c=o.corners[0],s=1):(t=o.corners[0],e=r.corners[2],c=r.corners[3],s=-1)}else{var i=r.corners[3].x-r.corners[0].x,a=r.corners[3].y-r.corners[0].y,h=o.corners[2].x-o.corners[1].x,x=o.corners[2].y-o.corners[1].y,m=i*x-a*h;m>0?r.anchor.x+r.corners[0].x/n>o.anchor.x+o.corners[1].x/n?(t=r.corners[0],e=o.corners[1],c=o.corners[2],s=1):(t=o.corners[1],e=r.corners[0],c=r.corners[3],s=-1):r.anchor.x+r.corners[3].x/n<o.anchor.x+o.corners[2].x/n?(t=r.corners[3],e=o.corners[1],c=o.corners[2],s=1):(t=o.corners[2],e=r.corners[0],c=r.corners[3],s=-1)}var y=c.x-e.x,f=c.y-e.y;return s*((t.y-e.y)*y-(t.x-e.x)*f)/((r.anchor.x-o.anchor.x)*f-(r.anchor.y-o.anchor.y)*y)},r}();o.ConflictEngine=a});