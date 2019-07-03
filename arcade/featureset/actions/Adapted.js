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

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}();define(["require","exports","../../../graphic","../../kernel","../support/FeatureSet","../support/IdSet","../support/shared","../support/sqlUtils","../../polyfill/promiseUtils","../../polyfill/sql/WhereClause","../../../SpatialReference"],function(e,t,r,a,i,n,l,o,s,u,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(){this.sqlRewritable=!1}return e.prototype.extractValue=function(e){return null},e.prototype.postInitialization=function(e,t){},e.prototype.rewriteSql=function(e,t){return{rewritten:this.sqlRewritable,where:e}},e}();t.AdaptedField=c;var d=function(e){function t(t){var r=e.call(this)||this;return r.field=t,r.sqlRewritable=!0,r}return __extends(t,e),t.prototype.extractValue=function(e){return e.attributes[this.field.name]},t.prototype.rewriteSql=function(e,t){return{rewritten:this.sqlRewritable,where:e}},t}(c);t.OriginalField=d;var p=function(e){function t(t,r,a){var i=e.call(this)||this;return i.originalField=t,i.sqlRewritable=!0,i.field=l.cloneField(t),i.field.name=r,i.field.alias=a,i}return __extends(t,e),t.prototype.rewriteSql=function(e,t){return{rewritten:this.sqlRewritable,where:o.reformulateWithoutField(e,this.field.name,this.originalField.name,t.getFieldsIndex())}},t.prototype.extractValue=function(e){return e.attributes[this.originalField.name]},t}(c);t.FieldRename=p;var f=function(e){function t(t,r,a){var i=e.call(this)||this;i.field=t,i.codefield=r,i.lkp=a,i.reverseLkp={};for(var n in a)i.reverseLkp[a[n]]=n;return i.sqlRewritable=!0,i}return __extends(t,e),t.prototype.rewriteSql=function(e,r){var a=this.evaluateNodeToWhereClause(e.parseTree,l.FeatureServiceDatabaseType.Standardised,this.field.name,this.codefield instanceof u.WhereClause?o.toWhereClause(this.codefield,l.FeatureServiceDatabaseType.Standardised):this.codefield,e.parameters);return a.indexOf(t.BADNESS)>=0?{rewritten:!1,where:e}:{rewritten:this.sqlRewritable,where:u.WhereClause.create(a,r._parent.getFieldsIndex())}},t.prototype.evaluateNodeToWhereClause=function(e,r,a,i,n){void 0===a&&(a=null),void 0===i&&(i=null);var s,u,h,c;switch(e.type){case"interval":return o.convertIntervalToSql(this.evaluateNodeToWhereClause(e.value,r,a,i,n),e.qualifier,e.op,l.FeatureServiceDatabaseType.Standardised);case"case_expression":var d=" CASE ";"simple"===e.format&&(d+=this.evaluateNodeToWhereClause(e.operand,r,a,t.BADNESS,n));for(var p=0;p<e.clauses.length;p++)d+=" WHEN "+this.evaluateNodeToWhereClause(e.clauses[p].operand,r,a,t.BADNESS,n)+" THEN "+this.evaluateNodeToWhereClause(e.clauses[p].value,r,a,t.BADNESS,n);return null!==e.else&&(d+=" ELSE "+this.evaluateNodeToWhereClause(e.else,r,a,t.BADNESS,n)),d+=" END ";case"param":var f=n[e.value.toLowerCase()];if("string"==typeof f){return"'"+n[e.value.toLowerCase()].toString().replace(/'/g,"''")+"'"}if(f instanceof Date)return o.makeDateString(f,r);if(f instanceof Array){for(var v=[],p=0;p<f.length;p++)"string"==typeof f[p]?v.push("'"+f[p].toString().replace(/'/g,"''")+"'"):f[p]instanceof Date?v.push(o.makeDateString(f[p],r)):v.push(f[p].toString());return v}return f.toString();case"expr_list":u=[];for(var _=0,g=e.value;_<g.length;_++){var S=g[_];u.push(this.evaluateNodeToWhereClause(S,r,a,i,n))}return u;case"unary_expr":return" ( NOT "+this.evaluateNodeToWhereClause(e.expr,r,a,t.BADNESS,n)+" ) ";case"binary_expr":switch(e.operator){case"AND":return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" AND "+this.evaluateNodeToWhereClause(e.right,r,a,i,n)+") ";case"OR":return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" OR "+this.evaluateNodeToWhereClause(e.right,r,a,i,n)+") ";case"IS":if("null"!==e.right.type)throw new Error("Unsupported RHS for IS");return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IS NULL )";case"ISNOT":if("null"!==e.right.type)throw new Error("Unsupported RHS for IS");return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IS NOT NULL )";case"IN":if(s=[],"expr_list"===e.right.type){if("column_ref"===e.left.type&&e.left.column.toUpperCase()===this.field.name.toUpperCase()){for(var N=[],w=!0,C=0,T=e.right.value;C<T.length;C++){var y=T[C];if("string"!==y.type){w=!1;break}if(void 0===this.lkp[y.value]){w=!1;break}N.push(this.lkp[y.value].toString())}if(w)return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IN ("+N.join(",")+")) "}return s=this.evaluateNodeToWhereClause(e.right,r,a,i,n)," ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IN ("+s.join(",")+")) "}return c=this.evaluateNodeToWhereClause(e.right,r,a,i,n),c instanceof Array?" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IN ("+c.join(",")+")) ":" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IN ("+c+")) ";case"NOT IN":if(s=[],"expr_list"===e.right.type){if("column_ref"===e.left.type&&e.left.column.toUpperCase()===this.field.name.toUpperCase()){for(var N=[],w=!0,m=0,F=e.right.value;m<F.length;m++){var y=F[m];if("string"!==y.type){w=!1;break}if(void 0===this.lkp[y.value]){w=!1;break}N.push(this.lkp[y.value].toString())}if(w)return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" NOT IN ("+N.join(",")+")) "}return s=this.evaluateNodeToWhereClause(e.right,r,a,i,n)," ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" NOT IN ("+s.join(",")+")) "}return c=this.evaluateNodeToWhereClause(e.right,r,a,i,n),c instanceof Array?" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" NOT IN ("+c.join(",")+")) ":" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" NOT IN ("+c+")) ";case"BETWEEN":return h=this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)," ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" BETWEEN "+h[0]+" AND "+h[1]+" ) ";case"NOTBETWEEN":return h=this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)," ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" NOT BETWEEN "+h[0]+" AND "+h[1]+" ) ";case"LIKE":return""!==e.escape?" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" LIKE "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+" ESCAPE '"+e.escape+"') ":" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" LIKE "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+") ";case"NOT LIKE":return""!==e.escape?" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" NOT LIKE "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+" ESCAPE '"+e.escape+"') ":" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" NOT LIKE "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+") ";case"<>":case"=":if("column_ref"===e.left.type&&"string"===e.right.type){if(e.left.column.toUpperCase()===this.field.name.toUpperCase()&&void 0!==this.lkp[e.right.value.toString()])return" ("+i+" "+e.operator+" "+this.lkp[e.right.value.toString()].toString()+") "}else if("column_ref"===e.right.type&&"string"===e.left.type&&e.right.column.toUpperCase()===this.field.name.toUpperCase())return" ("+this.lkp[e.right.value.toString()].toString()+" "+e.operator+" "+i+") ";return" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" "+e.operator+" "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+") ";case"<":case">":case">=":case"<=":case"*":case"-":case"+":case"/":return" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" "+e.operator+" "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+") "}throw new Error("Not Supported Operator "+e.operator);case"null":return"null";case"bool":return!0===e.value?"1":"0";case"string":return"'"+e.value.toString().replace(/'/g,"''")+"'";case"timestamp":case"date":return o.makeDateString(e.value,r);case"number":return e.value.toString();case"column_ref":return"CURRENT_DATE"===e.column.toUpperCase()?o.makeToday(!0,r):"CURRENT_TIMESTAMP"===e.column.toUpperCase()?o.makeToday(!1,r):a&&a.toLowerCase()===e.column.toLowerCase()?"("+i+")":e.column;case"function":var E=this.evaluateNodeToWhereClause(e.args,r,a,t.BADNESS,n);return o.translateFunctionToDatabaseSpecific(e.name,E,r)}throw new Error("Unsupported sql syntax "+e.type)},t.prototype.extractValue=function(e){return this.codefield instanceof u.WhereClause?this.reverseLkp[this.codefield.calculateValueCompiled(e)]:e.attributes[this.codefield]},t.BADNESS="_!!!_BAD_LKP_!!!!",t}(c);t.StringToCodeAdapted=f;var v=function(e){function t(t,r){var a=e.call(this)||this;return a.field=t,a.sql=r,a}return __extends(t,e),t.prototype.rewriteSql=function(e,t){return{rewritten:!0,where:o.reformulateWithoutField(e,this.field.name,o.toWhereClause(this.sql,l.FeatureServiceDatabaseType.Standardised),t.getFieldsIndex())}},t.prototype.postInitialization=function(e,t){},t.prototype.extractValue=function(e){return this.sql.calculateValueCompiled(e)},t}(c);t.SqlExpressionAdapted=v;var _=function(e){function t(t){var r=e.call(this,t)||this;return r._calcFunc=null,r.declaredClass="esri.arcade.featureset.actions.Adapted",r.adaptedFields=null,r._extraFilter=null,r._extraFilter=t.extraFilter,r._parent=t.parentfeatureset,r._maxProcessing=30,r.adaptedFields=t.adaptedFields,r}return __extends(t,e),t.findField=function(e,t){for(var r=0,a=e;r<a.length;r++){var i=a[r];if(i.name.toLowerCase()===t.toString().toLowerCase())return i}return null},t.prototype._initialiseFeatureSet=function(){null!==this._parent?(this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.spatialReference=new h({wkid:4326}),this.objectIdField="",this.geometryType=l.layerGeometryEsriConstants.point,this.typeIdField="",this.types=null),this.fields=[];for(var e=0,t=this.adaptedFields;e<t.length;e++){var r=t[e];r.postInitialization(this,this._parent),this.fields.push(r.field)}},t.prototype._getSet=function(e){var t=this;return null===this._wset?this._ensureLoaded().then(function(){return t._extraFilter?t._getFilteredSet("",null,null,null,e):t._parent._getSet(e)}).then(function(r){return t._checkCancelled(e),t._wset=new n(r._candidates.slice(0),r._known.slice(0),r._ordered,t._clonePageDefinition(r.pagesDefinition)),t._wset}):s.resolve(this._wset)},t.prototype._isInFeatureSet=function(e){return this._parent._isInFeatureSet(e)},t.prototype._getFeatures=function(e,t,i,l){var o=this,u=[];-1!==t&&void 0===this._featureCache[t]&&u.push(t);var h=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(e,h,l))return this._expandPagedSet(e,h,0,0,l).then(function(r){return o._getFeatures(e,t,i,l)});for(var c=0,d=e._lastFetchedIndex;d<e._known.length&&(c++,c<=i&&(e._lastFetchedIndex+=1),!(void 0===this._featureCache[e._known[d]]&&(e._known[d]!==t&&u.push(e._known[d]),u.length>=h-1)));d++);if(0===u.length)return s.resolve("success");e=new n([],u,e._ordered,null);var p=Math.min(u.length,i);return this._parent._getFeatures(e,-1,p,l).then(function(e){o._checkCancelled(l);for(var t=[],i=0;i<p;i++){var n=o._parent._featureFromCache(u[i]);void 0!==n&&t.push({geometry:n.geometry,attributes:n.attributes,id:u[i]})}for(var s=0,h=t;s<h.length;s++){for(var c=h[s],d=[],f=0,v=o.adaptedFields;f<v.length;f++){var _=v[f];d[_.field.name]=_.extractValue(c)}o._featureCache[c.id]=new r({attributes:d,geometry:a.cloneGeometry(c.geometry)})}return"success"})},t.prototype._fetchAndRefineFeatures=function(e,t,r){return s.reject(new Error("Fetch and Refine should not be called in this featureset"))},t.prototype._getFilteredSet=function(e,t,r,a,i){var l=this,s=!1,u=this.reformulateWithoutAdaptions(r);s=u.cannot,r=u.where;var h=!1;if(null!==a){h=!0;for(var c=0,p=this.adaptedFields;c<p.length;c++){var f=p[c];if(!(f instanceof d)&&!0===a.scanForField(f.field.name)){a=null,h=!1;break}}}return null!==r?null!==this._extraFilter&&(r=o.combine(this._extraFilter,r)):r=this._extraFilter,this._ensureLoaded().then(function(){return l._parent._getFilteredSet(e,t,r,a,i)}).then(function(e){return l._checkCancelled(i),!0===s?new n(e._candidates.slice(0).concat(e._known.slice(0)),[],!0===h&&e._ordered,l._clonePageDefinition(e.pagesDefinition)):new n(e._candidates.slice(0),e._known.slice(0),!0===h&&e._ordered,l._clonePageDefinition(e.pagesDefinition))})},t.prototype.reformulateWithoutAdaptions=function(e){var t={cannot:!1,where:e};if(null!==e)for(var r=0,a=this.adaptedFields;r<a.length;r++){var i=a[r];if(!0===o.scanForField(e,i.field.name)){var n=i.rewriteSql(e,this);if(!0!==n.rewritten){t.cannot=!0,t.where=null;break}t.where=n.where}}return t},t.prototype._stat=function(e,t,r,a,i,n,l){var u=this,h=!1,c=this.reformulateWithoutAdaptions(t);return h=c.cannot,t=c.where,c=this.reformulateWithoutAdaptions(i),h=h||c.cannot,i=c.where,null!==i?null!==this._extraFilter&&(i=o.combine(this._extraFilter,i)):i=this._extraFilter,!0===h?null===i&&""===r&&null===a?this._manualStat(e,t,n,l):s.resolve({calculated:!1}):this._parent._stat(e,t,r,a,i,n,l).then(function(o){return!1===o.calculated?null===i&&""===r&&null===a?u._manualStat(e,t,n,l):{calculated:!1}:o})},t.prototype._canDoAggregates=function(e,t,r,a,i){if(null===this._parent)return s.resolve(!1);for(var n=0;n<e.length;n++)for(var l=0,u=this.adaptedFields;l<u.length;l++){var h=u[l];if(e[n].toLowerCase()===h.field.name.toLowerCase()&&!(h instanceof d))return s.resolve(!1)}for(var c=[],n=0;n<t.length;n++){var p=t[n];if(null!==p.workingexpr){var f=this.reformulateWithoutAdaptions(p.workingexpr);if(f.cannot)return s.resolve(!1);var v=p.clone();v.workingexpr=f.where,c.push(v)}else c.push(p)}var _=this.reformulateWithoutAdaptions(i);return _.cannot?s.resolve(!1):(i=_.where,null!==i?null!==this._extraFilter&&(i=o.combine(this._extraFilter,i)):i=this._extraFilter,this._parent._canDoAggregates(e,c,r,a,i))},t.prototype._getAggregatePagesDataSourceDefinition=function(e,t,r,a,i,n,l){if(null===this._parent)return s.reject(new Error("Should never be called"));for(var u=[],h=0;h<t.length;h++){var c=t[h];if(null!==c.workingexpr){var d=this.reformulateWithoutAdaptions(c.workingexpr);if(d.cannot)return s.reject(new Error("Should never be called"));var p=c.clone();p.workingexpr=d.where,u.push(p)}else u.push(c)}var f=this.reformulateWithoutAdaptions(i);return f.cannot?s.reject(new Error("Should never be called")):(i=f.where,null!==i?null!==this._extraFilter&&(i=o.combine(this._extraFilter,i)):i=this._extraFilter,this._parent._getAggregatePagesDataSourceDefinition(e,u,r,a,i,n,l))},t}(i);t.AdaptedFeatureSet=_});