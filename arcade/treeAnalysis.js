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

define(["require","exports"],function(e,t){"use strict";function n(e,n){var a=t.functionDecls[e.name.toLowerCase()];void 0===a?t.functionDecls[e.name.toLowerCase()]="sync"===n?{min:e.min,max:e.max}:{fmin:e.min,fmax:e.max}:"sync"===n?(a.min=e.min,a.max=e.max):(a.fmin=e.min,a.fmax=e.max)}function a(e,t,n,a){return"0"!==e.min&&n.length<Number(e.min)?-2:"*"!==e.max&&n.length>Number(e.max)?-2:1}function r(e,t,n){if(null!==n.localScope&&void 0!==n.localScope[e.toLowerCase()]){var r=n.localScope[e.toLowerCase()];if("FormulaFunction"===r.type)return void 0===r.signature&&(r.signature={min:"0",max:"*"}),a(r.signature,e,t,n);if("any"===r.type)return void 0===r.signature&&(r.signature={min:"0",max:"*"}),a(r.signature,e,t,n)}if(void 0!==n.globalScope[e.toLowerCase()]){var r=n.globalScope[e.toLowerCase()];if("FormulaFunction"===r.type)return void 0===r.signature&&(r.signature={min:"0",max:"*"}),a(r.signature,e,t,n);if("any"===r.type)return void 0===r.signature&&(r.signature={min:"0",max:"*"}),a(r.signature,e,t,n)}return-1}function i(e,t){if(e)for(var n=0,a=e;n<a.length;n++){var r=a[n];s(r,t)}}function s(e,t){if(e&&!1!==t(e))switch(e.type){case"ArrayExpression":i(e.elements,t);break;case"AssignmentExpression":case"BinaryExpression":s(e.left,t),s(e.right,t);break;case"BlockStatement":i(e.body,t);break;case"BreakStatement":break;case"CallExpression":s(e.callee,t),i(e.arguments,t);break;case"ConditionalExpression":s(e.test,t),s(e.alternate,t),s(e.consequent,t);break;case"ContinueStatement":break;case"DoWhileStatement":s(e.test,t),s(e.body,t);break;case"EmptyStatement":break;case"ExpressionStatement":s(e.expression,t);break;case"ForInStatement":s(e.left,t),s(e.right,t),s(e.body,t);break;case"ForStatement":s(e.init,t),s(e.test,t),s(e.update,t),s(e.body,t);break;case"FunctionDeclaration":case"FunctionDeclaration":case"FunctionExpression":s(e.id,t),i(e.params,t),s(e.body,t);break;case"Identifier":break;case"IfStatement":s(e.test,t),s(e.consequent,t),s(e.alternate,t);break;case"Literal":break;case"LogicalExpression":s(e.left,t),s(e.right,t);break;case"MemberExpression":s(e.object,t),s(e.property,t);break;case"NewExpression":s(e.callee,t),i(e.arguments,t);break;case"ObjectExpression":i(e.properties,t);break;case"Program":i(e.body,t);break;case"Property":s(e.key,t),s(e.value,t);break;case"ReturnStatement":case"UnaryExpression":case"UpdateExpression":s(e.argument,t);break;case"VariableDeclaration":i(e.declarations,t);break;case"VariableDeclarator":s(e.id,t),s(e.init,t)}}function o(e,t){void 0===t&&(t=!0);var n=S(e,"SYNTAX","UNREOGNISED");try{switch(e.type){case"VariableDeclarator":return null!==e.init&&"FunctionExpression"===e.init.type?S(e,"SYNTAX","FUNCTIONVARIABLEDECLARATOR"):"Identifier"!==e.id.type?S(e,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER"):null!==e.init?o(e.init,!1):"";case"VariableDeclaration":for(var a=0;a<e.declarations.length;a++)if(""!==(n=o(e.declarations[a],t)))return n;return"";case"ForInStatement":if(""!==(n=o(e.left,t)))return n;if("VariableDeclaration"===e.left.type){if(e.left.declarations.length>1)return S(e,"SYNTAX","ONLY1VAR");if(null!==e.left.declarations[0].init)return S(e,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==e.left.type)return S(e,"SYNTAX","LEFTNOTVAR");return""!==(n=o(e.right,t))?n:(n=o(e.body,t),""!==n?n:"");case"ForStatement":return null!==e.test&&""!==(n=o(e.test,t))?n:null!==e.init&&""!==(n=o(e.init,t))?n:null!==e.update&&""!==(n=o(e.update,t))?n:null!==e.body&&""!==(n=o(e.body,t))?n:"";case"ContinueStatement":case"EmptyStatement":case"BreakStatement":return"";case"IfStatement":return n=o(e.test,t),""!==n?n:null!==e.consequent&&""!==(n=o(e.consequent,!1))?n:null!==e.alternate&&""!==(n=o(e.alternate,!1))?n:"";case"BlockStatement":for(var r=[],a=0;a<e.body.length;a++)"EmptyStatement"!==e.body[a].type&&r.push(e.body[a]);e.body=r;for(var a=0;a<e.body.length;a++)if(""!==(n=o(e.body[a],t)))return n;return"";case"FunctionDeclaration":return!1===t?S(e,"SYNTAX","GLOBALFUNCTIONSONLY"):"Identifier"!==e.id.type?S(e,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER"):o(e.body,!1);case"ReturnStatement":return null!==e.argument?o(e.argument,t):"";case"UpdateExpression":return"Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type?S(e,"SYNTAX","ASSIGNMENTTOVARSONLY"):o(e.argument,t);case"AssignmentExpression":if("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type)return S(e,"SYNTAX","ASSIGNMENTTOVARSONLY");if(""!==(n=o(e.left,t)))return n;switch(e.operator){case"=":case"/=":case"*=":case"%=":case"+=":case"-=":break;default:return S(e,"SYNTAX","OPERATORNOTRECOGNISED")}return o(e.right,!1);case"ExpressionStatement":return"AssignmentExpression"===e.expression.type?o(e.expression,!1):(e.expression.type,o(e.expression,!1));case"Identifier":n="";break;case"MemberExpression":return n=o(e.object,t),""!==n?n:!0===e.computed?o(e.property,t):"";case"Literal":return"";case"CallExpression":if("Identifier"!==e.callee.type)return S(e,"SYNTAX","ONLYNODESSUPPORTED");n="";for(var a=0;a<e.arguments.length;a++)if(""!==(n=o(e.arguments[a],t)))return n;return"";case"UnaryExpression":n=o(e.argument,t);break;case"BinaryExpression":if(""!==(n=o(e.left,t)))return n;if(""!==(n=o(e.right,t)))return n;switch(e.operator){case"==":case"!=":case"<":case"<=":case">":case">=":case"+":case"-":case"*":case"/":case"%":break;default:return S(e,"SYNTAX","OPERATORNOTRECOGNISED")}return"";case"LogicalExpression":if(""!==(n=o(e.left,t)))return n;if(""!==(n=o(e.right)))return n;switch(e.operator){case"&&":case"||":break;default:return S(e,"SYNTAX","OPERATORNOTRECOGNISED")}return"";case"ConditionalExpression":return S(e,"SYNTAX","NOTSUPPORTED");case"ArrayExpression":n="";for(var a=0;a<e.elements.length;a++)if(""!==(n=o(e.elements[a],t)))return n;return n;case"ObjectExpression":n="";for(var a=0;a<e.properties.length;a++){if(n="",null!==e.properties[a].key&&("Literal"!==e.properties[a].key.type&&"Identifier"!==e.properties[a].key.type&&(n=S(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===e.properties[a].key.type)){var i=e.properties[a].key,s="value"in i?i.value:null;"string"==typeof s||s instanceof String||(n=S(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"))}if(""===n&&(n=o(e.properties[a],t)),""!==n)return n}return n;case"Property":return"Literal"!==e.key.type&&"Identifier"!==e.key.type?S(e,"SYNTAX","ONLYLITERAL"):"Identifier"!==e.key.type&&""!==(n=o(e.key,t))?n:n=o(e.value,t);default:return n}return n}catch(e){throw e}}function c(e,t){var n=S(e,"SYNTAX","UNREOGNISED"),a=null,i="";try{switch(e.type){case"VariableDeclarator":if(null!==e.init&&"FunctionExpression"===e.init.type)return S(e,"SYNTAX","FUNCTIONVARIABLEDECLARATOR");var s=null===e.init?"":c(e.init,t);return""!==s?s:("Identifier"===e.id.type&&(null===t.localScope?t.globalScope[e.id.name.toLowerCase()]={type:"any"}:t.localScope[e.id.name.toLowerCase()]={type:"any"}),"");case"FunctionDeclaration":return a=p(e.id.name.toLowerCase(),e,t),""!==(i=d(e,t))?i:null!==t.localScope?S(e,"SYNTAX","GLOBALFUNCTIONSONLY"):(a.isnative=!1,t.globalScope[e.id.name.toLowerCase()]={type:"FormulaFunction",signature:[a]},"");case"VariableDeclaration":n="";for(var o=0;o<e.declarations.length;o++)if(""!==(n=c(e.declarations[o],t)))return n;return n;case"IfStatement":return n=c(e.test,t),""!==n?n:"AssignmentExpression"===e.test.type||"UpdateExpression"===e.test.type?S(e.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):null!==e.consequent&&""!==(n=c(e.consequent,t))?n:null!==e.alternate&&""!==(n=c(e.alternate,t))?n:"";case"EmptyStatement":return"";case"BlockStatement":for(var o=0;o<e.body.length;o++)if(""!==(n=c(e.body[o],t)))return n;return"";case"ReturnStatement":return null!==e.argument?c(e.argument,t):"";case"ForInStatement":if("VariableDeclaration"===e.left.type){if(e.left.declarations.length>1)return S(e,"SYNTAX","ONLY1VAR");if(null!==e.left.declarations[0].init)return S(e,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==e.left.type)return S(e,"SYNTAX","LEFTNOTVAR");return""!==(n=c(e.left,t))?n:""!==(n=c(e.right,t))?n:(n=c(e.body,t),""!==n?n:"");case"ForStatement":return null!==e.init&&""!==(n=c(e.init,t))?n:null!==e.test&&""!==(n=c(e.test,t))?n:null!==e.body&&""!==(n=c(e.body,t))?n:null!==e.update&&""!==(n=c(e.update,t))?n:"";case"BreakStatement":case"ContinueStatement":return"";case"UpdateExpression":if("Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type)return S(e,"SYNTAX","ASSIGNMENTTOVARSONLY");var l=!1;return"MemberExpression"===e.argument.type?c(e.argument,t):(null!==t.localScope&&void 0!==t.localScope[e.argument.name.toLowerCase()]&&(l=!0),void 0!==t.globalScope[e.argument.name.toLowerCase()]&&(l=!0),!1===l?"Identifier "+e.argument.name+" has not been declared.":"");case"AssignmentExpression":if("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type)return S(e,"SYNTAX","ASSIGNMENTTOVARSONLY");var m=c(e.right,t);return""!==m?m:(l=!1,"MemberExpression"===e.left.type?(m=c(e.left,t),""!==m?m:""):(null!==t.localScope&&void 0!==t.localScope[e.left.name.toLowerCase()]&&(l=!0),void 0!==t.globalScope[e.left.name.toLowerCase()]&&(l=!0),!1===l?"Identifier "+e.left.name+" has not been declared.":""));case"ExpressionStatement":return"AssignmentExpression"===e.expression.type?c(e.expression,t):(e.expression.type,c(e.expression,t));case"Identifier":var u=e.name.toLowerCase();if(null!==t.localScope&&void 0!==t.localScope[u])return"";n=void 0!==t.globalScope[u]?"":S(e,"SYNTAX","VARIABLENOTFOUND");break;case"MemberExpression":return n=c(e.object,t),""!==n?n:!0===e.computed?c(e.property,t):"";case"Literal":return"";case"CallExpression":if("Identifier"!==e.callee.type)return S(e,"SYNTAX","ONLYNODESSUPPORTED");n="";for(var o=0;o<e.arguments.length;o++)if(""!==(n=c(e.arguments[o],t)))return n;var f=r(e.callee.name,e.arguments,t);-1===f&&(n=S(e,"SYNTAX","NOTFOUND")),-2===f&&(n=S(e,"SYNTAX","WRONGSIGNATURE"));break;case"UnaryExpression":n=c(e.argument,t);break;case"BinaryExpression":return""!==(n=c(e.left,t))?n:(n=c(e.right,t),""!==n?n:"");case"LogicalExpression":return""!==(n=c(e.left,t))?n:"AssignmentExpression"===e.left.type||"UpdateExpression"===e.left.type?S(e.left,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):(n=c(e.right,t),""!==n?n:"AssignmentExpression"===e.right.type||"UpdateExpression"===e.right.type?S(e.right,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):"");case"ConditionalExpression":return S(e,"SYNTAX","NOTSUPPORTED");case"ArrayExpression":n="";for(var o=0;o<e.elements.length;o++)if(""!==(n=c(e.elements[o],t)))return n;return n;case"ObjectExpression":n="";for(var o=0;o<e.properties.length;o++){if(n="",null!==e.properties[o].key&&("Literal"!==e.properties[o].key.type&&"Identifier"!==e.properties[o].key.type&&(n=S(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===e.properties[o].key.type)){var y=e.properties[o].key,N="value"in y?y.value:null;"string"==typeof N||N instanceof String||(n=S(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"))}if(""===n&&(n=c(e.properties[o],t)),""!==n)return n}return n;case"Property":return"Literal"!==e.key.type&&"Identifier"!==e.key.type?S(e,"SYNTAX","ONLYLITERAL"):"Identifier"!==e.key.type&&""!==(n=c(e.key,t))?n:n=c(e.value,t);case"Program":case"FunctionExpression":case"NewExpression":case"DoWhileStatement":default:return n}return n}catch(e){throw e}}function l(e,t){var n=!1,a=t.toLowerCase();return s(e,function(e){return!n&&("Identifier"===e.type&&e.name&&e.name.toLowerCase()===a&&(n=!0),!0)}),n}function m(e,t){var n=!1,a=t.toLowerCase();return s(e,function(e){return!n&&("CallExpression"!==e.type||"Identifier"!==e.callee.type||!e.callee.name||e.callee.name.toLowerCase()!==a||(n=!0,!1))}),n}function u(e,t){var n=[];return s(e,function(e){return"MemberExpression"!==e.type||"Identifier"!==e.object.type||(!1===e.computed&&e.object&&e.object.name&&e.property&&"Identifier"===e.property.type&&e.property.name?n.push(e.object.name.toLowerCase()+"."+e.property.name.toLowerCase()):e.object&&e.object.name&&e.property&&"Literal"===e.property.type&&"string"==typeof e.property.value&&n.push(e.object.name.toLowerCase()+"."+e.property.value.toString().toLowerCase()),!1)}),n}function p(e,t,n){var a=[];if(void 0!==t.params&&null!==t.params)for(var r=0;r<t.params.length;r++)a.push("any");return{name:e,return:"any",params:a}}function d(e,t){for(var n={globalScope:t.globalScope,localScope:{}},a=0;a<e.params.length;a++){var r=e.params[a].name;n.localScope[r.toLowerCase()]={type:"any"}}return c(e.body,n)}function f(e,t,n,a){var r={};void 0!==e&&null!==e||(e={}),void 0!==n&&null!==n||(n={}),r.infinity={type:"any"},r.textformatting={type:"any"},r.pi={type:"any"};for(var i in t)"sync"===a&&void 0!==t[i].min?r[i]={type:"FormulaFunction",signature:{min:t[i].min,max:t[i].max}}:"sync"!==a&&void 0!==t[i].fmin&&(r[i]={type:"FormulaFunction",signature:{min:t[i].fmin,max:t[i].fmax}});for(var s=0;s<n.length;s++){var i=n[s];r[i.name]={type:"FormulaFunction",signature:i}}for(var i in e)r[i]=e[i],r[i].type="any";return r}function y(e,n,a,r){void 0===a&&(a="async"),void 0===r&&(r=t.functionDecls);var i=f(n.vars,r,n.customFunctions,a),s={globalScope:i,localScope:null};return c(e.body[0].body,s)}function N(e){return"BlockStatement"!==e.body[0].body.type?"Invalid formula content.":o(e.body[0].body)}function S(e,t,n){var a="";switch(t){case"SYNTAX":a="Syntax Error: ";break;case"RUNTIME":a="Runtime Error: ";break;default:a="Syntax Error: "}try{switch(e.type){case"IfStatement":switch(n){case"CANNOT_USE_ASSIGNMENT_IN_CONDITION":a+=" Assignments not be made in logical tests";break;case"CANNOT_USE_NONBOOLEAN_IN_CONDITION":a+=" Non Boolean used as Condition"}break;case"UpdateExpression":case"AssignmentExpression":switch(n){case"CANNOT_USE_ASSIGNMENT_IN_CONDITION":a+=" Assignments not be made in logical tests";break;case"ASSIGNMENTTOVARSONLY":a+=" Assignments can only be made to identifiers"}break;case"ExpressionStatement":a+=" Assignments can only be made to identifiers";break;case"FunctionDeclaration":switch(n){case"GLOBALFUNCTIONSONLY":a+=" Functions cannot be declared as variables";break;case"FUNCTIONMUSTHAVEIDENTIFIER":a+=" Function Definition must have an identifier"}break;case"VariableDeclaration":a+=" Only 1 variable can be declared at a time";break;case"VariableDeclarator":switch(n){case"FUNCTIONVARIABLEDECLARATOR":a+=" Functions cannot be declared as variables";break;case"VARIABLEMUSTHAVEIDENTIFIER":a+=" Variable Definition must have an identifier"}break;case"Identifier":a+=" Identifier Not Found. ",a+=e.name;break;case"ObjectExpression":switch(n){case"OBJECTPROPERTYMUSTBESTRING":a+=" Property name must be a string"}break;case"ForStatement":switch(n){case"CANNOT_USE_NONBOOLEAN_IN_CONDITION":a+=" Non Boolean used as Condition"}break;case"ForInStatement":switch(n){case"ONLY1VAR":a+=" Can only declare 1 var for use with IN";break;case"CANNOTDECLAREVAL":a+=" Can only declare value for use with IN";break;case"LEFTNOVAR":a+="Must provide a variable to iterate with.";break;case"VARIABLENOTDECLARED":a+="Variable must be declared before it is used..";break;case"CANNOTITERATETHISTYPE":a+="This type cannot be used in an IN loop"}break;case"MemberExpression":switch(n){case"PROPERTYNOTFOUND":a+="Cannot find member property. ",a+=!1===e.computed&&"Identifier"===e.property.type?e.property.name:"";break;case"OUTOFBOUNDS":a+="Out of Bounds. ",a+=!1===e.computed&&"Identifier"===e.property.type?e.property.name:"";break;case"NOTFOUND":a+="Cannot call member method on null. ",a+=!1===e.computed&&"Identifier"===e.property.type?e.property.name:"";break;case"INVALIDTYPE":a+="Cannot call member property on object of this type. ",a+=!1===e.computed&&"Identifier"===e.property.type?e.property.name:""}break;case"Property":switch(n){case"ONLYLITERAL":a+="Property names must be literals or identifiers"}break;case"Literal":break;case"CallExpression":switch(n){case"WRONGSIGNATURE":a+="Function signature does not match: ",a+="Identifier"===e.callee.type?e.callee.name:"";break;case"ONLYNODESUPPORTED":a+="Functions must be declared.",a+="Identifier"===e.callee.type?e.callee.name:"";break;case"NOTAFUNCTION":a+="Not a Function: ",a+="Identifier"===e.callee.type?e.callee.name:"";break;case"NOTFOUND":a+="Function Not Found: "+("Identifier"===e.callee.type?e.callee.name:"")}break;case"UnaryExpression":switch(n){case"NOTSUPPORTEDUNARYOPERATOR":a+="Operator "+e.operator+" not allowed in this context. Only ! can be used with boolean, and - with a number";break;case"NOTSUPPORTEDTYPE":a+="Unary operator "+e.operator+" cannot be used with this argument."}case"BinaryExpression":switch(n){case"OPERATORNOTRECOGNISED":a+="Binary Operator not recognised "+e.operator}break;case"LogicalExpression":switch(n){case"ONLYBOOLEAN":a+="Operator "+e.operator+" cannot be used. Only || or && are allowed values";break;case"ONLYORORAND":a+="Logical Expression "+e.operator+" being applied to parameters that are not boolean."}break;case"ConditionalExpression":a+="Conditional statements not supported.";break;case"ArrayExpression":switch(n){case"FUNCTIONCONTEXTILLEGAL":a+=" Cannot Put Function inside Array."}break;default:a+="Expression contains unrecognised code structures."}}catch(e){throw e}return a}function x(e,t,n){return{line:e.loc.start.line,character:e.loc.start.column,reason:S(e,t,n)}}function E(e,t,n,a,r){void 0===r&&(r=!0);for(var i={globalScope:t.globalScope,localScope:{}},s=0;s<e.params.length;s++){var o=e.params[s].name;i.localScope[o.toLowerCase()]={type:"any"}}b(e.body,i,n,a,!1)}function b(e,t,n,a,i){if(void 0===i&&(i=!0),null===e)throw new Error("Unnexpexted Expression Syntax");var s=null;try{switch(e.type){case"VariableDeclarator":return null!==e.init&&"FunctionExpression"===e.init.type?void a.push(x(e,"SYNTAX","FUNCTIONVARIABLEDECLARATOR")):("Identifier"!==e.id.type?a.push(x(e,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER")):(null!==t.localScope?t.localScope[e.id.name.toLowerCase()]:t.globalScope[e.id.name.toLowerCase()],null===t.localScope?t.globalScope[e.id.name.toLowerCase()]={type:"any"}:t.localScope[e.id.name.toLowerCase()]={type:"any"}),void(null!==e.init&&b(e.init,t,n,a,i)));case"FunctionDeclaration":return!1===i&&a.push(x(e,"SYNTAX","GLOBALFUNCTIONSONLY")),"Identifier"!==e.id.type&&a.push(x(e,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER")),s=p("",e,t),E(e,t,n,a,i),null!==t.localScope&&a.push(x(e,"SYNTAX","GLOBALFUNCTIONSONLY")),s.isnative=!1,void("Identifier"===e.id.type&&(t.globalScope[e.id.name.toLowerCase()]={type:"FormulaFunction",signature:[s]}));case"VariableDeclaration":for(var o=0;o<e.declarations.length;o++)b(e.declarations[o],t,n,a,i);return;case"IfStatement":return null!==e.test&&(b(e.test,t,n,a,i),"AssignmentExpression"!==e.test.type&&"UpdateExpression"!==e.test.type||a.push(x(e.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))),null!==e.consequent&&b(e.consequent,t,n,a,i),void(null!==e.alternate&&b(e.alternate,t,n,a,i));case"EmptyStatement":return;case"BlockStatement":if(null!==e.body)for(var o=0;o<e.body.length;o++)b(e.body[o],t,n,a,i);return;case"ReturnStatement":return void(null!==e.argument&&b(e.argument,t,n,a,i));case"ForInStatement":return"VariableDeclaration"===e.left.type?(e.left.declarations.length>1&&a.push(x(e,"SYNTAX","ONLY1VAR")),null!==e.left.declarations[0].init&&a.push(x(e,"SYNTAX","CANNOTDECLAREVAL"))):"Identifier"!==e.left.type&&a.push(x(e,"SYNTAX","LEFTNOTVAR")),b(e.left,t,n,a,i),b(e.right,t,n,a,i),void b(e.body,t,n,a,i);case"ForStatement":return null!==e.init&&b(e.init,t,n,a,i),null!==e.test&&b(e.test,t,n,a,i),null!==e.body&&b(e.body,t,n,a,i),void(null!==e.update&&b(e.update,t,n,a,i));case"BreakStatement":case"ContinueStatement":return;case"UpdateExpression":if("Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type)a.push(x(e,"SYNTAX","ASSIGNMENTTOVARSONLY"));else{if("Identifier"===e.argument.type){var c=!1;!1===n&&(null!==t.localScope&&void 0!==t.localScope[e.argument.name.toLowerCase()]&&(c=!0),void 0!==t.globalScope[e.argument.name.toLowerCase()]&&(c=!0),!1===c&&a.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Identifier "+e.argument.name+" has not been declared."}))}"MemberExpression"===e.argument.type&&b(e.argument,t,n,a,i)}return;case"AssignmentExpression":switch("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type&&a.push(x(e,"SYNTAX","ASSIGNMENTTOVARSONLY")),e.operator){case"=":case"/=":case"*=":case"%=":case"+=":case"-=":break;default:a.push(x(e,"SYNTAX","OPERATORNOTRECOGNISED"))}b(e.right,t,n,a,i);var l=!1;return"Identifier"===e.left.type&&(null!==t.localScope&&void 0!==t.localScope[e.left.name.toLowerCase()]&&(l=!0),void 0!==t.globalScope[e.left.name.toLowerCase()]&&(l=!0),!1===n&&!1===l&&a.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Identifier "+e.left.name+" has not been declared."})),void("MemberExpression"===e.left.type&&b(e.left,t,n,a,i));case"ExpressionStatement":return void("AssignmentExpression"===e.expression.type?b(e.expression,t,n,a,i):(e.expression.type,b(e.expression,t,n,a,i)));case"Identifier":var m=e.name.toLowerCase();if(null!==t.localScope&&void 0!==t.localScope[m])return;if(void 0!==t.globalScope[m])return;!1===n&&a.push(x(e,"SYNTAX","VARIABLENOTFOUND"));break;case"MemberExpression":return b(e.object,t,n,a,i),void(!0===e.computed&&b(e.property,t,n,a,i));case"Literal":return"";case"CallExpression":"Identifier"!==e.callee.type&&a.push(x(e,"SYNTAX","ONLYNODESSUPPORTED"));for(var o=0;o<e.arguments.length;o++)b(e.arguments[o],t,n,a,i);if("Identifier"===e.callee.type){var u=r(e.callee.name,e.arguments,t);!1===n&&-1===u&&a.push(x(e,"SYNTAX","NOTFOUND")),-2===u&&a.push(x(e,"SYNTAX","WRONGSIGNATURE"))}return;case"UnaryExpression":return void b(e.argument,t,n,a,i);case"BinaryExpression":switch(b(e.left,t,n,a,i),b(e.right,t,n,a,i),e.operator){case"==":case"!=":case"<":case"<=":case">":case">=":case"+":case"-":case"*":case"/":case"%":break;default:a.push(x(e,"SYNTAX","OPERATORNOTRECOGNISED"))}return;case"LogicalExpression":switch(e.operator){case"&&":case"||":break;default:a.push(x(e,"SYNTAX","OPERATORNOTRECOGNISED"))}return b(e.left,t,n,a,i),"AssignmentExpression"!==e.left.type&&"UpdateExpression"!==e.left.type||a.push(x(e,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")),b(e.right,t,n,a,i),void("AssignmentExpression"!==e.right.type&&"UpdateExpression"!==e.right.type||a.push(x(e,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")));case"ConditionalExpression":a.push(x(e,"SYNTAX","NOTSUPPORTED"));break;case"ArrayExpression":for(var o=0;o<e.elements.length;o++)b(e.elements[o],t,n,a,i);return;case"ObjectExpression":for(var o=0;o<e.properties.length;o++)b(e.properties[o],t,n,a,i);return;case"Property":return"Literal"!==e.key.type&&"Identifier"!==e.key.type&&a.push(x(e,"SYNTAX","ONLYLITERAL")),"Literal"===e.key.type&&b(e.key,t,n,a,i),void b(e.value,t,n,a,i);default:a.push(x(e,"SYNTAX","UNRECOGNISED"))}return}catch(t){a.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Unnexpected Syntax"})}}function T(e,n,a,r,i){void 0===r&&(r="async"),void 0===i&&(i=t.functionDecls);var s=[];if("BlockStatement"!==e.body[0].body.type)return[{line:0,character:0,reason:"Invalid Body"}];null!==n&&void 0!==n||(n={vars:{},customFunctions:[]});var o=f(n.vars,i,n.customFunctions,r),c={globalScope:o,localScope:null};try{b(e.body[0].body,c,a,s)}catch(e){}return s}function A(e,t){var n=[];return s(e,function(e){return"CallExpression"===e.type&&"Identifier"===e.callee.type&&n.push(e.callee.name.toLowerCase()),!0}),n}function O(e,t){void 0===t&&(t=[]);var n=null;if(void 0===e.usesFeatureSet){null===n&&(n=A(e,!1)),e.usesFeatureSet=!1;for(var a=0;a<n.length;a++)h.indexOf(n[a])>-1&&(e.usesFeatureSet=!0,e.isAsync=!0);if(!1===e.usesFeatureSet&&t&&t.length>0)for(var r=0,i=t;r<i.length;r++){var s=i[r];if(l(e,s)){e.usesFeatureSet=!0,e.isAsync=!0;break}}}if(void 0===e.isAsync&&(e.isAsync=!1),void 0===e.usesGeometry){e.usesGeometry=!1,null===n&&(n=A(e,!1));for(var a=0;a<n.length;a++)v.indexOf(n[a])>-1&&(e.usesGeometry=!0)}}function g(e){for(var t=A(e,!1),n=0;n<t.length;n++)if(h.indexOf(t[n])>-1)return!0;return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.functionDecls={concatenate:{min:"0",max:"*"},split:{min:"2",max:"4"},guid:{min:"0",max:"1"},today:{min:"0",max:"0"},angle:{min:"2",max:"3"},bearing:{min:"2",max:"3"},urlencode:{min:"1",max:"1"},now:{min:"0",max:"0"},timestamp:{min:"0",max:"0"},day:{min:"1",max:"1"},month:{min:"1",max:"1"},year:{min:"1",max:"1"},hour:{min:"1",max:"1"},second:{min:"1",max:"1"},millisecond:{min:"1",max:"1"},minute:{min:"1",max:"1"},weekday:{min:"1",max:"1"},toutc:{min:"1",max:"1"},tolocal:{min:"1",max:"1"},date:{min:"0",max:"7"},datediff:{min:"2",max:"3"},dateadd:{min:"2",max:"3"},trim:{min:"1",max:"1"},text:{min:"1",max:"2"},left:{min:"2",max:"2"},right:{min:"2",max:"2"},mid:{min:"2",max:"3"},upper:{min:"1",max:"1"},proper:{min:"1",max:"2"},lower:{min:"1",max:"1"},find:{min:"2",max:"3"},iif:{min:"3",max:"3"},decode:{min:"2",max:"*"},when:{min:"2",max:"*"},defaultvalue:{min:"2",max:"2"},isempty:{min:"1",max:"1"},domaincode:{min:"2",max:"4"},domainname:{min:"2",max:"4"},polygon:{min:"1",max:"1"},point:{min:"1",max:"1"},polyline:{min:"1",max:"1"},extent:{min:"1",max:"1"},multipoint:{min:"1",max:"1"},ringisclockwise:{min:"1",max:"1"},geometry:{min:"1",max:"1"},count:{min:"0",max:"*"},number:{min:"1",max:"2"},acos:{min:"1",max:"1"},asin:{min:"1",max:"1"},atan:{min:"1",max:"1"},atan2:{min:"2",max:"2"},ceil:{min:"1",max:"2"},floor:{min:"1",max:"2"},round:{min:"1",max:"2"},cos:{min:"1",max:"1"},exp:{min:"1",max:"1"},log:{min:"1",max:"1"},min:{min:"0",max:"*"},constrain:{min:"3",max:"3"},console:{min:"0",max:"*"},max:{min:"0",max:"*"},pow:{min:"2",max:"2"},random:{min:"0",max:"0"},sqrt:{min:"1",max:"1"},sin:{min:"1",max:"1"},tan:{min:"1",max:"1"},abs:{min:"1",max:"1"},isnan:{min:"1",max:"1"},stdev:{min:"0",max:"*"},average:{min:"0",max:"*"},mean:{min:"0",max:"*"},sum:{min:"0",max:"*"},variance:{min:"0",max:"*"},distinct:{min:"0",max:"*"},first:{min:"1",max:"1"},top:{min:"2",max:"2"},boolean:{min:"1",max:"1"},dictionary:{min:"0",max:"*"},typeof:{min:"1",max:"1"},reverse:{min:"1",max:"1"},replace:{min:"3",max:"4"},sort:{min:"1",max:"2"},feature:{min:"1",max:"*"},haskey:{min:"2",max:"2"},indexof:{min:"2",max:"2"},disjoint:{min:"2",max:"2"},intersects:{min:"2",max:"2"},touches:{min:"2",max:"2"},crosses:{min:"2",max:"2"},within:{min:"2",max:"2"},contains:{min:"2",max:"2"},overlaps:{min:"2",max:"2"},equals:{min:"2",max:"2"},relate:{min:"3",max:"3"},intersection:{min:"2",max:"2"},union:{min:"1",max:"2"},difference:{min:"2",max:"2"},symmetricdifference:{min:"2",max:"2"},clip:{min:"2",max:"2"},cut:{min:"2",max:"2"},area:{min:"1",max:"2"},areageodetic:{min:"1",max:"2"},length:{min:"1",max:"2"},lengthgeodetic:{min:"1",max:"2"},distance:{min:"2",max:"3"},densify:{min:"2",max:"3"},densifygeodetic:{min:"2",max:"3"},generalize:{min:"2",max:"4"},buffer:{min:"2",max:"3"},buffergeodetic:{min:"2",max:"3"},offset:{min:"2",max:"6"},rotate:{min:"2",max:"3"},issimple:{min:"1",max:"1"},simplify:{min:"1",max:"1"},centroid:{min:"1",max:"1"},multiparttosinglepart:{min:"1",max:"1"},setgeometry:{min:"2",max:"2"}};for(var I in t.functionDecls)t.functionDecls[I].fmin=t.functionDecls[I].min,t.functionDecls[I].fmax=t.functionDecls[I].max;var h=["featureset","featuresetbyid","featuresetbyname","featuresetbyurl","attachments","featuresetbyportalitem"],v=["disjoint","intersects","touches","crosses","within","contains","overlaps","equals","relate","intersection","union","difference","symmetricdifference","clip","cut","area","areageodetic","length","lengthgeodetic","distance","densify","densifygeodetic","generalize","buffer","buffergeodetic","offset","rotate","issimple","simplify","multiparttosinglepart"];t.addFunctionDeclaration=n,t.checkFunctionSignature=a,t.findFunction=r,t.walk=s,t.validateLanguageNode=o,t.testValidityOfExpression=c,t.referencesMember=l,t.referencesFunction=m,t.findFieldLiterals=u,t.extractFunctionDeclaration=p,t.validateFunction=d,t.constructGlobalScope=f,t.validateScript=y,t.validateLanguage=N,t.nodeErrorMessage=S,t.makeError=x,t.extractAllIssuesInFunction=E,t.extractAllIssues=b,t.checkScript=T,t.findFunctionCalls=A,t.findScriptDependencies=O,t.scriptUsesFeatureSet=g});