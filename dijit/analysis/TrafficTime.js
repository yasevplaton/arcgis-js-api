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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/event","dojo/_base/kernel","dojo/dom-attr","dojo/string","dojo/dom-style","dojo/dom-class","dojo/has","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/form/CheckBox","dijit/form/RadioButton","dijit/form/TimeTextBox","dijit/form/Select","dijit/form/HorizontalSlider","dijit/form/HorizontalRule","dijit/form/HorizontalRuleLabels","../../kernel","dojo/i18n!../../nls/jsapi","dojo/text!./templates/TrafficTime.html"],function(i,e,t,s,a,f,r,l,o,n,c,d,h,T,_,v,m,u,y,b,R,w,g,p,L,j){var C=e([d,h,T,_,v],{declaredClass:"esri.dijit.analysis.TrafficTime",i18n:null,templateString:j,widgetsInTemplate:!0,_liveOffset:0,showLiveTraffic:!0,postMixInProperties:function(){this.i18n={},t.mixin(this.i18n,L.common),t.mixin(this.i18n,L.driveTimes)},postCreate:function(){this.inherited(arguments),this._handleUseTrafficCheckChange(this._useTrafficCheck.get("value"))},_handleUseTrafficCheckChange:function(i){this._typicalTrafficRadioBtn.set("disabled",!i),this._liveTrafficRadioBtn.set("disabled",!i),i?this._handleLifeTrafficRadioChange(this._liveTrafficRadioBtn.get("checked")&&this.showLiveTraffic):(this._liveTimeSlider.set("disabled",!i),this._trafficTime.set("disabled",!i),this._trafficDay.set("disabled",!i)),i?(n.remove(this._liveTraficLabel,"esriAnalysisTextDisabled"),n.remove(this._typicalTraficLabel,"esriAnalysisTextDisabled"),n.remove(this._liveTimeRuleLabels,"esriAnalysisTextDisabled")):(n.add(this._liveTraficLabel,"esriAnalysisTextDisabled"),n.add(this._typicalTraficLabel,"esriAnalysisTextDisabled"),n.add(this._liveTimeRuleLabels,"esriAnalysisTextDisabled"))},_handleLifeTrafficRadioChange:function(i){this._liveTimeSlider.set("disabled",!i),this._trafficTime.set("disabled",i),this._trafficDay.set("disabled",i)},_setDisabledAttr:function(i){this._useTrafficCheck.set("disabled",i)},_setResetAttr:function(i){i&&this._useTrafficCheck.set("checked",!1)},_getCheckedAttr:function(){return this._useTrafficCheck.get("checked")},_setCheckedAttr:function(i){this._useTrafficCheck.set("checked",i)},_getTimeOfDayAttr:function(){var i,e;return this.showLiveTraffic&&this._liveTrafficRadioBtn.get("checked")?i=(new Date).getTime()+60*this._liveOffset*1e3:(e=new Date(this._trafficDay.get("value")),i=e.getTime()-60*e.getTimezoneOffset()*1e3+this._trafficTime.get("value").getTime()-60*this._trafficTime.get("value").getTimezoneOffset()*1e3),i},_setTimeOfDayAttr:function(i){var e=new Date(i);if("UTC"!==this.get("timeZoneForTimeOfDay")){this._trafficDay.set("value","1/"+e.getDate()+"/1990");var t=new Date(this._trafficDay.get("value")),s=i-t.getTime()+60*t.getTimezoneOffset()*1e3+60*this._trafficTime.get("value").getTimezoneOffset()*1e3;this._trafficTime.set("value",new Date(s))}},_setTimeZoneForTimeOfDayAttr:function(i){this._liveTrafficRadioBtn.set("checked","UTC"===i),this._typicalTrafficRadioBtn&&this._typicalTrafficRadioBtn.set("checked","UTC"!==i)},_getTimeZoneForTimeOfDayAttr:function(){return this.showLiveTraffic&&this._liveTrafficRadioBtn.get("checked")?"UTC":""},_getLiveOffsetAttr:function(){return this._liveOffset},_setLiveOffsetAttr:function(i){this._liveOffset=i,this._liveTimeSlider&&this._liveTimeSlider.set("value",i/60)},_handleLiveTimeSliderChange:function(i){var e,t,s,a;e=60*i,t=Math.floor(i),s=e-60*t,a=0===t&&0===s?this.i18n.liveTrafficLabel:0===t?l.substitute(this.i18n.liveTimeMinutesLabel,{minute:s}):1===t?0===s?this.i18n.liveSingularHourTimeLabel:l.substitute(this.i18n.liveSingularTimeLabel,{minute:s}):0===s?l.substitute(this.i18n.liveTimeHoursLabel,{hour:t,minute:s}):l.substitute(this.i18n.liveTimeLabel,{hour:t,minute:s}),this._liveOffset=e,r.set(this._liveTraficLabel,"innerHTML",a)},_setShowLiveTrafficAttr:function(i){this._set("showLiveTraffic",i),this._liveTrafficRadioRow&&o.set(this._liveTrafficRadioRow,"display",i?"table-row":"none"),this._liveTrafficCtrlRow&&o.set(this._liveTrafficCtrlRow,"display",i?"table-row":"none"),this._typicalTrafficRadioRow&&o.set(this._typicalTrafficRadioRow,"display",i?"table-row":"none"),this._typicalTrafficRadioBtn&&this._typicalTrafficRadioBtn.set("checked",!i),this._availabilityRow&&o.set(this._availabilityRow,"display",i?"table-row":"none")},_setTrafficSupportAttr:function(i){"HISTORICAL_AND_LIVE"===i?(this.set("showLiveTraffic",!0),this.showHistoryTraffic()):"HISTORICAL"===i?(this.hideLiveTraffic(),this.showHistoryTraffic(),this._typicalTrafficRadioBtn.set("checked",!0),this._liveTrafficRadioBtn.set("checked",!1)):(this.hideLiveTraffic(),this.hideHistoryTraffic())},hideLiveTraffic:function(){o.set(this._liveTrafficRadioRow,"display","none"),o.set(this._liveTrafficCtrlRow,"display","none")},showHistoryTraffic:function(){o.set(this._typicalTrafficRadioRow,"display","table-row"),o.set(this._driveTimeRow,"display","table-row"),o.set(this._availabilityRow,"display","table-row")},hideHistoryTraffic:function(){o.set(this._typicalTrafficRadioRow,"display","none"),o.set(this._driveTimeRow,"display","none"),o.set(this._availabilityRow,"display","none")}});return c("extend-esri")&&t.setObject("dijit.analysis.TrafficTime",C,p),C});