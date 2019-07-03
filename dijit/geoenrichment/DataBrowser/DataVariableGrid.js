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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/dom-class","dojo/on","dijit/Tooltip","dgrid/OnDemandGrid","dgrid/tree","../_Invoke","../SelectableTree","../TriStateItem","./VariableUtil","./VariableToggle"],function(e,t,i,a,r,n,o,s,l,h,d,c,u,_){return e([s,h],{manager:null,showHeader:!1,keepScrollPosition:!0,groupCategories:!0,animateSelection:null,queryID:"/",_selectionHandler:null,_cellHash:null,_tooltipIcon:null,_tooltipHidden:!1,_inUpdate:!1,_expansionHash:null,_lastToggledIndex:0,_maxGroupSize:0,buildRendering:function(){var e={label:"",renderCell:t.hitch(this,this._renderNode),sortable:!1};this.groupCategories&&(e.indentWidth=this.manager.variables.favorites?1:this.manager.multipleSelectIsAllowed()?16:8,e=l(e)),this.columns=[e],this._cellHash={},this.setVariables([]),this.inherited(arguments)},refresh:function(){this._cellHash={},this.inherited(arguments)},setVariables:function(e,i){this._cleanup();var a=this._prepareVariables(e);a.length&&(this._selectionHandler=this.manager.watch("selection",t.hitch(this,this._selectionUpdated))),this.groupCategories&&(a.length&&!i?(this._expansionHash=this._expansionHash||{},this._expanded=t.mixin({},this._expansionHash[this.queryID]),1==a.length&&(this._expanded[a[0].id]=!0)):this._expansionHash&&(this._expansionHash[this.queryID]=t.mixin({},this._expanded)));var r=new d(a);this._started?(this.set("store",r),this.refresh()):this.store=r},_prepareVariables:function(e){if(!e.length)return[];var t;return this._lastToggledIndex=this._maxGroupSize=0,this.groupCategories?(t=this._prepareVariableCategories(e),this.manager.multipleSelectIsAllowed()&&i.forEach(t,function(e,t){e.index=t+1,i.forEach(e.children,function(e,t){e.index=t+1}),this._maxGroupSize=Math.max(this._maxGroupSize,e.children.length+2)},this)):t=i.map(e,this._prepareVariableItem,this),t},_prepareVariableCategories:function(e){var t={};i.forEach(e,function(e){var i=e.fieldCategory,a=t[i];a||(a={label:i,id:i,children:[]},t[i]=a),a.children.push(this._prepareVariableItem(e))},this);var a=[];for(var r in t)a.push(t[r]);return this.manager.variables.queryEngine({},{sort:[{attribute:"label"}]})(a)},_prepareVariableItem:function(e){var t=this._prepareVariableNode(e);return t.id=this.manager.variables.getIdentity(e),t},_prepareVariableNode:function(e){var t={label:e.description,variable:e};t.group=u.getToggleGroup(this.manager.variables,this.manager.variables.getIdentity(e));var i=this.manager.getSelectionGroups().hash[t.group.value];return i&&(t.selected=!0,t.group.value=i.value),t},renderHeader:function(){},_renderNode:function(e,i,o){if(this._cellHash[this.store.getIdentity(e)]=o,r.add(o,"DataBrowserVarCell"),e.variable)if(this.manager.variables.favorites){var s=this._addVariableFavoriteIcon(e,o);if(s){var l=this._getFavoriteId(e);this._updateFavorite(s,this.manager.variables.favorites.contains(l)),n(s,"click",t.hitch(this,this._toggleFavorite,s,l)),o.__favoriteIcon=s}this._addSpacer(o)}else this.manager.multipleSelectIsAllowed()&&this._addSpacer(o);if(this.manager.multipleSelectIsAllowed()){var h=new c(o,{class:"dijitInline DataBrowserVarIcon DataBrowserCheckBox DataBrowserVarFloatStart"});h.autoToggle=!1,h.node=e,o.__cellCheckbox=h,this._updateCheckboxState(h),this._addSpacer(o)}var s=this._addVariableInfoIcon(e,o);if(s&&(n(s,"click",t.hitch(this,this._toggleTooltip,s,e.variable)),n(s,"mouseover",t.hitch(this,this._showTooltip,s,e.variable)),n(s,"mouseout",t.hitch(this,this._hideTooltip))),e.variable&&e.group.states){var d=new _(e.group,a.create("div",{class:"dijitInline DataBrowserVarFloatEnd"},o));n(d,"change",t.hitch(this,this._onVariableToggleChange,e,d)),o.__varToggle=d,this._addSpacer(o,!0)}var u=a.create("div",{class:"TrimWithEllipses "+(e.variable?"DataBrowserVarLabel":"DataBrowserVarGroup"),innerHTML:e.label},o),g=t.hitch(this,this._onRowClick,e,u);h&&(h.onClick=g),e.variable?this.manager.selectionLimit&&(r.add(u,"DataBrowser_Clickable"),n(u,"click",g),1===this.manager.selectionLimit&&r.add(o,"DataBrowser_Selectable")):(r.add(u,"DataBrowser_Clickable"),n(u,"click",t.hitch(this,this._onCategoryExpand,e.id)))},_addVariableFavoriteIcon:function(e,t){return a.create("div",{class:"dijitInline DataBrowserVarIcon FavoriteItemIcon DataBrowserVarFloatStart"},t)},_getFavoriteId:function(e){return e.id},_addVariableInfoIcon:function(e,t){if(e.variable&&this.manager.variableInfo){var i=a.create("div",{class:"dijitInline DataBrowserVarIcon DataBrowserVarFloatStart DataBrowserInfoIcon"},t);this._addSpacer(t)}return i},_addSpacer:function(e,t){a.create("div",{class:"dijitInline DataBrowserVarSpacer "+(t?"DataBrowserVarFloatEnd":"DataBrowserVarFloatStart"),innerHTML:"&nbsp;"},e)},_onCategoryExpand:function(e){var t=this._expanded&&this._expanded[e];this.expand(e,!t)},_toggleFavorite:function(e,t){var i=this.manager.variables.favorites;i.contains(t)?i.remove(t):i.add(t);var a=i.contains(t);return this._updateFavorite(e,a),this.invoke("_saveFavorites",1e3),a},_updateFavorite:function(e,t){t?(r.remove(e,"FavoriteItem"),r.add(e,"FavoriteItemChecked")):(r.remove(e,"FavoriteItemChecked"),r.add(e,"FavoriteItem"))},_saveFavorites:function(){this.manager.variables.favorites.save()},_toggleTooltip:function(e,t){this._tooltipHidden=!this._tooltipHidden,this._tooltipHidden?this._hideTooltip():this._showTooltip(e,t)},_showTooltip:function(e,t){this._tooltipHidden||this._tooltipIcon===e||(this._tooltipIcon=e,this.manager.variableInfo.set("variable",t),o.show(this.manager.variableInfo.domNode.outerHTML,e,["above","below"]))},_hideTooltip:function(){this._tooltipIcon&&(o.hide(this._tooltipIcon),this._tooltipIcon=null)},_onRowClick:function(e,t,a){if(this.manager.multipleSelectIsAllowed()){if(a.shiftKey&&this._applyMultiSelect(e))return;this._updateLastItem(e)}var r=1===this.manager.selectionLimit,n=e.children?this.store.getDescendingNodes(e,!!e.selected&&null,!0):[e],o=i.map(n,function(e){return e.group.value});this._inUpdate=!0;var s=r||!e.selected,l=s?this.manager.addToSelection(o):this.manager.removeFromSelection(o,!!e.children);this._inUpdate=!1,l?(this._updateSelection(n,l,s),e.children&&!r&&(e.selected=s),this._synchronizeWithStore(),s&&this.animateSelection&&this.animateSelection(t)):s&&n.length&&!r&&(e.children?e.selected=!0:e.parent.selected=!0)},_updateSelection:function(e,t,a){i.forEach(e,function(e){t[e.group.value]&&this.store.changeSelect(e,a)},this)},_onVariableToggleChange:function(e,t){e.group.value=t.value,this._inUpdate=!0,this.manager.updateSelection(t.value),this._inUpdate=!1,this.manager.allowMultipleSelectInGroup&&this._selectionUpdated()},_selectionUpdated:function(){if(!this._inUpdate){var e=this.manager.getSelectionGroups();i.forEach(this.store.data,function(t){i.forEach(t.children||[t],function(t){var i=e.hash[t.group.value];i&&(t.group.value=i.value),this.store.changeSelect(t,!!i)},this)},this),this._synchronizeWithStore()}},_synchronizeWithStore:function(){var e=this.manager.getSelectionGroups();for(var t in this._cellHash){var i=this._cellHash[t],a=i.__cellCheckbox;a&&this._updateCheckboxState(a);var r=i.__varToggle,n=r&&e.hash[r.value];n&&r.set("value",n.value)}},_updateCheckboxState:function(e){var t=this.store.getSelectionState(e.node);e.set("checked",t)},_getNodeIndex:function(e){var t=e.index;return e.children?t*=this._maxGroupSize:t+=e.parent.index*this._maxGroupSize,t},_updateLastItem:function(e){this._lastToggledIndex=this._getNodeIndex(e),e.children&&(this._lastToggledIndex+=e.children.length+1)},_applyMultiSelect:function(e){var t=this,i=this._lastToggledIndex,a=this._lastToggledIndex=this._getNodeIndex(e);if(!i||a==i)return!1;a<i?i-=1:(a=i+1,e.children&&(this._lastToggledIndex+=e.children.length+1),i=this._lastToggledIndex);var r=[],n=[],o=Math.floor(a/this._maxGroupSize),s=Math.floor(i/this._maxGroupSize);a%=this._maxGroupSize,i%=this._maxGroupSize;for(var l=this.store.root.children,h=o;h<=s;h++,a=1)for(var d=l[h-1].children,c=h!=s?d.length:Math.min(d.length,i),u=Math.max(a-1,0);u<c;u++){e=d[u];var _=!e.selected;(_?n:r).push(e)}return this._inUpdate=!0,r.length&&this.manager.removeFromSelection(r.map(function(e){return t.store.changeSelect(e,!1),e.group.value}),!0),this.manager.selectionLimit>0&&(n.length=Math.max(0,Math.min(n.length,this.manager.selectionLimit-this.manager.get("selection").length))),n.length&&this.manager.addToSelection(n.map(function(e){return t.store.changeSelect(e,!0),e.group.value})),this._inUpdate=!1,this._synchronizeWithStore(),!0},destroy:function(){this._cleanup(),this.inherited(arguments)},_cleanup:function(){this._selectionHandler&&(this._selectionHandler.remove(),delete this._selectionHandler),this._cellHash={}}})});