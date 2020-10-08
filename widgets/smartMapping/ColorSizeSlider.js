// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/maybe","../../core/accessorSupport/decorators","../../renderers/visualVariables/support/ColorSizeStop","../../renderers/visualVariables/support/ColorStop","../../renderers/visualVariables/support/SizeStop","./SmartMappingSliderBase","./ColorSizeSlider/ColorSizeSliderViewModel","./support/utils","./../support/widget"],(function(e,i,r,t,l,o,a,s,n,d,p,u){"use strict";var m="esri-color-size-slider",v="esri-color-size-slider__ramp",c="esri-color-size-slider__slider-container",h="esri-color-size-slider__histogram-container",b="esri-widget",g="esri-widget--panel",f="esri-disabled";return function(e){function i(i,r){var t=e.call(this,i,r)||this;return t._bgFillId=null,t._backgroundFillColor="#e0e0e0",t._minRampFillWidth=.2,t._rampFillId=null,t._rampNode=null,t._maxRampFillWidth=1,t.label=void 0,t.messages=null,t.stops=null,t.viewModel=new d,t.zoomOptions=null,t._bgFillId=t.id+"-bg-fill",t._rampFillId=t.id+"-linear-gradient",t}var n;return r.__extends(i,e),n=i,i.fromRendererResult=function(e,i){var r=e.color.visualVariable.stops,t=e.size.visualVariables,l=e.statistics,a=l.avg,s=l.stddev,d=e.renderer.authoringInfo.visualVariables[0],p=d.minSliderValue,u=d.maxSliderValue,m=t[0],v=r.map((function(e,i){var t=e.color,l=e.label,a=e.value;return new o({color:t,label:l,value:a,size:0===i?m.minSize:i===r.length-1?m.maxSize:null})}));return new n({max:u,min:p,stops:v,histogramConfig:{average:a,standardDeviation:s,bins:i?i.bins:[]}})},i.prototype.updateFromRendererResult=function(e,i){var r=e.color.visualVariable.stops,t=e.size.visualVariables,l=e.statistics,a=l.avg,s=l.stddev,n=e.renderer.authoringInfo.visualVariables[0],d=n.minSliderValue,p=n.maxSliderValue,u=t[0],m=r.map((function(e,i){var t=e.color,l=e.label,a=e.value;return new o({color:t,label:l,value:a,size:0===i?u.minSize:i===r.length-1?u.maxSize:null})}));this.set({max:p,min:d,stops:m,histogramConfig:{average:a,standardDeviation:s,bins:i?i.bins:[]}})},i.prototype.updateVisualVariables=function(e){var i=this;return e.map((function(e){var r=e.clone();if("size"===e.type)if(t.isSome(e.minSize)&&t.isSome(e.maxSize)){var l=i.stops,o=l[0],n=l[l.length-1];r.set({maxDataValue:n.value,minDataValue:o.value,maxSize:n.size,minSize:o.size})}else e.stops&&r.set({stops:i.stops.map((function(e){var i=e.label,r=e.size,t=e.value;return new s({label:i,size:r,value:t})}))});else"color"===e.type&&r.set({stops:i.stops.map((function(e){var i=e.color,r=e.label,t=e.value;return new a({color:i,label:r,value:t})}))});return r}))},i.prototype.render=function(){var e,i=this.state,r=this.label,t="disabled"===i,l=this.classes(m,b,g,((e={})[f]=t,e));return u.tsx("div",{"aria-label":r,class:l},t?null:this.renderContent(this.renderRamp(),c,h))},i.prototype.renderRamp=function(){var e=this._bgFillId,i=this._rampFillId,r=this.viewModel,t=this.zoomOptions,l=r.getColorStopInfo();return u.tsx("div",{afterCreate:u.storeNode,bind:this,class:v,"data-node-ref":"_rampNode"},u.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},u.tsx("defs",null,this.renderRampFillDefinition(i,l),this.renderBackgroundFillDefinition(e)),u.tsx("rect",{x:"0",y:"0",fill:this._backgroundFillColor,height:"100%",width:"100%"}),this.renderPaths()),t?this.renderZoomCaps():null)},i.prototype.renderPaths=function(){if(this._rampNode){var e=this._rampNode,i=e.offsetHeight,r=void 0===i?0:i,l=e.offsetWidth,o=void 0===l?0:l;if(t.isSome(r)&&t.isSome(o)){var a=this,s=a.stops,n=a.values,d=a.viewModel,m=d.max,v=d.min,c=a._bgFillId,h=a._maxRampFillWidth,b=a._minRampFillWidth,g=a._rampFillId,f=[h,b];s[0].size<s[s.length-1].size&&f.reverse();var S=f[0],_=f[1],z=n[0],w=n[1],x=p.getPathForSizeStops({bottomValue:z,bottomWidth:S,max:m,min:v,pathHeight:r,pathWidth:o,topValue:w,topWidth:_});return[u.tsx("path",{key:"background",d:x,fill:"url(#"+c+")"}),u.tsx("path",{key:"fill",d:x,fill:"url(#"+g+")"})]}}},r.__decorate([l.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],i.prototype,"label",void 0),r.__decorate([l.property(),u.renderable(),u.messageBundle("esri/widgets/smartMapping/ColorSizeSlider/t9n/ColorSizeSlider")],i.prototype,"messages",void 0),r.__decorate([l.aliasOf("viewModel.stops")],i.prototype,"stops",void 0),r.__decorate([l.property(),u.renderable(["viewModel.hasTimeData","viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.stops","viewModel.values","viewModel.zoomOptions"])],i.prototype,"viewModel",void 0),r.__decorate([l.aliasOf("viewModel.zoomOptions")],i.prototype,"zoomOptions",void 0),i=n=r.__decorate([l.subclass("esri.widgets.smartMapping.ColorSizeSlider")],i)}(n.SmartMappingSliderBase)}));