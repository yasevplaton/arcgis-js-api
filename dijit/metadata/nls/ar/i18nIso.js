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

define({documentTypes:{data:{caption:"ISO 19115 (البيانات)",description:""},service:{caption:"ISO 19119 (الخدمة)",description:""},gmi:{caption:"ISO 19115-2 (الصور والبيانات الشبكية)",description:""}},general:{reference:"إسناد"},sections:{metadata:"الوصفية",identification:"تعريف",distribution:"التوزيع",quality:"الجودة",acquisition:"الامتلاك"},metadataSection:{identifier:"المعرّف",contact:"اتصال",date:"التاريخ",standard:"قياسي",reference:"إسناد"},identificationSection:{citation:"اقتباس",description:"الوصف",contact:"اتصال",thumbnail:"صورة مصغرة",keywords:"الكلمات الأساسية",constraints:"القيود",resource:"المورد",resourceTab:{representation:"التمثيل",language:"اللغة",classification:"التصنيف",extent:"المدى"},serviceResourceTab:{serviceType:"نوع الخدمة",extent:"المدى",couplingType:"نوع الازدواج",operation:"العملية",operatesOn:"تعمل على"}},distributionSection:{},qualitySection:{scope:"النطاق",conformance:"التوافق",lineage:"فرع"},acquisitionSection:{requirement:"المتطلبات",objective:"الهدف",instrument:"الأداة",plan:"خريطة",operation:"العملية",platform:"النظام الأساسي",environment:"البيئة"},AbstractMD_Identification:{sAbstract:"الخلاصة",purpose:"الغرض",credit:"اعتمادات",pointOfContact:"نقطة الاتصال",resourceMaintenance:"الصيانة",graphicOverview:"نظرة عامة بيانية",descriptiveKeywords:"مجموعة الكلمات الأساسية",resourceConstraints:"القيود"},CI_Address:{deliveryPoint:"نقطة التسليم",city:"مدينة",administrativeArea:"مساحة إدارية",postalCode:"الرمز البريدي",country:"دولة",electronicMailAddress:"عنوان البريد الإلكتروني"},CI_Citation:{title:"العنوان",alternateTitle:"عنوان بديل",identifier:"مُعرف الموارد الفريد",resource:{title:"عنوان المورد",date:"تاريخ المورد"},specification:{title:"عنوان المواصفات",date:"تاريخ المواصفات"}},CI_Contact:{phone:"الهواتف",address:"العنوان",onlineResource:"الموارد المتصلة بالإنترنت",hoursOfService:"ساعات الخدمة",contactInstructions:"تعليمات الاتصال"},CI_Date:{date:"التاريخ",dateType:"نوع التاريخ"},CI_DateTypeCode:{caption:"نوع التاريخ",creation:"تاريخ الإنشاء",publication:"تاريخ النشر",revision:"تاريخ المراجعة"},CI_OnLineFunctionCode:{caption:"دالة",download:"تنزيل",information:"معلومات",offlineAccess:"الوصول دون اتصال",order:"ترتيب",search:"بحث"},CI_OnlineResource:{caption:"الموارد المتصلة بالإنترنت",linkage:"عنوان URL",protocol:"بروتوكول",applicationProfile:"الملف التعريفي للتطبيق",name:"الاسم",description:"الوصف",sFunction:"دالة"},CI_ResponsibleParty:{caption:"نقطة الاتصال",individualName:"الاسم الفردي",organisationName:"اسم المؤسسة",positionName:"اسم الموضع",contactInfo:"معلومات الاتصال",role:"دور"},CI_RoleCode:{caption:"دور",resourceProvider:"موفر الموارد",custodian:"وصي",owner:"المالك",user:"مستخدم",distributor:"موزع",originator:"المنشئ",pointOfContact:"نقطة الاتصال",principalInvestigator:"المراقب الأساسي",processor:"معالج",publisher:"الناشر",author:"تأليف"},CI_Telephone:{voice:"صوت",facsimile:"الفاكس"},DCPList:{caption:"DCP",XML:"XML",CORBA:"كوربا",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"WebServices"},DQ_ConformanceResult:{caption:"نتيجة الامتثال",explanation:"التفسير",degree:{caption:"درجة",validationPerformed:"التحقق المُنفّذ",conformant:"متوافق",nonConformant:"غير متوافق"}},DQ_DataQuality:{report:"تقرير"},DQ_Scope:{level:"النطاق (تُطبّق معلومات الجودة على)",levelDescription:"وصف المستوى"},EX_Extent:{caption:"المدى",description:"الوصف",geographicElement:"المدى المكاني",temporalElement:"نطاق مؤقت",verticalElement:"مدى رأسي"},EX_GeographicBoundingBox:{westBoundLongitude:"خط طول الإحاطة الغربي",eastBoundLongitude:"خط طول الإحاطة الشرقي",southBoundLatitude:"دائرة عرض الإحاطة الجنوبية",northBoundLatitude:"دائرة عرض الإحاطة الشمالية"},EX_GeographicDescription:{caption:"وصف جغرافي"},EX_TemporalExtent:{TimePeriod:{beginPosition:"تاريخ البدء",endPosition:"تاريخ الانتهاء"}},EX_VerticalExtent:{minimumValue:"الحد الأدنى للقيمة",maximumValue:"الحد الأقصى للقيمة",verticalCRS:"CRS رأسي"},Length:{caption:"الطول",uom:"وحدات القياس",km:"كيلومترات",m:"متر",mi:"ميل",ft:"قدم"},LI_Lineage:{statement:"بيان المحاذاة"},MD_BrowseGraphic:{fileName:"استعراض عنوان URL البياني",fileDescription:"استعراض التسمية البيانية",fileType:"استعراض النوع البياني"},MD_ClassificationCode:{unclassified:"غير مصنف",restricted:"مقيدة",confidential:"سري",secret:"سر",topSecret:"سري للغاية"},MD_Constraints:{caption:"قيود الاستخدام",useLimitation:"حد الاستخدام"},MD_DataIdentification:{spatialRepresentationType:"نوع التمثيل المكاني",spatialResolution:"الدقة المكانية",language:"لغة المورد",supplementalInformation:"تكميلي"},MD_DigitalTransferOptions:{onLine:"متصل"},MD_Distribution:{distributionFormat:"هيئة التوزيع",transferOptions:"خيارات النقل"},MD_Format:{name:"اسم التنسيق",version:"إصدار التنسيق"},MD_Identifier:{caption:"URI",identifierCaption:"المعرّف",code:"الكود"},MD_Keywords:{delimitedCaption:"الكلمات الأساسية",thesaurusName:"المترادفات المقترنة"},MD_KeywordTypeCode:{caption:"نوع المفتاح الأساسي",discipline:"النظام",place:"وضع",stratum:"الطبقة",temporal:"زماني",theme:"سمة"},MD_LegalConstraints:{caption:"القيود القانونية",accessConstraints:"قيود الوصول",useConstraints:"استخدام القيود",otherConstraints:"قيود أخرى"},MD_MaintenanceFrequencyCode:{caption:"تردد",continual:"مستمر",daily:"يوميًا",weekly:"أسبوعيًا",fortnightly:"كل أسبوعين",monthly:"شهريًا",quarterly:"ربع سنوي",biannually:"مرتين سنويًا",annually:"سنويًا",asNeeded:"عند الحاجة",irregular:"غير منتظم",notPlanned:"غير مخطط",unknown:"غير معروف"},MD_Metadata:{caption:"الوصفية",fileIdentifier:"معرف الملف",language:"لغة البيانات التعريفية",hierarchyLevel:"مستوى تسلسل هيكلي",hierarchyLevelName:"اسم مستوى تسلسل هيكلي",contact:"جهات اتصال بيانات التعريف",dateStamp:"تاريخ البيانات التعريفية",metadataStandardName:"اسم معيار بيانات التعريف",metadataStandardVersion:"إصدار قياسي للبيانات التعريفية",referenceSystemInfo:"نظام المرجع",identificationInfo:"تعريف",distributionInfo:"التوزيع",dataQualityInfo:"الجودة"},MD_ProgressCode:{caption:"كود التقدّم",completed:"اكتمل",historicalArchive:"أرشيف قديم",obsolete:"قديم",onGoing:"قيد التقدم",planned:"مخطَط",required:"مطلوب",underDevelopment:"قيد التطوير"},MD_RepresentativeFraction:{denominator:"المقام"},MD_Resolution:{equivalentScale:"المقياس المُكافئ",distance:"مسافة"},MD_RestrictionCode:{copyright:"حقوق النشر",patent:"براءة اختراع",patentPending:"تعليق براءة الاختراع",trademark:"علامة تجارية",license:"الترخيص",intellectualPropertyRights:"حقوق الملكية الفكرية",restricted:"مقيدة",otherRestrictions:"قيود أخرى"},MD_ScopeCode:{attribute:"بيان",attributeType:"نوع البيانات الجدولية",collectionHardware:"أجهزة المجموعة",collectionSession:"جلسة المجموعة",dataset:"مجموعة البيانات",series:"سلاسل",nonGeographicDataset:"مجموعة بيانات غير جغرافية",dimensionGroup:"مجموعة البُعد",feature:"معلم",featureType:"نوع المعلم",propertyType:"نوع الخاصية",fieldSession:"جلسة الحقل",software:"برنامج",service:"الخدمة",model:"النمط",tile:"تجانب"},MD_ScopeDescription:{attributes:"بيانات",features:"المعالم",featureInstances:"مثيلات المعلم",attributeInstances:"مثيلات البيان",dataset:"مجموعة البيانات",other:"آخر"},MD_SecurityConstraints:{caption:"قيود الأمان",classification:"التصنيف",userNote:"ملاحظة للمستخدم",classificationSystem:"نظام التصنيف",handlingDescription:"وصف التعاملات"},MD_SpatialRepresentationTypeCode:{caption:"نوع التمثيل المكاني",vector:"بيانات خطية",grid:"شبكة",textTable:"جدول نصي",tin:"TIN",stereoModel:"نموذج استريو",video:"مقاطع الفيديو"},MD_TopicCategoryCode:{caption:"فئة موضوع",boundaries:"حدود إدارية وسياسية",farming:"زراعة وفلاحة",climatologyMeteorologyAtmosphere:"الغلاف الجوي والمناخ",biota:"الأحياء وعلم البيئة",economy:"الأعمال والاقتصاد",planningCadastre:"مساحي",society:"ثقافي ومجتمعي وسكاني",elevation:"ارتفاع ومنتجات مشتقة",environment:"بيئة ومحادثة",structure:"مرافق وهياكل",geoscientificInformation:"جيولوجي وجيوفيزيائي",health:"الصحة البشرية والأمراض",imageryBaseMapsEarthCover:"التصور وخرائط الأساس",inlandWaters:"الموارد المائية",location:"المواقع والشبكات الجيوديسية",intelligenceMilitary:"عسكري",oceans:"المحيطات ومصبات الأنهار",transportation:"شبكات النقل",utilitiesCommunication:"الأدوات المساعدة والاتصال"},MI_ContextCode:{caption:"السياق",acquisition:"الامتلاك",pass:"تمرير",wayPoint:"Waypoint"},MI_EnvironmentalRecord:{caption:"الشروط البيئية",averageAirTemperature:"متوسط درجة حرارة الهواء",maxRelativeHumidity:"الحد الأقصى للرطوبة النسبية",maxAltitude:"الحد الأقصى لخط الارتفاع",meterologicalConditions:"شروط الأرصاد"},MI_Event:{identifier:"مُعرّف الحدث",time:"الوقت",expectedObjectiveReference:"الهدف المتوقع (مُعرّف الهدف)",relatedSensorReference:"الحساس المرتبط (مُعرّف الأداة)",relatedPassReference:"المرحلة المرتبطة (مُعرف مرحلة النظام الأساسي)"},MI_GeometryTypeCode:{point:"نقطة",linear:"خطي",areal:"منطقة",strip:"سلسلة"},MI_Instrument:{citation:"اقتباس الأداة",identifier:"مُعرّف الأداة",sType:"نوع الأداة",description:"وصف الأداة",mountedOn:"مُحمّل في",mountedOnPlatformReference:"مُحمّل في (مُعرّف النظام الأساسي)"},MI_Metadata:{acquisitionInformation:"الامتلاك"},MI_Objective:{caption:"الهدف",identifier:"مُعرّف الهدف",priority:"أولوية الهدف",sFunction:"وظيفة الهدف",extent:"المدى",pass:"مرحلة النظام الأساسي",sensingInstrumentReference:"أداة التحسُّس (مُعرّف الأداة)",objectiveOccurrence:"أحداث",sections:{identification:"تعريف",extent:"المدى",pass:"تمرير",sensingInstrument:"أداة التحسُّس",objectiveOccurrence:"أحداث"}},MI_ObjectiveTypeCode:{caption:"النوع (تقنية مجموعة الهدف)",instantaneousCollection:"مجموعة لحظية",persistentView:"عرض ثابت",survey:"استطلاع"},MI_Operation:{caption:"العملية",description:"وصف العملية",citation:"اقتباس العملية",identifier:"مُعرّف العملية",status:"حالة العملية",objectiveReference:"الهدف المرتبط (مُعرّف الهدف)",planReference:"الخطة المرتبطة (مُعرّف الخطة)",significantEventReference:"الحدث المرتبط (مُعرّف الحدث)",platformReference:"النظام الأساسي المرتبط (مُعرّف النظام الأساسي)",sections:{identification:"تعريف",related:"مُرتبط"}},MI_OperationTypeCode:{caption:"نوع العملية",real:"حقيقي",simulated:"تمت محاكاته",synthesized:"تم الإنشاء"},MI_Plan:{sType:"تجربة الشكل الهندسي لبيانات المجموعة",status:"حالة الخطة",citation:"اقتباس مجموعة طلب الهيئة",satisfiedRequirementReference:"المتطلبات الكافية (مُعرّف المتطلبات)",operationReference:"العملية المرتبطة (مُعرّف العملية)"},MI_Platform:{citation:"اقتباس النظام الأساسي",identifier:"مُعرّف النظام الأساسي",description:"وصف النظام الأساسي الذي يدعم الأداة",sponsor:"راعي مؤسسة النظام الأساسي",instrument:"الأداة (الأدوات المُحمّلة على النظام الأساسي)",instrumentReference:"مُعرّف الأداة",sections:{identification:"تعريف",sponsor:"راعي",instruments:"أدوات"}},MI_PlatformPass:{identifier:"مُعرّف مرحلة النظام الأساسي",extent:"مدى مرحلة النظام الأساسي",relatedEventReference:"الحدث المرتبط (مُعرّف الحدث)"},MI_PriorityCode:{critical:"هام",highImportance:"أهمية عالية",mediumImportance:"أهمية متوسطة",lowImportance:"أهمية منخفضة"},MI_RequestedDate:{requestedDateOfCollection:"تاريخ المجموعة المطلوب",latestAcceptableDate:"أحدث تاريخ مقبول"},MI_Requirement:{caption:"المتطلبات",citation:"اقتباس مادة إرشاد المتطلبات",identifier:"مُعرّف المتطلبات",requestor:"طالب المُتطلبات",recipient:"طالب نتائج المُتطلبات",priority:"أولوية المتطلبات",requestedDate:"التاريخ المطلوب",expiryDate:"تاريخ انتهاء الصلاحية",satisifiedPlanReference:"الخطة الكافية (مُعرّف الخطة)",sections:{identification:"تعريف",requestor:"الطالب",recipient:"المُستلم",priorityAndDates:"الأولوية والتواريخ",satisifiedPlan:"الخطة الكافية"}},MI_SequenceCode:{caption:"تسلسل",start:"بدء",end:"نهاية",instantaneous:"لحظي"},MI_TriggerCode:{caption:"المُشغل",automatic:"تلقائي",manual:"يدوي",preProgrammed:"مُبرمَج مُسبقًا"},ObjectReference:{uuidref:"مرجع UUID",xlinkref:"مرجع URL"},RS_Identifier:{caption:"مساحة كود إضافي للمُعرّف",code:"الكود",codeSpace:"مساحة الكود"},SV_CouplingType:{loose:"حر",mixed:"مختلط",tight:"ضيق"},SV_OperationMetadata:{operationName:"اسم العملية",DCP:"DCP",connectPoint:"نقطة الاتصال"},SV_ServiceIdentification:{serviceType:"ServiceType",couplingType:"نوع الازدواج",containsOperations:"البيانات التعريفية للعملية",operatesOn:"تعمل على"},TM_Primitive:{indeterminatePosition:"غير معرف",indeterminates:{before:"قبل",after:"بعد",now:"الأن",unknown:"غير معروف"}},gemet:{concept:{gemetConceptKeyword:"الكلمة الأساسية لمفهوم GEMET",tool:"بحث...",dialogTitle:"GEMET - الكلمة الأساسية للمفهوم",searchLabel:"بحث:",searchTip:"البحث في GEMET"},theme:{tool:"بحث...",dialogTitle:"GEMET - إلهام موضوع البيانات"},ioerror:"يوجد خطأ في الاتصال بخدمة GEMET: {url}",searching:"جارِ البحث في GEMET...",noMatch:"لم يتم العثور على نتائج مُطابقة.",languages:{bg:"البلغارية",cs:"التشيكية",da:"الدانمركية",nl:"اللغة الهولندية",en:"الإنجليزية",et:"الإستونية",fi:"الفينيقية",fr:"الفرنسية",de:"الألمانية",el:"اللغة اليونانية",hu:"مجري",ga:"الغيلية (الأيرلندية)",it:"الإيطالية",lv:"اللاتفية",lt:"لتواني",mt:"المالطية",pl:"البولندية",pt:"البرتغالية",ro:"اللغة الرومانية",sk:"السلوفاكية",sl:"السلوفينية",es:"الإسبانية",sv:"السويدية"}}});