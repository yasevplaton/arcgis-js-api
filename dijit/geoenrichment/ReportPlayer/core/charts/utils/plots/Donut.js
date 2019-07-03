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

define(["dojo/_base/declare","dojo/_base/lang","dojox/charting/plot2d/Base","dojox/charting/plot2d/_PlotEvents","dojox/charting/plot2d/common","dojox/gfx/matrix","dojox/lang/functional","dojox/lang/utils","./animation/_DonutAnimation","./labelsRendering/LabelOverlapFixer","./labelsRendering/LabelsUtil"],function(e,t,n,a,i,s,r,l,o,h,u){var c={createPath:function(e,t,n,a,i,s,r,l,o,h,u,c){var f=function(i,c,f){t=void 0!==c?c:t;var b=d.getEndAngle(t,i,s,r,o,u,f);1===i&&(b=Number(Math.floor(1e5*b)/1e5));var x=n*l,g=b-t,p=a.cx+n*Math.cos(t),m=a.cy+n*Math.sin(t),_=a.cx+n*Math.cos(b),v=a.cy+n*Math.sin(b);if(x){var M=a.cx+x*Math.cos(t),y=a.cy+x*Math.sin(t),P=a.cx+x*Math.cos(b),R=a.cy+x*Math.sin(b);shape=e.createPath().moveTo(M,y).lineTo(p,m).arcTo(n,n,0,g>Math.PI,!0,_,v).lineTo(P,R).arcTo(x,x,0,g>Math.PI,!1,M,y).closePath().setStroke(h.series.stroke)}else shape=e.createPath().moveTo(a.cx,a.cy).lineTo(p,m).arcTo(n,n,0,g>Math.PI,!0,_,v).lineTo(a.cx,a.cy).closePath().setStroke(h.series.stroke);return shape.setFill(h.series.fill),{shape:shape,end:b,donutGap:r}};return c.push({isSlice:!0,sliceIndex:i,func:f}),f}},d={getStartAngle:function(e,t){return e.series.donutArcPercent&&100!==e.series.donutArcPercent?(100-e.series.donutArcPercent)/100*360/2-270:(e.series.startAngle||0)+t},getEndAngle:function(e,t,n,a,i,s,r){var l=e+2*t*Math.PI-a;if(n){var o=s+2*Math.PI-a;r||i.series.donutArcPercent&&100!==i.series.donutArcPercent?(l+=a,l=Math.min(l,o)):l=o}return l}};return e([n,a,o],{enableHole:!0,enableGap:!0,startAngleOffset:0,_animationInfos:null,_dataLabels:null,_labelBoxes:null,defaultParams:{labels:!0,ticks:!1,fixed:!0,precision:1,labelStyle:"outside",startAngle:0,animate:null},optionalParams:{radius:0,omitLabels:!1,labelFunc:null,stroke:{},outline:{},fill:{},styleFunc:null,font:"",fontColor:"",labelWiring:{}},constructor:function(e,n){this.opt=t.clone(this.defaultParams),l.updateWithObject(this.opt,n),l.updateWithPattern(this.opt,n,this.optionalParams),this.axes=[],this.run=null,this.dyn=[],this.runFilter=[]},clear:function(){return this.inherited(arguments),this.dyn=[],this.run=null,this},setAxis:function(e){return this},addSeries:function(e){return this.run=e,this},getSeriesStats:function(){return t.delegate(i.defaultStats)},getRequiredColors:function(){return this.run?this.run.data.length:0},getRenderResults:function(){return this._lastRenderResults},render:function(e,n){function a(e,t,n){return d.getEndAngle(e,t,n,L,l,v)}if(!this.dirty)return this;this.resetEvents(),this._eventSeries={},this.cleanGroup();var i=this.group,l=this.chart.theme;if(!this.run||!this.run.data.length)return this;var o,h,f,b,x,g,p=(e.width-n.l-n.r)/2,m=(e.height-n.t-n.b)/2/this._getRYMultiplier(l),_=Math.min(p,m),v=s._degToRad(this._getStartAngle(l)),M=v,y=this.events(),P=this.run.data.map(function(e,t){return"number"!=typeof e&&e.hidden&&(this.runFilter.push(t),e.hidden=!1),this.runFilter.some(function(e){return e===t})?"number"==typeof e?0:{y:0,text:e.text}:e},this);this.dyn=[],"radius"in this.opt&&(_=this.opt.radius,g=_);var R,A={cx:n.l+p,cy:n.t+m,r:_};if(f=r.map(P,"x ? Math.max(x.y, 0) : 0"),r.every(f,"<= 0"))return i.createCircle(A).setStroke(l.series.stroke),this.dyn=f.map(function(){return{}}),this;b=r.map(f,"/this",r.foldl(f,"+",0)),this.opt.labels&&(x=b.map(function(e,t){return u.getLabelInfo(this,P[t],l,{horizontalAlign:l.series.dataLabelsHorizontalAlign,dataLabelsMaxWidth:l.series.dataLabelsMaxWidth})},this));var S=this.enableHole?(l.series.donutHolePercent||0)/100:0,L=this.enableGap?s._degToRad(l.series.donutGap||0):0;b=this._fixSlices(b,L),this._lastRenderResults={},this._animationInfos=[],this._labelBoxes=[];var T=r.map(P,function(e,t){var n=[this.opt,this.run];return null!=e&&"number"!=typeof e&&n.push(e),this.opt.styleFunc&&n.push(this.opt.styleFunc(e)),l.next("slice",n,!0)},this),w=this._preprocessParams(P,l,_,_*S,p,m,A,b);if(A=w.circle,_=w.r,this.opt.labels)switch(o=0,h=0,x.forEach(function(e,t){o=Math.max(o,e.box.w),h=Math.max(h,e.box.h)}),this.opt.labelStyle){case"outside":var E=_;_=Math.min(p-o,m-h)-5,g=_+10,_=Math.max(_,E/2);break;case"inside":var k=(_-_*S)/2+_*S;g=Math.abs(k+(_-o/2))/2;break;case"columns":_=Math.min(p-o-20,m-2*h),g=_}var I=new Array(b.length);if(b.some(function(e,t){e=this._getSliceValueAt(b,t,l);var n,a=P[t],s=T[t];R=_*S;var r=c.createPath(i,M,_,A,t,t+1===b.length,L,S,l,s,v,this._animationInfos)(e),o=r.end;return shape=r.shape,l.series.isEditMode&&(shape.rawNode.style.cursor="pointer"),this.dyn.push({fill:void 0,stroke:s.series.stroke}),y&&(n={element:"slice",index:t,run:this.run,shape:shape,x:t,y:"number"==typeof a?a:a.y,cx:A.cx,cy:A.cy,cr:_},this._connectEvents(n),I[t]=n),M=o+L,!1},this),this.opt.labels)if("outside"===this.opt.labelStyle||"inside"===this.opt.labelStyle)M=v,b.some(function(e,t){e=this._getSliceValueAt(b,t,l);var n=x[t];if(e<=0)return!1;T[t];if(e>=1)return this._labelBoxes.push({x:A.cx-n.box.w/2,y:A.cy-n.box.h/2,w:n.box.w,h:n.box.h,text:n.getText()}),!0;var i=a(M,e,t+1===b.length);if(this.opt.omitLabels&&i-M<.001)return!1;var s,r,o=(M+i)/2;return"outside"===this.opt.labelStyle?(s=A.cx+g*Math.cos(o)-(n.box.w/2-n.box.w/2*Math.cos(o)),r=A.cy+g*Math.sin(o)-(n.box.h/2-n.box.h/2*Math.sin(o))):(s=A.cx+g*Math.cos(o)-n.box.w/2,r=A.cy+g*Math.sin(o)-n.box.h/2),this._labelBoxes.push({x:s,y:r,w:n.box.w,h:n.box.h,text:n.getText()}),M=i+L,!1},this);else if("columns"===this.opt.labelStyle){M=v;var F=this.opt.omitLabels,j=[];b.forEach(function(e,t){e=this._getSliceValueAt(b,t,l);var n=a(M,e,t+1===b.length),i=(M+n)/2;j.push({angle:i,left:Math.cos(i)<0,theme:T[t],index:t,omit:!!F&&n-M<.001}),M=n+L},this),this._getProperLabelRadius(j,x[0].box.h,1.1*g);for(var B=0;B<j.length;B++){var G=j[B],O=x[B];if(!G.omit){var W=A.cx-p,H=A.cx+p,V=O.box.w+5,C=A.cx+G.labelR*Math.cos(G.angle),Y=A.cy+G.labelR*Math.sin(G.angle),z=G.left?W+V:H-V,N=G.left?W:z+5,q=i.createPath().moveTo(A.cx+g*Math.cos(G.angle),A.cy+g*Math.sin(G.angle));q.lineTo(C,Y),q.lineTo(z,Y).setStroke(G.theme.series.labelWiring),this._labelBoxes.push({x:N,y:Y-O.box.h/2,w:O.box.w,h:O.box.h,text:O.getText()})}}}this._renderLabels(i,l,e,n);var D=0;return this._eventSeries[this.run.name]=r.map(P,function(e){return e<=0?null:I[D++]}),this.dirty=!1,this._lastRenderResults=t.mixin(this._lastRenderResults,{labels:this.opt.labels,radiusInner:R,radiusOuter:_}),this._renderAdditionalElements(P,i,l,_,R,A,b),this.opt.animate&&this._renderAnimation(l,_,i,A,b),this},_renderLabels:function(e,t,n,a){this._dataLabels=[],h.fixLabelsOverlap(this._labelBoxes,n,a,this._getFixLabelsParams(),e),this._labelBoxes.forEach(function(e){e.hidden||this._dataLabels.push(this.renderLabel(e))},this)},renderLabel:function(e){var t=u.renderHTMLLabel(this.chart,e.x,e.y,e.text);return this.htmlElements.push(t),t},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:3,yGap:3,xTolerance:0,yTolerance:0}},_getStartAngle:function(e){return d.getStartAngle(e,this.startAngleOffset)},_getEndAngle:function(e){return 0},_fixSlices:function(e,t){var n=[],a=0,i=[],s=t/(2*Math.PI)+.001;e.forEach(function(e,t){if(e<s){var r=s-e;e=s,a+=r,i.push(t),n[t]=e}});var r=a/(e.length-i.length);return e.forEach(function(e,t){-1===i.indexOf(t)&&(e-=r,n[t]=e)}),n},_getSliceValueAt:function(e,t,n){return Math.max(0,e[t])*(n.series.donutArcPercent?n.series.donutArcPercent/100:1)},_preprocessParams:function(e,t,n,a,i,s,r,l){return{circle:r,r:n}},_getRYMultiplier:function(e){return Math.max(.625,e.series.donutArcPercent&&100!==e.series.donutArcPercent?(1+Math.cos(s._degToRad(360*(100-e.series.donutArcPercent)/100/2.1)))/2:1)},_renderAdditionalElements:function(e,t,n,a,i,s,r){},_getProperLabelRadius:function(e,t,n){var a,i,s=1,r=1;if(1===e.length)return void(e[0].labelR=n);for(var l=0;l<e.length;l++){var o=Math.abs(Math.sin(e[l].angle));e[l].left?s>=o&&(s=o,a=e[l]):r>=o&&(r=o,i=e[l])}a.labelR=i.labelR=n,this._calculateLabelR(a,e,t),this._calculateLabelR(i,e,t)},_calculateLabelR:function(e,t,n){for(var a,i=e.index,s=t.length,r=e.labelR;!(t[i%s].left^t[(i+1)%s].left);)t[(i+1)%s].omit||(a=(Math.sin(t[i%s].angle)*r+(t[i%s].left?-n:n))/Math.sin(t[(i+1)%s].angle),r=a<e.labelR?e.labelR:a,t[(i+1)%s].labelR=r),i++;i=e.index;for(var l=0===i?s-1:i-1;!(t[i].left^t[l].left);)t[l].omit||(a=(Math.sin(t[i].angle)*r+(t[i].left?n:-n))/Math.sin(t[l].angle),r=a<e.labelR?e.labelR:a,t[l].labelR=r),i--,l--,i=i<0?i+t.length:i,l=l<0?l+t.length:l}})});