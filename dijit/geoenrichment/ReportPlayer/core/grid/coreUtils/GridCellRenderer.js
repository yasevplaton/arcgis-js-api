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

define(["dojo/_base/declare","dojo/aspect","esri/dijit/geoenrichment/utils/WaitingUtil","./GridDataUtil","./GridStyleUtil","./GridCellContentScaler","./GridCellContentSynchronizer","../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/SpecificViewModes","./GridQueryUtil","./tooltip/GridCellTooltipBuilder","esri/dijit/geoenrichment/ReportPlayer/config","../../../_devConfig"],function(e,t,n,i,o,r,a,l,d,s,g,u,c,h,p,C,m){function f(e){return e[e.parentGrid.hasRealBorders?"getContentWidth":"getWidth"]()}function v(e){return e[e.parentGrid.hasRealBorders?"getContentHeight":"getHeight"]()}function y(e){return{formattedValue:null===e||void 0===e||"number"==typeof e&&isNaN(e)?"":e,value:e,formatFunction:null,isUnavailableData:!1,conditionalStyle:null}}var w={color:"#FF0000"},F={color:"#AAAAAA",fontStyle:"italic",fontSize:13,horizontalAlign:"center",verticalAlign:"middle"},I=e(null,{_parentState:null,constructor:function(e,n,i){var o=this;r.fitContentInsideCell(e),this._setParentState(e),i.forEach(function(i){var l=i[0],d=i[1];n.own(t.after(e,l,function(){o._checkParentChanged(d,e)&&(r.fitContentInsideCell(e),a.syncParentFieldInfoWithElementState(e,n))}))})},_setParentState:function(e){var t=e.getFullStyle();this._parentState={width:e.getWidth(),height:e.getHeight(),horizontalAlign:t.horizontalAlign,verticalAlign:t.verticalAlign}},_checkParentChanged:function(e,t){var n;switch(e){case"width":var i=t.getWidth();this._parentState.width!==i&&(this._parentState.width=i,n=!0);break;case"height":var o=t.getHeight();this._parentState.height!==o&&(this._parentState.height=o,n=!0);break;case"horizontalAlign":case"verticalAlign":var r=t.getFullStyle();this._parentState.horizontalAlign===r.horizontalAlign&&this._parentState.verticalAlign===r.verticalAlign||(this._parentState.horizontalAlign=r.horizontalAlign,this._parentState.verticalAlign=r.verticalAlign,n=!0)}return n}});return e(null,{renderCellContent:function(e){var t=e.parentGrid,n=i.getFieldInfo(e);if(m.emulateErrors.reportContainerRenderError)throw new Error("Error test: something crashed when building the UI layout!");try{if(n){if(n.isReportSection)return this._placeReportSectionInCell(t,e);if(n.isInfographic)return this._placeInfographicInCell(t,e);if(n.isChart)return this._placeChartInCell(t,e);if(n.isMap)return this._placeMapInCell(t,e);if(n.isImage)return this._renderCellTooltip(e),this._placeImageInCell(t,e);if(n.isShape)return this._placeShapeInCell(t,e);n.isMissing&&e.setStyle(w),n.isUnsupportedContent&&e.setStyle(F)}this._applyRenderedContent(e,this._getRenderedContent(e)),e.setContent(null),this._renderCellTooltip(e)}catch(e){if(console.log(e),!C.tables.leaveEmptyCellsUponError)throw e}},_renderCellTooltip:function(e){if(e.viewModel.dynamicReportInfo){var t=e.viewModel.dynamicReportInfo.templateVariableProvider;p.setDynamicTooltipToCell(e,t)}},updateViewMode:function(e){var t=i.getFieldInfo(e);t&&(t.hasVariable||t.script||t.alias||t.isRichText)&&this._applyRenderedContent(e,this._getRenderedContent(e))},getRenderedContent:function(e){return this._getRenderedContent(e)},_getRenderedContent:function(e){var t=i.getFieldInfo(e);if(t){var n=this._prepareRenderContextForFieldCell(e);return t.isImage&&t.triggerJson&&t.triggerJson.fieldInfo&&(t=t.triggerJson.fieldInfo),d.renderFieldInfoInTableCell(t,n)}return y(e.gridData[e.column.field])},_prepareRenderContextForFieldCell:function(e){var t=e.parentGrid,n=t.getViewMode()===u.EDIT;return{previewValues:this._isPreviewValues(e),previewConditionalStyle:!n,getPreviewValueFunction:t.getPreviewValueFunction,fieldData:t.viewModel.dynamicReportInfo&&t.viewModel.dynamicReportInfo.fieldData,currentFeatureIndex:t.getFeatureIndexForCell(e),rowIndex:e.gridData&&e.gridData.index,columnIndex:e.column&&e.column.index,numRows:t.store.data.length,isGraphicReport:t.viewModel.isGraphicStyle,isMultiFeature:t.viewModel.dynamicReportInfo&&t.viewModel.dynamicReportInfo.isMultiFeature,presetFilter:!n&&t.presetFilter}},_isPreviewValues:function(e){var t=e.parentGrid,n=i.getFieldInfo(e),o=t.getSpecificViewMode(),r=t.getViewMode()===u.PREVIEW_VALUES;return!n||"SiteNote"!==n.name&&"SiteNotes"!==n.name||(r=!0),o&&n&&(o[c.RICH_TEXT]===u.PREVIEW_VALUES&&n.isRichText?r=!0:o[c.VARIABLE]===u.PREVIEW_VALUES&&(n.hasVariable||n.script)?r=!0:o[c.INFOGRAPHIC]===u.PREVIEW_VALUES&&n.isInfographic&&(r=!0)),r},_applyRenderedContent:function(e,t){t&&(i.setFieldCellContent(e,t.formattedValue),t.isUnavailableData||("number"==typeof t.value&&(i.setNumericCellValue(e,t.value),e.setNumberValue(t.value,t.formatFunction,e.parentGrid.enableNumberAnimation)),t.conditionalStyle?(e.setStyle(t.conditionalStyle.style),"string"==typeof t.conditionalStyle.formattedValue&&i.setFieldCellContent(e,t.conditionalStyle.formattedValue),e.__hasConditionalStyle=!0):!1===t.conditionalStyle||e.__hasConditionalStyle?(delete e.__hasConditionalStyle,e.setStyle(o.combineCellStyle(e.parentGrid,e.gridData,e.column))):t.rangeValue&&"string"==typeof t.rangeValue.formattedValue&&i.setFieldCellContent(e,t.rangeValue.formattedValue)),e.parentGrid&&e.parentGrid.viewModel.dynamicReportInfo&&e.setUrl(i.getFieldCellUrl(e)))},_placeReportSectionInCell:function(e,t){function o(){if(t.domNode)return r._createReportSectionFromParams(e,t,a)}var r=this,a={};a.class="adjustableGrid_inCellSection",a.json=i.getFieldInfo(t).sectionJson,a.viewModel=e.viewModel,a.theme=e.theme,a.viewPortContainer=e.viewPortContainer,a.parentWidget=t,a.currentFeatureIndex=e.getFeatureIndexForCell(t),a.initialWidth=f(t),a.initialHeight=v(t),a.noContentOffset=h.cellHasFloatingTableParent(t),a.initialViewMode=e.getViewMode(),a.onContentLoadingStart=e.onContentLoadingStart.bind(e),a.onContentLoadingEnd=e.onContentLoadingEnd.bind(e),a.parentGridCell=t,a.elementUsageType=(e.isReportContainerPageGrid||e.parentGrid&&e.parentGrid.isReportContainerPageGrid)&&g.PAGE_PANEL_SECTION;var l=e.viewModel.layoutBuilder.getClass("section");return l.isAsync?n.showProgressPromise(t.domNode,l.loadModules()).then(o):o()},_createReportSectionFromParams:function(e,t,n){var i;return i=n.json&&n.json.stack&&n.json.type!==s.EMPTY?e.viewModel.layoutBuilder.createElement("section",n,t.getContentContainerNode()):e.viewModel.layoutBuilder.createElement("emptySection",n,t.getContentContainerNode()),t.setContent(i),new I(t,i,[["onWidthChanged","width"],["onHeightChanged","height"]]),i},_placeInfographicInCell:function(e,t){function o(){if(t.domNode)return r._createInfographicFromParams(e,t,a,l)}var r=this,a=i.getFieldInfo(t).infographicJson,l={viewModel:e.viewModel,theme:e.theme,parentWidget:t,currentFeatureIndex:e.getFeatureIndexForCell(t),getPreviewValueFunction:e.getPreviewValueFunction,width:f(t),height:v(t),adjustElementsWhenResized:h.cellHasFloatingTableParent(t),onContentLoadingStart:e.onContentLoadingStart.bind(e),onContentLoadingEnd:e.onContentLoadingEnd.bind(e)},d=e.viewModel.layoutBuilder.getClass("infographic");return d.isAsync?n.showProgressPromise(t.domNode,d.loadModules()).then(o):o()},_createInfographicFromParams:function(e,t,n,i){var o=e.viewModel.layoutBuilder.createElement("infographic",{node:t.getContentContainerNode(),placeFunc:function(e){t.setContent(e)},json:n,creationParams:i});return o.setViewMode&&o.setViewMode(e.getViewMode()),new I(t,o,[["onWidthChanged","width"],["onHeightChanged","height"]]),o},_placeChartInCell:function(e,t){function o(){if(t.domNode)return r._createChartPageFromParams(e,t,l,a)}var r=this,a={viewModel:e.viewModel,theme:e.theme,currentFeatureIndex:e.getFeatureIndexForCell(t),parentWidget:t,onContentLoadingStart:e.onContentLoadingStart.bind(e),onContentLoadingEnd:e.onContentLoadingEnd.bind(e)},l=i.getFieldInfo(t).chartJson;l.visualProperties.width=t.getWidth(),l.visualProperties.height=t.getHeight();var d=e.viewModel.layoutBuilder.getClass("chart");return d.isAsync?n.showProgressPromise(t.domNode,d.loadModules()).then(o):o()},_createChartPageFromParams:function(e,t,n,i){var o=e.viewModel.layoutBuilder.createElement("chart",{node:t.getContentContainerNode(),placeFunc:function(e){t.setContent(e)},json:n,creationParams:i});return new I(t,o,[["onWidthChanged","width"],["onHeightChanged","height"]]),o},_placeMapInCell:function(e,t){function o(){if(t.domNode)return r=a._createMapFromParams(e,t,d,s)}var r,a=this,l=i.getFieldInfo(t),d=l.mapJson,s=(f(t),v(t),{viewModel:e.viewModel,theme:e.theme,parentWidget:t,currentFeatureIndex:e.getFeatureIndexForCell(t),onContentLoadingStart:e.onContentLoadingStart.bind(e),onContentLoadingEnd:e.onContentLoadingEnd.bind(e)}),g=e.viewModel.layoutBuilder.getClass("map");return g.isAsync?n.showProgressPromise(t.domNode,g.loadModules()).then(o):o()},_createMapFromParams:function(e,t,n,i){var o=e.viewModel.layoutBuilder.createElement("map",{node:t.getContentContainerNode(),placeFunc:function(e){t.setContent(e)},json:n,creationParams:i});return new I(t,o,[["onWidthChanged","width"],["onHeightChanged","height"],["setStyle","horizontalAlign"]]),o},_placeImageInCell:function(e,t){function n(){if(t.domNode)return h=o._createImageFromParams(e,t,a,p)}var o=this,r=i.getFieldInfo(t),a=r.imageJson,s=f(t),g=v(t);if(r.triggerJson)if(e.viewModel.dynamicReportInfo){var u=d.getValueFromFieldData(r.triggerJson.fieldInfo,{fieldData:e.viewModel.dynamicReportInfo.fieldData,currentFeatureIndex:e.getFeatureIndexForCell(t)});l.processImageJsonForTrigger(a,u.value,r.triggerJson),u.isUnavailableData||"number"!=typeof u.value||(i.setNumericCellValue(t,u.value),t.setNumberValue(u.value,u.formatFunction,!1))}else{var c=d.getConditionalStylePreview(r,t.gridData.index);c&&"number"==typeof c.value&&(l.processImageJsonForTrigger(a,c.value,r.triggerJson),i.setNumericCellValue(t,c.value))}a.style.width&&a.style.height&&!a.fitParent&&Math.round(a.style.width)!==Math.round(s)&&Math.round(a.style.height)!==Math.round(g)?a.fitParent=!1:(a.fitParent=!0,a.style.width=s,a.style.height=g);var h,p={viewModel:e.viewModel,theme:e.theme,parentWidget:t,currentFeatureIndex:e.getFeatureIndexForCell(t),alignParams:t.getFullStyle(),imageTriggerJson:r.triggerJson,onInitialized:function(){if(t.domNode){var e=f(t),n=v(t);h&&h.resize({w:e,h:n},t.getFullStyle())}},onContentLoadingStart:e.onContentLoadingStart.bind(e),onContentLoadingEnd:e.onContentLoadingEnd.bind(e)},C=e.viewModel.layoutBuilder.getClass("image");return C.isAsync?C.loadModules().then(n):n()},_createImageFromParams:function(e,t,n,i){var o=e.viewModel.layoutBuilder.createElement("image",{node:t.getContentContainerNode(),placeFunc:function(e){t.setContent(e)},json:n,creationParams:i});return new I(t,o,[["onWidthChanged","width"],["onHeightChanged","height"],["setStyle","horizontalAlign"]]),o},_placeShapeInCell:function(e,t){function n(){if(t.domNode)return s=o._createShapeFromParams(e,t,a,g)}var o=this,r=i.getFieldInfo(t),a=r.shapeJson,l=f(t),d=v(t);a.style.width=l,a.style.height=d;var s,g={viewModel:e.viewModel,theme:e.theme,parentWidget:t,currentFeatureIndex:e.getFeatureIndexForCell(t),alignParams:t.getFullStyle(),getPreviewValueFunction:e.getPreviewValueFunction,applyThemeStyle:e.applyThemeStyle,onInitialized:function(){if(t.domNode){var e=f(t),n=v(t);s&&s.resize({w:e,h:n},t.getFullStyle())}},onContentLoadingStart:e.onContentLoadingStart.bind(e),onContentLoadingEnd:e.onContentLoadingEnd.bind(e)},u=e.viewModel.layoutBuilder.getClass("shape");return u.isAsync?u.loadModules().then(n):n()},_createShapeFromParams:function(e,t,n,i){var o=e.viewModel.layoutBuilder.createElement("shape",{node:t.getContentContainerNode(),placeFunc:function(e){t.setContent(e)},json:n,creationParams:i});return new I(t,o,[["onWidthChanged","width"],["onHeightChanged","height"],["setStyle","horizontalAlign"]]),o}})});