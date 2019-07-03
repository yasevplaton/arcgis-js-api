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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","../kernel","../lang","../graphicsUtils","./NATypes"],function(e,t,r,s,i,n,o,u){var a=e(null,{declaredClass:"esri.tasks.RouteParameters",accumulateAttributes:null,attributeParameterValues:null,barriers:null,directionsLanguage:null,directionsLengthUnits:null,directionsOutputType:null,directionsStyleName:null,directionsTimeAttribute:null,doNotLocateOnRestrictedElements:!0,findBestSequence:null,ignoreInvalidLocations:null,impedanceAttribute:null,outputLines:"esriNAOutputLineTrueShape",outputGeometryPrecision:null,outputGeometryPrecisionUnits:null,outSpatialReference:null,overrides:null,polygonBarriers:null,polylineBarriers:null,preserveFirstStop:null,preserveLastStop:null,restrictionAttributes:null,restrictUTurns:null,returnBarriers:!1,returnDirections:!1,returnPolygonBarriers:!1,returnPolylineBarriers:!1,returnRoutes:!0,returnStops:!1,returnZ:!0,startTime:null,startTimeIsUTC:null,timeWindowsAreUTC:null,stops:null,useHierarchy:null,useTimeWindows:null,travelMode:null,toJson:function(e){var t={returnDirections:this.returnDirections,returnRoutes:this.returnRoutes,returnZ:this.returnZ,returnStops:this.returnStops,returnBarriers:this.returnBarriers,returnPolygonBarriers:this.returnPolygonBarriers,returnPolylineBarriers:this.returnPolylineBarriers,attributeParameterValues:this.attributeParameterValues&&r.toJson(this.attributeParameterValues),outSR:this.outSpatialReference?this.outSpatialReference.wkid||r.toJson(this.outSpatialReference.toJson()):null,outputLines:this.outputLines,overrides:this.overrides,findBestSequence:this.findBestSequence,preserveFirstStop:this.preserveFirstStop,preserveLastStop:this.preserveLastStop,useTimeWindows:this.useTimeWindows,startTime:this.startTime?this.startTime.getTime():null,startTimeIsUTC:this.startTimeIsUTC,timeWindowsAreUTC:this.timeWindowsAreUTC,accumulateAttributeNames:this.accumulateAttributes?this.accumulateAttributes.join(","):null,ignoreInvalidLocations:this.ignoreInvalidLocations,impedanceAttributeName:this.impedanceAttribute,restrictionAttributeNames:this.restrictionAttributes?this.restrictionAttributes.join(","):null,restrictUTurns:this.restrictUTurns,useHierarchy:this.useHierarchy,directionsLanguage:this.directionsLanguage,outputGeometryPrecision:this.outputGeometryPrecision,outputGeometryPrecisionUnits:this.outputGeometryPrecisionUnits,directionsLengthUnits:u.LengthUnit[this.directionsLengthUnits],directionsTimeAttributeName:this.directionsTimeAttribute,directionsStyleName:this.directionsStyleName,travelMode:"object"==typeof this.travelMode?r.toJson(this.travelMode):this.travelMode},s=this.stops;if("esri.tasks.FeatureSet"===s.declaredClass&&s.features.length>0?t.stops=r.toJson({type:"features",features:o._encodeGraphics(s.features,e&&e["stops.features"]),doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements}):"esri.tasks.DataLayer"===s.declaredClass?t.stops=s:"esri.tasks.DataFile"===s.declaredClass&&(t.stops=r.toJson({type:"features",url:s.url,doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements})),this.directionsOutputType)switch(this.directionsOutputType.toLowerCase()){case"complete":t.directionsOutputType="esriDOTComplete";break;case"complete-no-events":t.directionsOutputType="esriDOTCompleteNoEvents";break;case"instructions-only":t.directionsOutputType="esriDOTInstructionsOnly";break;case"standard":t.directionsOutputType="esriDOTStandard";break;case"summary-only":t.directionsOutputType="esriDOTSummaryOnly";break;default:t.directionsOutputType=this.directionsOutputType}var i=function(t,s){return t?"esri.tasks.FeatureSet"===t.declaredClass?t.features.length>0?r.toJson({type:"features",features:o._encodeGraphics(t.features,e&&e[s])}):null:"esri.tasks.DataLayer"===t.declaredClass?t:"esri.tasks.DataFile"===t.declaredClass?r.toJson({type:"features",url:t.url}):r.toJson(t):null};return this.barriers&&(t.barriers=i(this.barriers,"barriers.features")),this.polygonBarriers&&(t.polygonBarriers=i(this.polygonBarriers,"polygonBarriers.features")),this.polylineBarriers&&(t.polylineBarriers=i(this.polylineBarriers,"polylineBarriers.features")),n.filter(t,function(e){if(null!==e)return!0})}});return s("extend-esri")&&t.setObject("tasks.RouteParameters",a,i),a});