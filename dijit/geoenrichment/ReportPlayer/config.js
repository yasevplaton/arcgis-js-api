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

define(["esri/kernel"],function(e){function r(e){var r=e.split(".");return Number((Number(r[0])+Number(r[1])/100).toFixed(2))}var s=Math.max(r("3.29"),r(e.version)).toFixed(2);return{jsapiVersion:s,esriDijitCssUrl:"https://js.arcgis.com/"+s+"/dijit/themes/claro/claro.css",esriCssUrl:"https://js.arcgis.com/"+s+"/esri/css/esri.css",playerSourceRootUrl:"https://js.arcgis.com/"+s+"/",runReportTask:{ignoreErrors:!0,secondAttempt:!0},charts:{showErrorIfHasUnavailableData:!1},tables:{leaveEmptyCellsUponError:!0,showUnavailableData:!0},createImageCommand:{skipSavingFile:!1},createPDFCommand:{skipSavingFile:!1},createPlayerCommand:{prettifyDataJson:!0},exportToExcel:{skipSavingFile:!1},modules:{exportCommands:!0,complexCellTooltips:!0},generalization:{factor:-1,maxVerticesInAllFeatures:1e5,numVerticesPerFeature:5e4}}});