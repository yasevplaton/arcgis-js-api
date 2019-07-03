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

define({general:{cancel:"إلغاء الأمر",close:"إغلاق",none:"لا شيء",ok:"موافق",other:"آخر",stamp:"طابع",now:"الأن",choose:"اختر واحدة:"},editor:{noMetadata:"لا توجد بيانات تعريفية لهذا العنصر.",xmlViewOnly:"نوع البيانات التعريفية المقترنة بهذا العنصر غير مدعوم من قِبل المحرر. يجب أن تكون البيانات التعريفية بتنسيق ArcGIS.",editorDialog:{caption:"الوصفية",captionPattern:"البيانات التعريفية لـ {title}"},primaryToolbar:{view:"عرض",viewXml:"إظهار XML",edit:"تحرير",initializing:"جارِ التحميل...",startingEditor:"جارِ بدء تشغيل المحرر...",loadingDocument:"جارِ تحميل المستند...",updatingDocument:"جارِ تحديث المستند...",generatingView:"جارِ إنتاج العرض...",errors:{errorGeneratingView:"حدث خطأ أثناء إنتاج هذا العرض.",errorLoadingDocument:"حدث خطأ أثناء تحميل المستند."}},changesNotSaved:{prompt:"للمستند الخاص بك تغييرات لم يتم حفظها.",dialogTitle:"أغلق محرر البيانات التعريفية",closeButton:"إغلاق"},download:{caption:"تنزيل",dialogTitle:"تنزيل",prompt:"انقر هنا لتنزيل الملف."},load:{caption:"فتح",dialogTitle:"فتح",typeTab:"مستند جديد",fileTab:"فتح ملف",templateTab:"قالب",itemTab:"العنصر",filePrompt:"حدد ملف ArcGIS Metadata XML محلي. يجب أن تكون البيانات التعريفية في تنسيق ArcGIS.",templatePrompt:"إنشاء البيانات التعريفية",pullItem:"تسكين البيانات التعريفية مع تفاصيل العنصر.",importWarning:"لا يظهر الملف المحدد بتنسيق ArcGIS. يجب أن تكون البيانات التعريفية المُحمّلة بتنسيق ArcGIS.",loading:"جارِ التحميل...",noMetadata:"يُمكن إنشاء البيانات التعريفية لهذا العنصر بواسطة اختيار أحد الخيارات التالية.",unrecognizedMetadata:"نوع البيانات التعريفية المقترنة بهذا العنصر غير مدعوم من قِبل المحرر. يُمكن إنشاء البيانات التعريفية المدعومة بواسطة اختيار أحد الخيارات التالية.",errorLoading:"حدث خطأ أثناء تحميل الخطأ.",warnings:{badFile:"يتعذر تحميل الملف المحدد.",notAnXml:"الملف المحدد ليس ملف XML.",notSupported:"هذا النوع من الملفات غير مدعوم."},portalCaption:"استبدال"},save:{caption:"حفظ",dialogTitle:"حفظ البيانات التعريفية",working:"جارِ حفظ البيانات التعريفية...",errorSaving:"حدث خطأ، لم يتم حفظ البيانات التعريفية.",saveDialog:{pushCaption:"قم بتطبيق التغييرات على العنصر."}},saveAndClose:{caption:"حفظ & إغلاق"},saveDraft:{caption:"تنزيل",dialogTitle:"تنزيل"},validate:{caption:"تدقيق",dialogTitle:"تحقق من الصحة",docIsValid:"المستند صالح."},viewHtml:{caption:"عرض",dialogTitle:"عرض البيانات التّعريفية",savePrompt:"الوثيقة الخاصة بك لديها تغييرات لم يتم حفظها. يجب عليك حفظ أي تغييرات لرؤيتها عند عرض البيانات الوصفية.",saveButton:"حفظ وعرض",portalNone:"لم يتم تأليف البيانات الوصفية المستندة إلى المعايير. يجب عليك الحفظ أولاً قبل عرض البيانات الوصفية."},del:{caption:"حذف",dialogTitle:"حذف البيانات التعريفية",prompt:"هل أنت متأكد من رغبتك في حذف البيانات التعريفية؟",working:"جارِ حذف البيانات التعريفية...",errorDeleting:"حدث خطأ، لم يتم مسح البيانات التعريفية.",portalNone:"لا تتوفر وثيقة البيانات الوصفية لحذفها. لم يتم تأليف البيانات الوصفية المستندة إلى المعايير.",portalPrompt:"هذا سيقوم بحذف وثيقة البيانات الوصفية وإعادة تعيين هذه البيانات الوصفية الخاصة بالعنصر إلى معلومات العنصر مثل العنوان، الوصف، ما إلى ذلك.",portalPrompt2:"يقوم ذلك بحذف البيانات التعريفية التي تعتمد على المعايير. هل أنت متأكد من رغبتك في حذف البيانات التعريفية؟",portalButton:"حذف وأغلاق"},transform:{caption:"تحويل",dialogTitle:"التحويل إلى",prompt:"",working:"جارِ التحويل...",errorTransforming:"حدث خطأ أثناء تحويل المستند."},errorDialog:{dialogTitle:"يوجد خطأ"}},arcgis:{portal:{metadataButton:{caption:"الوصفية"}}},calendar:{button:"التقويم...",title:"التقويم"},geoExtent:{button:"جارِ تعيين النطاق الجغرافي...",title:"النطاق الجغرافي",navigate:"تنقل",draw:"ارسم مستطيل",drawHint:"اضغط لأسفل للبدء وانتقل للإنهاء."},hints:{date:"(yyyy أو yyyy-mm أو yyyy-mm-dd)",dateTime:"(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(yyyy أو yyyy-mm أو yyyy-mm-dd أو yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(استخدم فاصلة أو خط جديد للفصل)",fgdcDate:"(yyyy أو yyyy-mm أو yyyy-mm-dd)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(أدخل عدد صحيح)",latitude:"(درجات عشرية)",longitude:"(درجات عشرية)",number:"(أدخل رقم)",numberGreaterThanZero:"(أدخل رقم > 0)"},isoTopicCategoryCode:{caption:"فئة موضوع",boundaries:"حدود إدارية وسياسية",farming:"زراعة وفلاحة",climatologyMeteorologyAtmosphere:"الغلاف الجوي والمناخ",biota:"الأحياء وعلم البيئة",economy:"الأعمال والاقتصاد",planningCadastre:"مساحي",society:"ثقافي ومجتمعي وسكاني",elevation:"ارتفاع ومنتجات مشتقة",environment:"بيئة ومحادثة",structure:"مرافق وهياكل",geoscientificInformation:"جيولوجي وجيوفيزيائي",health:"الصحة البشرية والأمراض",imageryBaseMapsEarthCover:"التصور وخرائط الأساس",inlandWaters:"الموارد المائية",location:"المواقع والشبكات الجيوديسية",intelligenceMilitary:"عسكري",oceans:"المحيطات ومصبات الأنهار",transportation:"شبكات النقل",utilitiesCommunication:"الأدوات المساعدة لسطر أوامر"},multiplicity:{moveElementDown:"تحريك القسم لأسفل",moveElementUp:"تحريك القسم لأعلى",removeElement:"إزالة القسم",repeatElement:"تكرار القسم"},optionalNode:{switchTip:"تضمين القسم أو استبعاده."},serviceTypes:{featureService:"خدمة المعالم",mapService:"خدمة الخريطة",imageService:"خدمة الصورة",wms:"خدمات خرائط الويب WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"موافق",empty:"القيمة مطلوبة.",date:"يجب أن تكون القيمة تاريخ.",integer:"يجب أن تكون القيمة عدد صحيح.",number:"يجب أن تكون القيمة رقم.",other:"القيمة غير صالحة."},validationPane:{clearMessages:"مسح الرسائل",prompt:"(انقر على كل رسالة أدناه وقدّم المعلومات اللازمة في الحقل المحدد)"}});