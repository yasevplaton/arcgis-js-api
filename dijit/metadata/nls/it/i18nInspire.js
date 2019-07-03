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

define({documentTypes:{data:{caption:"INSPIRE (Dati)",description:""},service:{caption:"INSPIRE (Servizio)",description:""}},dataThemeKeywords:{caption:"Temi di dati Inspire"},inspireServiceType:{discovery:"Servizio di ricerca",view:"Visualizza servizio",download:"Scarica servizio",transformation:"Servizio di trasformazione",invoke:"Richiama servizio",other:"Altro servizio"},keywordSections:{dataTheme:"Temi di dati Inspire",serviceCategory:"Categoria di servizio ISO 19119",gemetConcept:"Concetto GEMET",otherKeywords:"Altre parole chiave"},LanguageCode:{bul:"Bulgaro",cze:"Ceco",dan:"Danese",dut:"Olandese",eng:"Inglese",est:"Estone",fin:"Finlandese",fre:"Francese",ger:"Tedesco",gre:"Greco",hun:"Ungherese",gle:"Gaelico (irlandese)",ita:"Italiano",lav:"Lettone",lit:"Lituano",mlt:"Maltese",pol:"Polacco",por:"Portoghese",rum:"Rumeno",slo:"Slovacco",slv:"Sloveno",spa:"Spagnolo",swe:"Svedese",chi:"Cinese",kor:"Coreano",nor:"Norvegese",rus:"Russo",tur:"Turco"},otherConstraints:{noLimitations:"Nessuna limitazione",confidentialityOfProceedings:"La riservatezza delle deliberazioni delle autorità pubbliche...",internationalRelations:"Relazioni internazionali, pubblica sicurezza o difesa nazionale",courseOfJustice:"Il corso della giustizia, il diritto di ogni persona ad un processo equo...",confidentialityOfCommercial:"La riservatezza delle informazioni commerciali o industriali...",intellectualProperty:"Diritti di proprietà intellettuale",confidentialityOfPersonalData:"La riservatezza dei dati e/o dei fascicoli personali...",interestsOrProtection:"Gli interessi o la protezione di chiunque abbia fornito le informazioni richieste...",protectionOfEnvironment:"La tutela dell'ambiente cui si riferisce l'informazione...",freeText:"Testo libero"},serviceType:{humanInteractionService:"100 Servizi di interazione geografica umana",humanCatalogueViewer:"101 Visualizzatore del catalogo",humanGeographicViewer:"102 Visualizzatore geografico",humanGeographicSpreadsheetViewer:"103 Visualizzatore del foglio di calcolo geografico",humanServiceEditor:"104 Editor servizio",humanChainDefinitionEditor:"105 Editor di definizione della catena",humanWorkflowEnactmentManager:"106 Amministratore di esecuzione del workflow",humanGeographicFeatureEditor:"107 Editor delle feature geografiche",humanGeographicSymbolEditor:"108 Editor dei simboli geografici ",humanFeatureGeneralizationEditor:"109 Editor di generalizzazione delle feature",humanGeographicDataStructureViewer:"110 Visualizzatore della struttura dei dati geografici",infoManagementService:"200 Servizio di gestione informazioni/modelli geografici",infoFeatureAccessService:"201 Servizio di accesso alle feature",infoMapAccessService:"202 Servizio di accesso alle mappe",infoCoverageAccessService:"203 Servizio di accesso alla copertura",infoSensorDescriptionService:"204 Servizio di descrizione del sensore",infoProductAccessService:"205 Servizio di accesso al prodotto",infoFeatureTypeService:"206 Servizio del tipo di feature",infoCatalogueService:"207 Servizio del catalogo",infoRegistryService:"208 Servizio del registro",infoGazetteerService:"209 Servizio del dizionario geografico",infoOrderHandlingService:"210 Servizio di gestione dell'ordine",infoStandingOrderService:"211 Servizio di ordini fissi",taskManagementService:"300 Servizio di gestione attività/workflow geografici",chainDefinitionService:"301 Servizio di definizione della catena",workflowEnactmentService:"302 Servizio di esecuzione del workflow",subscriptionService:"303 Servizio di abbonamento",spatialProcessingService:"400 Servizi di elaborazione geografica - spaziale",spatialCoordinateConversionService:"401 Servizio di conversione delle coordinate",spatialCoordinateTransformationService:"402 Servizio di trasformazione delle coordinate",spatialCoverageVectorConversionService:"403 Servizio di conversione di coperture/vettori",spatialImageCoordinateConversionService:"404 Servizio di conversione di coordinate dell'immagine",spatialRectificationService:"405 Servizio di rettificazione",spatialOrthorectificationService:"406 Servizio di ortorettificazione",spatialSensorGeometryModelAdjustmentService:"407 Servizio di regolazione del modello di geometria del sensore",spatialImageGeometryModelConversionService:"408 Servizio di conversione del modello di geometria dell'immagine",spatialSubsettingService:"409 Servizio di sottoinsieme",spatialSamplingService:"410 Servizio di campionamento",spatialTilingChangeService:"411 Servizio di modica dell'inclinazione",spatialDimensionMeasurementService:"412 Servizio di misurazione della dimensione",spatialFeatureManipulationService:"413 Servizi di manipolazione delle feature",spatialFeatureMatchingService:"414 Servizio di corrispondenza delle feature",spatialFeatureGeneralizationService:"415 Servizio di generalizzazione delle feature",spatialRouteDeterminationService:"416 Servizio di determinazione dell'itinerario",spatialPositioningService:"417 Servizio di rilevamento posizione",spatialProximityAnalysisService:"418 Servizio di analisi di prossimità",thematicProcessingService:"500 Servizi di elaborazione geografica - tematica",thematicGoparameterCalculationService:"501 Servizio di calcolo dei parametri geografici",thematicClassificationService:"502 Servizio di classificazione tematica",thematicFeatureGeneralizationService:"503 Servizio di generalizzazione delle feature",thematicSubsettingService:"504 Servizio di sottoinsieme",thematicSpatialCountingService:"505 Servizio di conteggio spaziale",thematicChangeDetectionService:"506 Servizio di rilevamento delle modifiche",thematicGeographicInformationExtractionService:"507 Servizi di estrazione delle informazioni geografiche",thematicImageProcessingService:"508 Servizio di elaborazione delle immagini",thematicReducedResolutionGenerationService:"509 Servizio di generazione di risoluzione ridotta",thematicImageManipulationService:"510 Servizi di manipolazione delle immagini",thematicImageUnderstandingService:"511 Servizi di conoscenza delle immagini",thematicImageSynthesisService:"512 Servizi di sintesi delle immagini",thematicMultibandImageManipulationService:"513 Manipolazione di immagini multibanda",thematicObjectDetectionService:"514 Servizio di rilevamento dell'oggetto",thematicGeoparsingService:"515 Servizio di analisi geografica",thematicGeocodingService:"516 Servizio di geocodifica",temporalProcessingService:"600 Servizi di elaborazione geografica - temporale",temporalReferenceSystemTransformationService:"601 Servizio di trasformazione del sistema di riferimento temporale",temporalSubsettingService:"602 Servizio di sottoinsieme",temporalSamplingService:"603 Servizio di campionamento",temporalProximityAnalysisService:"604 Servizio di analisi di prossimità temporale",metadataProcessingService:"700 Servizi di elaborazione geografica - metadati",metadataStatisticalCalculationService:"701 Servizio di calcolo statistico",metadataGeographicAnnotationService:"702 Servizi di annotazione geografica",comService:"800 Servizi di comunicazione geografica",comEncodingService:"801 Servizio di codifica",comTransferService:"802 Servizio di trasferimento",comGeographicCompressionService:"803 Servizio di compressione geografica",comGeographicFormatConversionService:"804 Servizio di conversione del formato geografico",comMessagingService:"805 Servizio di messaggistica",comRemoteFileAndExecutableManagement:"806 Gestione di file remoti ed eseguibili"},useLimitation:{noCondition:"Nessuna condizione applicata",unknownCondition:"Condizioni sconosciute",freeText:"Testo libero"}});