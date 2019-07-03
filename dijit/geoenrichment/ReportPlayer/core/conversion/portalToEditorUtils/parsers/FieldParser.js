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

// Example: <text name="Copyright" />

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","../../../supportClasses/templateJsonUtils/fieldInfo/RichTextJsonUtil","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoFormatUtil","../../ConversionUtil","../../ShapeConverter","../../../annotations/shape/ShapeJsonUtil","./_FieldInfoBuilder","./ImageParser","./MapParser","./AlignParser","../../../../_devConfig"],function(e,r,t,a,n,i,o,s,l,f,g,u){function m(e){var r=e.attributes||{};return a.processFieldInfoTagAttributes(r),r}function d(r){return e.queryJson(r,/^d$|^text$|^reportName$|^reportTitle2/)}var c={},p={parseImageTrigger:function(e,r){var t=s.getCalculatorOrScriptFieldInfo(e.attributes.field,r);if(!t)return console.log("Parse template error => can't build fieldInfo for field "+e.attributes.field),console.log(e),null;var a={fieldInfo:t,cases:[]},n=this;return e.tags.forEach(function(e){var t="case"===e.name?e.attributes.key:"default",i=e.tags[0],o=r.processFileName(i.attributes.value);a.cases.push({compareInfos:n._getCompareInfosFromTriggerKey(t),setters:[{property:i.attributes.property,value:o}]}),r.putImageData(o)}),a},parseFieldTrigger:function(e,r,t){r.triggerJson={fieldInfo:t&&s.getCalculatorOrScriptFieldInfo(e.attributes.field,t),cases:[]};var a=this;e.tags.forEach(function(e){var t="case"===e.name?e.attributes.key:"default",n={compareInfos:a._getCompareInfosFromTriggerKey(t),setters:[]};r.triggerJson.cases.push(n),e.tags.forEach(function(e){n.setters.push({property:e.attributes.property,value:e.attributes.value})})})},_getCompareInfosFromTriggerKey:function(e){return e.split(n.KEY_INTERVAL_SEPARATOR).map(function(e){var r=n.ONE_FIELD_KEY_TEST.test(e)?e.replace(n.KEY_OPERATOR_RE,""):e;return{value:r,operator:e.substr(0,e.length-r.length)||"="}})}},F={getFieldInfo:function(e,r,a,n){var i=n.parsers.getParser("chart").portalToEditor(e,r,n);return i&&t.createFieldInfoFromChart(i)}},I={getFieldInfo:function(e,r,a,n){var i=n.parsers.getParser("infographic").portalToEditor(e,r,n);return i&&t.createFieldInfoFromInfographic(i)}},h={getFieldInfo:function(e,r,a,n){var i,o=l.getElement(e,n);return e.tags&&e.tags[0]&&"trigger"===e.tags[0].name&&(i=p.parseImageTrigger(e.tags[0],n)),t.createFieldInfoFromImage(o,i)}},v={getFieldInfo:function(e,r,a,n){var i=f.getElement(e,n);return t.createFieldInfoFromMap(i)}},T={getFieldInfo:function(e,r,a,n){var s=i.svgJsonToShapeObject(e),l=i.getStylesFromSvgJson(e),f=o.createShapeJsonFromShapeObj(s,l),u=e.attributes;return f.style.angle=Number(u.angle)||0,g.parseAlign(u,f.style),t.createFieldInfoFromShape(f)}},b={getFieldInfo:function(e,r,a,n){var i=n.parsers.getParser("section").parseSection(e,n);return t.createFieldInfoFromSection(i)}},E={getFieldInfo:function(e,r,a,n,i){var o=m(e);if(r=r||o.f,i.templateJson.metadata.mapImageInfosHash[r]){var l=f.parseMapImageDField(r,i);return t.createFieldInfoFromMap(l)}var g=t.createFieldInfoFromSpecialFieldName(r,o.m);if(!g){var u;2===a.tags.length&&a.tags[1].text&&(u=a.tags[1].text),g=s.getCalculatorOrScriptFieldInfo(r,i,{format:o.m,additionalText:u,summaryType:o.summary})}return g&&n&&(p.parseFieldTrigger(n,g,i),g.triggerJson&&!g.triggerJson.fieldInfo&&(g.triggerJson.fieldInfo=null,console.log("Parse template error => can't build fieldInfo for field "+n.attributes.field),console.log(n))),g}};return c.parseField=function(e,r,a,n){var i;if(u.emulateErrors.layoutParseError)throw u.emulateErrors.layoutParseError--,new Error("Error test: something crashed during the parsing of the layout!");if(e){if("chart"===e.name)return F.getFieldInfo(e,r,a,n);if("infographic"===e.name)return I.getFieldInfo(e,r,a,n)||!1;if("img"===e.name&&e.attributes)return h.getFieldInfo(e,r,a,n);if("mapImage"===e.name&&e.attributes)return v.getFieldInfo(e,r,a,n);if("svg"===e.name)return T.getFieldInfo(e,r,a,n);if("section"===e.name)return b.getFieldInfo(e,r,a,n);if("d"===e.name)i=E.getFieldInfo(e,null,r,a,n);else if("a"===e.name&&e.tags&&"d"===e.tags[0].name){var o=e.tags[0];i=E.getFieldInfo(o,null,r,a,n),i&&e.attributes&&e.attributes.hreff&&(i.linkFieldInfo=E.getFieldInfo(o,e.attributes.hreff,r,a,n))}else i="text"===e.name?t.createFieldInfoFromSpecialFieldName(m(e).name):t.createFieldInfoFromSpecialFieldName(e.name,m(e).m)}if(!i){var s=d(r);if(1===s.length&&s[0].attributes&&"TrialUrlText"===s[0].attributes.name)return t.createFieldInfoFromSpecialFieldName(s[0].attributes.name);i=c.parseRichTextTag(r,n)}return i},c.parseRichTextTag=function(a,n){var i,o=d(a);if(o.length){var s=[],l=[],f=!0;o.some(function(e,r){var i=e.attributes?e.attributes.name:e.name,o="d"===e.name?E.getFieldInfo(e,null,a,null,n):i&&t.createFieldInfoFromSpecialFieldName(i);if(!o)return f=!1,!0;"d"===e.name?s.push(o):l.push(o)}),f&&(i=r.createFieldInfoFromRichText(e.getInnerHTML(a),s,l))}return i},c.parseFieldTrigger=function(e,r,t){return r=r||{},p.parseFieldTrigger(e,r,t),r.triggerJson},c});