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

define(["dojo/_base/declare","dojo/has","dojo/_base/lang","dojo/_base/array","dojo/i18n!../../nls/jsapi","../../kernel","./RFxBandMatrix"],function(e,t,i,s,n,a,r){var o=e("esriRFxStatisticsGrid",[r],{constructor:function(){var e=n.common;e=i.mixin(e,n.widgets.rasterFunctionEditor),this.displayNames=[e.min,e.max,e.mean,e.rfxStatisticsGrid.stdDev],this.nCols=4,this.inherited(arguments)},_createComplexValue:function(e){0===e.length&&(this.value=[]);var t;return t=this.value&&this.value.elements?{elements:[]}:[],t.elements?t.elements=e:t=e,t},_getProcessedValue:function(){if(this.value)return this.value&&this.value.elements||this.value}});return t("extend-esri")&&i.setObject("dijit.RasterFunctionEditor.RFxStatisticsGrid",o,a),o});