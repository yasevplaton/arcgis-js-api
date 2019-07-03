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

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/Deferred","dojo/has","./_DRSBaseTask","./BatchValidationJob","./BatchValidationJobInfo","../../request","../../kernel"],function(e,o,t,r,n,a,i,s,c,l){var d=e(a,{declaredClass:"esri.tasks.datareviewer.BatchValidationTask",constructor:function(e){this.onGetJobIdsComplete=t.hitch(this,this.onGetJobIdsComplete),this.onScheduleJobComplete=t.hitch(this,this.onScheduleJobComplete),this.onEditJobComplete=t.hitch(this,this.onEditJobComplete),this.onDeleteJobComplete=t.hitch(this,this.onDeleteJobComplete),this.onEnableJobComplete=t.hitch(this,this.onEnableJobComplete),this.onDisableJobComplete=t.hitch(this,this.onDisableJobComplete),this.onGetJobDetailsComplete=t.hitch(this,this.onGetJobDetailsComplete),this.onGetJobExecutionDetailsComplete=t.hitch(this,this.onGetJobExecutionDetailsComplete),this.onCancelJobExecutionComplete=t.hitch(this,this.onCancelJobExecutionComplete),this.onExecuteJobComplete=t.hitch(this,this.onExecuteJobComplete),this.onGetScheduledJobsListComplete=t.hitch(this,this.onGetScheduledJobsListComplete),this.onGetAdhocJobsListComplete=t.hitch(this,this.onGetAdhocJobsListComplete)},getJobIds:function(){var e=this._successHandler,n=this._errorHandler,a=this._appendQueryParams,i=this._url+"/BatchValidation";i=a(i);var s=new r;return c({callbackParamName:"callback",url:i,content:{f:"json"}}).then(t.hitch(this,function(t,r){if(void 0!==t.error){var a=new Error;return a.message=t.error.message,a.code=t.error.code,void n(a,s)}try{if(void 0===t.scheduledJobs||void 0===t.adhocJobs)n(null,s);else{var i={scheduledJobs:[],adhocJobs:[]};o.forEach(t.scheduledJobs,function(e,o){i.scheduledJobs.push(e.id)}),o.forEach(t.adhocJobs,function(e,o){i.adhocJobs.push(e.id)}),e(i,"onGetJobIdsComplete",s)}}catch(e){n(e,s)}}),function(e,o){n(e,s)}),s},scheduleJob:function(e){var o=this._successHandler,n=this._errorHandler,a=this._appendQueryParams,i=this._url+"/BatchValidation/scheduleNewJob";i=a(i);var s=new r;return c({callbackParamName:"callback",url:i,content:e.toJSONScheduleParameters()}).then(t.hitch(this,function(e,t){if(void 0!==e.error){var r=new Error;return r.message=e.error.message,r.code=e.error.code,void n(r,s)}try{void 0===e.scheduledJobId?n(null,s):o({jobId:e.scheduledJobId},"onScheduleJobComplete",s)}catch(e){n(e,s)}}),function(e,o){n(e,s)}),s},editJob:function(e,o){var n=this._successHandler,a=this._errorHandler,i=this._appendQueryParams,s=this._url+"/BatchValidation/scheduledJobs/"+e+"/editJob";s=i(s);var l=new r;return c({callbackParamName:"callback",url:s,content:o.toJSONEditParameters()}).then(t.hitch(this,function(e,o){if(void 0!==e.error){var t=new Error;return t.message=e.error.message,t.code=e.error.code,void a(t,l)}try{void 0!==e.edited&&"false"===e.edited?a(null,l):void 0!==e.edited?n({edited:e.edited},"onEditJobComplete",l):a(null,l)}catch(e){a(e,l)}}),function(e,o){a(e,l)}),l},deleteJob:function(e){var o=this._successHandler,n=this._errorHandler,a=this._appendQueryParams,i=this._url+"/BatchValidation/scheduledJobs/"+e+"/deleteJob";i=a(i);var s=new r;return c({callbackParamName:"callback",url:i,content:{f:"json"}}).then(t.hitch(this,function(e,t){if(void 0!==e.error){var r=new Error;return r.message=e.error.message,r.code=e.error.code,void n(r,s)}try{void 0!==e.deleted?o({deleted:e.deleted},"onDeleteJobComplete",s):n(null,s)}catch(e){n(e,s)}}),function(e,o){n(e,s)}),s},enableJob:function(e){var o=this._successHandler,n=this._errorHandler,a=this._appendQueryParams,i=this._url+"/BatchValidation/scheduledJobs/"+e+"/enableJob";i=a(i);var s=new r;return c({callbackParamName:"callback",url:i,content:{f:"json"}}).then(t.hitch(this,function(e,t){if(void 0!==e.error){var r=new Error;return r.message=e.error.message,r.code=e.error.code,void n(r,s)}try{void 0!==e.enabled?o({enabled:e.enabled},"onEnableJobComplete",s):n(null,s)}catch(e){n(e,s)}}),function(e,o){n(e,s)}),s},disableJob:function(e){var o=this._successHandler,n=this._errorHandler,a=this._appendQueryParams,i=this._url+"/BatchValidation/scheduledJobs/"+e+"/disableJob";i=a(i);var s=new r;return c({callbackParamName:"callback",url:i,content:{f:"json"}}).then(t.hitch(this,function(e,t){if(void 0!==e.error){var r=new Error;return r.message=e.error.message,r.code=e.error.code,void n(r,s)}try{void 0!==e.disabled?o({disabled:e.disabled},"onDisableJobComplete",s):n(null,s)}catch(e){n(e,s)}}),function(e,o){n(e,s)}),s},getJobDetails:function(e){var o=this._successHandler,n=this._errorHandler,a=this._appendQueryParams,s=this._url+"/BatchValidation/getJobDetails";s=a(s);var l=new r;return c({callbackParamName:"callback",url:s,content:{jobId:e,f:"json"}}).then(t.hitch(this,function(e,t){if(void 0!==e.error){var r=new Error;return r.message=e.error.message,r.code=e.error.code,void n(r,l)}try{var a=new i(e);o({jobDetails:a},"onGetJobDetailsComplete",l)}catch(e){n(e,l)}}),function(e,o){n(e,l)}),l},getJobExecutionDetails:function(e){var o=this._successHandler,n=this._errorHandler,a=this._appendQueryParams,i=this._url+"/BatchValidation/getJobExecutionDetails";i=a(i);var l=new r;return c({callbackParamName:"callback",url:i,content:{f:"json",jobId:e.toString()}}).then(t.hitch(this,function(e,t){if(void 0!==e.error){var r=new Error;return r.message=e.error.message,r.code=e.error.code,void n(r,l)}try{var a=new s(e);o({jobInfo:a},"onGetJobExecutionDetailsComplete",l)}catch(e){n(e,l)}}),function(e,o){n(e,l)}),l},cancelJobExecution:function(e){var o=this._successHandler,n=this._errorHandler,a=this._appendQueryParams,i=this._url+"/BatchValidation/cancelJob";i=a(i);var s=new r;return c({callbackParamName:"callback",url:i,content:{f:"json",jobId:e}}).then(t.hitch(this,function(e,t){if(void 0!==e.error){var r=new Error;return r.message=e.error.message,r.code=e.error.code,void n(r,s)}try{void 0!==e.canceled?o({canceled:e.canceled},"onCancelJobExecutionComplete",s):n(null,s)}catch(e){n(e,s)}}),function(e,o){n(e,s)}),s},executeJob:function(e){var o=this._successHandler,n=this._errorHandler,a=this._appendQueryParams,i=this._url+"/BatchValidation/executeJob";i=a(i);var s=new r;return c({callbackParamName:"callback",url:i,content:e.toJSONExecuteParameters()}).then(t.hitch(this,function(e,t){if(void 0!==e.error){var r=new Error;return r.message=e.error.message,r.code=e.error.code,void n(r,s)}try{void 0===e.adhocJobId?n(null,s):o({jobId:e.adhocJobId},"onExecuteJobComplete",s)}catch(e){n(e,s)}}),function(e,o){n(e,s)}),s},getScheduledJobsList:function(){var e=this._successHandler,n=this._errorHandler,a=this._appendQueryParams,s=this._url+"/BatchValidation/scheduledJobs";s=a(s);var l=new r;return c({callbackParamName:"callback",url:s,content:{f:"json"}}).then(t.hitch(this,function(t,r){if(void 0!==t.error){var a=new Error;return a.message=t.error.message,a.code=t.error.code,void n(a,l)}try{if(void 0===t.scheduledJobs)n(null,l);else{var s=[];o.forEach(t.scheduledJobs,function(e,o){null!==e&&void 0!==e&&s.push(new i(e))}),e({scheduledJobs:s},"onGetScheduledJobsListComplete",l)}}catch(e){n(e,l)}}),function(e,o){n(e,l)}),l},getAdhocJobsList:function(){var e=this._successHandler,n=this._errorHandler,a=this._appendQueryParams,s=this._url+"/BatchValidation/adhocJobs";s=a(s);var l=new r;return c({callbackParamName:"callback",url:s,content:{f:"json"}}).then(t.hitch(this,function(t,r){if(void 0!==t.error){var a=new Error;return a.message=t.error.message,a.code=t.error.code,void n(a,l)}try{if(void 0===t.adhocJobs)n(null,l);else{var s=[];o.forEach(t.adhocJobs,function(e,o){null!==e&&void 0!==e&&s.push(new i(e))}),e({adhocJobs:s},"onGetAdhocJobsListComplete",l)}}catch(e){n(e,l)}}),function(e,o){n(e,l)}),l},onGetJobIdsComplete:function(e){},onGetJobDetailsComplete:function(e){},onGetJobExecutionDetailsComplete:function(e){},onCancelJobExecutionComplete:function(e){},onExecuteJobComplete:function(e){},onScheduleJobComplete:function(e){},onEditJobComplete:function(e){},onEnableJobComplete:function(e){},onDisableJobComplete:function(e){},onDeleteJobComplete:function(e){},onGetScheduledJobsListComplete:function(e){},onGetAdhocJobsListComplete:function(e){}});return n("extend-esri")&&t.setObject("tasks.datareviewer.BatchValidationTask",d,l),d});