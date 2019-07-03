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

define(["dojo/_base/lang","./PageBorderStyles","../charts/utils/ChartLineStyles","./ReportThemes","./ThemeUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],function(e,o,t,a,r,i,l){function n(e){e=e||{};var o=e.defaultFontFamilty||A;return{backgroundColor:"#FFFFFF",padding:5,icon:{backgroundColor:"#56a5d8"},highlightedIcon:{backgroundColor:"#D6851A"},iconBarBackground:{backgroundColor:"#AAAAAA"},titleLine:{color:"#A8A7A8"},titleStyle:{fontFamily:o,color:"#828282",fontSize:s,backgroundColor:"transparent"},variableLabelStyle:{fontFamily:o,color:"#56a5d8",fontSize:24,backgroundColor:"transparent"},variableLabelStyleHighlighted:{fontFamily:o,fontSize:24},variableLabelStyleContrast:{fontFamily:o,fontSize:24},variableDescriptionStyle:{fontFamily:o,color:"#828282",fontSize:13,backgroundColor:"transparent"}}}function F(){return{style:o.ALL,lineStyle:"dashed",thickness:1,color:"#b2b2b2"}}function d(e){e=e||{};var o=e.defaultFontFamilty||A,a=e.defaultFontSize||C;return{document:{fontSize:a,fontFamily:o,backgroundImage:{data:null,position:"center",repeat:!1,scale:!0,opacity:1,size:null},border:F()},icon:{backgroundColor:"#56a5d8"},highlightedIcon:{backgroundColor:"#D6851A"},table:{dataTablePadding:5},chart:{renderSingleDataSeriesWithSameColor:!0,line:{},column:{},bar:{},pie:{},donut:{},ring:{},pictureColumn:{},pictureBar:{},gauge:{dataLabelStyle:{fontFamily:o}},waffle:{dataValueStyle:{fontFamily:o,fontSize:30},dataLabelStyle:{fontFamily:o,fontSize:16}},titleStyle:{fontFamily:o,fontSize:s},dataLabelsStyle:{fontFamily:o,fontSize:u},xAxis:{gridLinesStyle:t.SOLID,axisStyle:{fontFamily:o,fontSize:u-1},titleStyle:{fontFamily:o,fontSize:a}},yAxis:{gridLinesStyle:t.SOLID,baseLineStyle:t.SOLID,axisStyle:{fontFamily:o,fontSize:u-1},titleStyle:{fontFamily:o,fontSize:a}},legendStyle:{fontFamily:o,fontSize:u},minMaxLegend:{titleStyle:{fontFamily:o,fontSize:u},minVariableLabelStyle:{fontFamily:o,fontSize:s},maxVariableLabelStyle:{fontFamily:o,fontSize:s}},icon:{backgroundColor:"#56a5d8"}},infographic:{staticInfographic:n(e)}}}function c(o){var t=e.mixin({},o.additional);t.id=o.id;var l=d({defaultFontFamilty:o.id===a.CLASSIC?f:A,defaultFontSize:o.id===a.CLASSIC?S:C});return r.applyThemeColorsToTheme({theme:l,colors:o.colors}),i.populateObject(l,t,!0),l}l=l.geoenrichment.dijit.ReportPlayer.ReportPlayer;var A="Avenir Next",f="Verdana",S=10,C=13,s=16,u=10,y={DEFAULT_FONT_FAMILY_CLASSIC:f,DEFAULT_FONT_FAMILY_GRAPHIC:A,DEFAULT_FONT_SIZE_CLASSIC:S,DEFAULT_FONT_SIZE_GRAPHIC:C,CHART_DATA_FONT_SIZE:u,defaultStaticInfographic:n(),standardRamps:[{id:a.CLASSIC,colors:["#FFFFFF","#13729F","#DEA429"],additional:{table:{overrideStyles:{Default:{color:"#4C4C4C",backgroundColor:"#FFFFFF"},ReportTitle:{color:"#FFFFFF",backgroundColor:"#00436D"},TableHeader:{color:"#4C4C4C",backgroundColor:"#CCCCCC"},GreyText:{color:"#AAAAAA",backgroundColor:"#FFFFFF"},BlueText:{color:"#00436D",backgroundColor:"#FFFFFF"},AlternatingRow:{color:"#4C4C4C",backgroundColor:"#EEEEEE"}}},chart:{renderSingleDataSeriesWithSameColor:!1,colors:["#13729F","#DEA429","#6A9741","#A75523","#456E35","#D7DF22","#868686","#3C546D","#829AB3","#DEDEDE","#03406E","#B1B1B1"]}}},{id:a.GRAPHIC,colors:["#FFFFFF","#56A5D8","#D6851A"],additional:{chart:{colors3series:["#56A5D8","#AED6F1","#2874A6"],colors:["#AED6F1","#85C1E9","#5DADE2","#3498DB","#2E86C1","#2874A6","#21618C","#1B4F72"]}}},{id:"red",colors:["#d3d3d3","#8b4513","#ff4500"],additional:{chart:{colors3series:["#8b4513","#F1948A","#E74C3C"],colors:["#8b4513","#F1948A","#EC7063","#E74C3C","#CB4335","#B03A2E","#943126","#78281F"]}}},{id:"dark",colors:["#6A6A6A","#FFFFFF","#EEEEEE"],additional:{chart:{colors3series:["#FFFFFF","#CACFD2","#A6ACAF"],colors:["#FFFFFF","#D7DBDD","#CACFD2","#BDC3C7","#A6ACAF","#909497","#797D7F","#626567","#4d4d4d","#3e3e3e","#262626"]}}},{id:"green",colors:["#556b2f","#90ee90","#ffffe0"],additional:{chart:{colors3series:["#E9F7EF","#A9DFBF","#27AE60"],colors:["#E9F7EF","#A9DFBF","#7DCEA0","#52BE80","#27AE60","#229954","#1E8449","#196F3D","#145A32"]}}},{id:"green2",colors:["#FFFFFF","#0B7AC0","#35AC46"],additional:{chart:{colors3series:["#56A5D8","#AED6F1","#2874A6"],colors:["#56A5D8","#AED6F1","#85C1E9","#5DADE2","#3498DB","#2E86C1","#2874A6","#21618C","#1B4F72"]}}}]},g={};return y.standardRamps.forEach(function(e){var o=c(e);y[e.id]=o,g[e.id]=o}),y.TABLE_STYLES=["Default","ReportTitle","TableHeader","GreyText","BlueText","AlternatingRow"],y.getReportThemeById=function(e){return g[e]},y.isStandardTheme=function(e){return!!g[e]},y.getStandardThemes=function(){return Object.keys(g).map(function(e){return g[e]})},y.getDefaultStaticInfographicSettings=function(){return e.clone(y.defaultStaticInfographic)},y.getDefaultBorderSettings=function(){return F()},y.getDefaultTheme=function(e){return d(e)},y});