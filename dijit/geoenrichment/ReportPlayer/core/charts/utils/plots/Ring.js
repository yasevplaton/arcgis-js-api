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

define(["dojo/_base/lang","dojo/_base/declare","dojox/charting/plot2d/Base","dojox/charting/plot2d/_PlotEvents","dojox/charting/plot2d/common","dojox/gfx/matrix","dojox/lang/functional","dojox/lang/utils","./animation/_RingAnimation","./labelsRendering/LabelsUtil"],function(t,e,n,i,s,r,a,o,h,l){var u={createPath:function(t,e,n,i,s,r,a,o,h){var l=function(o){function h(i,s,a,o){var h=r-(o&&o.width||0),l=e+h/2,u=s-i,c=n.cx+l*Math.cos(i),d=n.cy+l*Math.sin(i),f=n.cx+l*Math.cos(s),x=n.cy+l*Math.sin(s),p=l-h,m=n.cx+p*Math.cos(i),y=n.cy+p*Math.sin(i),b=n.cx+p*Math.cos(s),v=n.cy+p*Math.sin(s);return t.createPath().moveTo(m,y).lineTo(c,d).arcTo(l,l,0,u>Math.PI,!0,f,x).lineTo(b,v).arcTo(p,p,0,u>Math.PI,!1,m,y).closePath().setFill(a).setStroke(o)}o=Math.max(o,.001);var l={cx:n.cx,cy:n.cy,r:e},u=i+2*o*Math.PI,c=u,d=i+2*Math.PI,f=a.series.stroke||{};return{bgShape:h(c,d,a.series.ringBackgroundColor||"#DDDDDD"),shape:h(i,u,s,f),end:u,ac:l}};return h.push({sliceIndex:o,func:l}),l}};return e([n,i,h],{_animationInfos:null,defaultParams:{labels:!0,ticks:!1,fixed:!0,precision:1,labelOffset:20,labelStyle:"default",radGrad:"native",fanSize:5,startAngle:0,animate:null},optionalParams:{radius:0,omitLabels:!1,labelFunc:null,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:"",labelWiring:{}},_lastRenderResults:null,constructor:function(e,n){this.opt=t.clone(this.defaultParams),o.updateWithObject(this.opt,n),o.updateWithPattern(this.opt,n,this.optionalParams),this.axes=[],this.run=null,this.dyn=[],this.runFilter=[]},clear:function(){return this.inherited(arguments),this.dyn=[],this.run=null,this},setAxis:function(t){return this},addSeries:function(t){return this.run=t,this},getSeriesStats:function(){return t.delegate(s.defaultStats)},getRequiredColors:function(){return this.run?this.run.data.length:0},getRenderResults:function(){return this._lastRenderResults},render:function(t,e){if(!this.dirty)return this;this.resetEvents(),this.dirty=!1,this._eventSeries={},this.cleanGroup();var n=this.group,i=this.chart.theme;if(!this.run||!this.run.data.length)return this;var s,o,h,c=(t.width-e.l-e.r)/2,d=(t.height-e.t-e.b)/2,f=Math.min(c,d),x=("font"in this.opt?this.opt.font:i.series.dataLabelsFont,r._degToRad(90)),p=this.events(),m=this.run.data.map(function(t,e){return"number"!=typeof t&&t.hidden&&(this.runFilter.push(e),t.hidden=!1),this.runFilter.some(function(t){return t===e})?"number"==typeof t?0:{y:0,text:t.text}:t},this);this.dyn=[],"radius"in this.opt&&(f=this.opt.radius);var y={cx:e.l+c,cy:e.t+d,r:f};if(s=a.map(m,"x ? Math.max(x.y, 0) : 0"),a.every(s,"<= 0"))return n.createCircle(y).setStroke(i.series.stroke),this.dyn=s.map(function(){return{}}),this;o=a.map(s,"/this",a.foldl(s,"+",0)),this.opt.labels&&(h=o.map(function(t,e){return l.getLabelInfo(this,m[e],i,{forceOneLine:!0,minSpace:20})},this));var b=a.map(m,function(t,e){var n=[this.opt,this.run];return null!=t&&"number"!=typeof t&&n.push(t),this.opt.styleFunc&&n.push(this.opt.styleFunc(t)),i.next("slice",n,!0)},this),v=0;if(this.opt.labels){h.forEach(function(t){v=Math.max(v,t.box.w)});var g=y.cx+f+v+e.r-t.width;if(g>0){var M=y.cx-f;if(M>g)y.cx-=g;else{var P=(g-M)/2;y.cx-=M+P,f-=P}}}var L=2*f+v;y.cx-=y.cx-f-(t.width-L)/2;var _=new Array(o.length),S=Math.min(f/10,.5*f/o.length),w=f;f-=S/2;var R=[],T=[];this._animationInfos=[],o.some(function(t,e){t=Math.max(t,.001);var s,r,a=m[e],o=b[e];s=o.series.fill;var h=u.createPath(n,f,y,x,s,S,o,e,this._animationInfos)(t);return shape=h.shape,i.series.isEditMode&&(shape.rawNode.style.cursor="pointer"),T.push(h.ac),this.dyn.push({fill:s,stroke:o.series.stroke}),p&&(r={element:"slice",index:e,run:this.run,shape:shape,x:e,y:"number"==typeof a?a:a.y,cx:y.cx,cy:y.cy,cr:f},this._connectEvents(r),_[e]=r),R.push({x:y.cx,y:y.cy+f}),f-=S+3,!1},this),this.opt.labels&&(R.forEach(function(t,e){var s=h[e];n.createPath().moveTo(t.x-5,t.y).lineTo(t.x+w-5,t.y).setStroke(i.series.labelWiring);this.renderLabel({x:t.x+w,y:t.y-s.box.h/2,text:s.getText({forceOneLine:!0,spaceToWidth:v})})},this),i.series.show100PercentLabel&&this._show100PercentLabel(i,f,y));var k=0;return this._eventSeries[this.run.name]=a.map(m,function(t){return t<=0?null:_[k++]}),this._lastRenderResults={labels:this.opt.labels,slicePies:T,maxLabelWidth:v},this.opt.animate&&this._renderAnimation(n,o),this},_show100PercentLabel:function(t,e,n){var i=l.getSimpleLabelInfo({text:"100%",font:t.series.dataLabelsFont,fontSize:Math.min(50,.6*e),fontColor:t.series.dataLabelsColor});this.renderLabel({x:n.cx-i.box.w/2,y:n.cy-i.box.h/2,text:i.text}).style.opacity="0.5"},renderLabel:function(t){var e=l.renderHTMLLabel(this.chart,t.x,t.y,t.text);return this.htmlElements.push(e),e}})});