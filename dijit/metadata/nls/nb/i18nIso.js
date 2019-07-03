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

define({documentTypes:{data:{caption:"ISO 19115 (Data)",description:""},service:{caption:"ISO 19119 (Tjeneste)",description:""},gmi:{caption:"ISO 19115-2 (Bilder og rutenettdata)",description:""}},general:{reference:"Referanse"},sections:{metadata:"Metadata",identification:"Identifikasjon",distribution:"Distribusjon",quality:"Kvalitet",acquisition:"Oppkjøp"},metadataSection:{identifier:"Identifikator",contact:"Kontakt",date:"Dato",standard:"Standard",reference:"Referanse"},identificationSection:{citation:"Sitering",description:"Beskrivelse",contact:"Kontakt",thumbnail:"Miniatyrbilde",keywords:"Nøkkelord",constraints:"Begrensninger",resource:"Ressurs",resourceTab:{representation:"Representasjon",language:"Språk",classification:"Klassifisering",extent:"Omfang"},serviceResourceTab:{serviceType:"Tjenestetype",extent:"Omfang",couplingType:"Koblingstype",operation:"Operasjon",operatesOn:"Opereres ved"}},distributionSection:{},qualitySection:{scope:"Omfang",conformance:"Oversensstemmelse",lineage:"Slektskap"},acquisitionSection:{requirement:"Krav",objective:"Mål",instrument:"Instrument",plan:"Abonnement",operation:"Operasjon",platform:"Plattform",environment:"Miljø"},AbstractMD_Identification:{sAbstract:"Sammendrag",purpose:"Formål",credit:"Credits",pointOfContact:"Kontaktpunkt",resourceMaintenance:"Vedlikehold",graphicOverview:"Grafisk oversikt",descriptiveKeywords:"Nøkkelordinnsamling",resourceConstraints:"Begrensninger"},CI_Address:{deliveryPoint:"Leveringspunkt",city:"By",administrativeArea:"Administrativt område",postalCode:"Postnummer",country:"Land",electronicMailAddress:"E-postadresse"},CI_Citation:{title:"Tittel",alternateTitle:"Alternativ tittel",identifier:"Unik ressursidentifikator",resource:{title:"Ressurstittel",date:"Ressursdato"},specification:{title:"Spesifikasjonstittel",date:"Spesifikasjonsdato"}},CI_Contact:{phone:"Telefon",address:"Adresse",onlineResource:"Tilkoblet ressurs",hoursOfService:"Tjenestetimer",contactInstructions:"Kontaktinstruksjoner"},CI_Date:{date:"Dato",dateType:"Datotype"},CI_DateTypeCode:{caption:"Datotype",creation:"Opprettelsesdato",publication:"Publiseringsdato",revision:"Revisjonsdato"},CI_OnLineFunctionCode:{caption:"Funksjon",download:"Last ned",information:"Informasjon",offlineAccess:"Frakoblet tilgang",order:"Rekkefølge",search:"Søke"},CI_OnlineResource:{caption:"Tilkoblet ressurs",linkage:"URL",protocol:"Protokoll",applicationProfile:"Applikasjonsprofil",name:"Navn",description:"Beskrivelse",sFunction:"Funksjon"},CI_ResponsibleParty:{caption:"Kontaktpunkt",individualName:"Individnavn",organisationName:"Organisasjonens navn",positionName:"Stillingsnavn",contactInfo:"Kontaktinfo",role:"Rolle"},CI_RoleCode:{caption:"Rolle",resourceProvider:"Ressursleverandør",custodian:"Formynder",owner:"Eier",user:"Bruker",distributor:"Distributør",originator:"Opprinnelse",pointOfContact:"Kontaktpunkt",principalInvestigator:"Hovedundersøker",processor:"Prosessor",publisher:"Utgiver",author:"Forfatter"},CI_Telephone:{voice:"Tale",facsimile:"Faks"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"Nettjenester"},DQ_ConformanceResult:{caption:"Oversensstemmelsesresultat",explanation:"Forklaring",degree:{caption:"Grad",validationPerformed:"Validering utført",conformant:"Oversensstemmer",nonConformant:"Oversensstemmer ikke"}},DQ_DataQuality:{report:"Rapport"},DQ_Scope:{level:"Omfang (kvalitetsinformasjon gjelder for)",levelDescription:"Nivåbeskrivelse"},EX_Extent:{caption:"Omfang",description:"Beskrivelse",geographicElement:"Geografisk omfang",temporalElement:"Tidsbestemt omfang",verticalElement:"Loddrett utstrekning"},EX_GeographicBoundingBox:{westBoundLongitude:"Vestgående lengdegrad",eastBoundLongitude:"Østgående lengdegrad",southBoundLatitude:"Sørgående breddegrad",northBoundLatitude:"Nordgående breddegrad"},EX_GeographicDescription:{caption:"Geografisk beskrivelse"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Startdato",endPosition:"Sluttdato"}},EX_VerticalExtent:{minimumValue:"Minimumsverdi",maximumValue:"Maksimumsverdi",verticalCRS:"Vertikal CRS"},Length:{caption:"Lengde",uom:"Måleenheter",km:"kilometer",m:"meter",mi:"Miles",ft:"fot"},LI_Lineage:{statement:"Slektskapserklæring"},MD_BrowseGraphic:{fileName:"Bla igjennom grafikk-URL",fileDescription:"Bla igjennom grafikkundertekst",fileType:"Bla igjennom grafikktype"},MD_ClassificationCode:{unclassified:"Ubegrenset",restricted:"Begrenset",confidential:"Konfidensielt",secret:"Hemmelig",topSecret:"Strengt hemmelig"},MD_Constraints:{caption:"Brukerbegrensninger",useLimitation:"Bruksbegrensning"},MD_DataIdentification:{spatialRepresentationType:"Geografisk representasjonstype",spatialResolution:"Geografisk oppløsning",language:"Ressursspråk",supplementalInformation:"Tillegg"},MD_DigitalTransferOptions:{onLine:"Online"},MD_Distribution:{distributionFormat:"Distribusjonsformat",transferOptions:"Overfør alternativer"},MD_Format:{name:"Formatnavn",version:"Formatversjon"},MD_Identifier:{caption:"URI",identifierCaption:"Identifikator",code:"Kode"},MD_Keywords:{delimitedCaption:"Nøkkelord",thesaurusName:"Tilknyttet synonymordbok"},MD_KeywordTypeCode:{caption:"Nøkkelordtype",discipline:"Disiplin",place:"sted",stratum:"Stratum",temporal:"Tidsbestemt",theme:"Tema"},MD_LegalConstraints:{caption:"Juridiske begrensninger",accessConstraints:"Tilgangsbegrensninger",useConstraints:"Brukerbegrensninger",otherConstraints:"Andre begrensninger"},MD_MaintenanceFrequencyCode:{caption:"Frekvens",continual:"Kontinuerlig",daily:"Daglig",weekly:"Ukentlig",fortnightly:"Hver fjortende dag",monthly:"Månedlig",quarterly:"Kvartalsvis",biannually:"To ganger i året",annually:"Årlig",asNeeded:"Etter behov",irregular:"Uregelmessig",notPlanned:"Ikke planlagt",unknown:"Ukjent"},MD_Metadata:{caption:"Metadata",fileIdentifier:"Filidentifikator",language:"Metadataspråk",hierarchyLevel:"Hierarkinivå",hierarchyLevelName:"Hierarkinivånavn",contact:"Metadatakontakt",dateStamp:"Metadatadato",metadataStandardName:"Metadatastandardnavn",metadataStandardVersion:"Metadatastandardversjon",referenceSystemInfo:"Referansesystem",identificationInfo:"Identifikasjon",distributionInfo:"Distribusjon",dataQualityInfo:"Kvalitet"},MD_ProgressCode:{caption:"Fremdriftskode",completed:"Fullført",historicalArchive:"Historisk arkiv",obsolete:"Foreldet",onGoing:"Pågående",planned:"Planlagt",required:"Obligatorisk",underDevelopment:"Under utvikling"},MD_RepresentativeFraction:{denominator:"Nevner"},MD_Resolution:{equivalentScale:"Tilsvarende målestokk",distance:"Avstand"},MD_RestrictionCode:{copyright:"Opphavsrett",patent:"Patent",patentPending:"Patentsøkt",trademark:"Varemerke",license:"Lisens",intellectualPropertyRights:"Immaterielle rettigheter",restricted:"Begrenset",otherRestrictions:"Andre begrensninger"},MD_ScopeCode:{attribute:"Attributt",attributeType:"Attributt-type",collectionHardware:"Innhentingsmaskinvare",collectionSession:"Innhentingsøkt",dataset:"Datasett",series:"Serie",nonGeographicDataset:"Ikke-geografisk datasett",dimensionGroup:"Dimensjongruppe",feature:"Geoobjekt",featureType:"Geoobjektstype",propertyType:"Egenskapstype",fieldSession:"Feltøkt",software:"Programvare",service:"Tjeneste",model:"Modell",tile:"Flis"},MD_ScopeDescription:{attributes:"Attributter",features:"features",featureInstances:"Geoobjektforekomster",attributeInstances:"Attributtforekomster",dataset:"Datasett",other:"Annet"},MD_SecurityConstraints:{caption:"Sikkerhetsbegrensninger",classification:"Klassifisering",userNote:"Brukermerknad",classificationSystem:"Klassifiseringssystemer",handlingDescription:"Håndteringsbeskrivelse"},MD_SpatialRepresentationTypeCode:{caption:"Geografisk representasjonstype",vector:"Vektor",grid:"Rutenett",textTable:"Teksttabell",tin:"TIN",stereoModel:"Stereomodell",video:"Video"},MD_TopicCategoryCode:{caption:"Emnekategori",boundaries:"Administrative og politiske grenser",farming:"Landbruk og gårdsdrift",climatologyMeteorologyAtmosphere:"Atmosfære og klima",biota:"Biologi og økologi",economy:"Næringsliv og økonomi",planningCadastre:"Matrikkel",society:"Kultur, samfunn og demografi",elevation:"Høyde og avledede produkter",environment:"Miljø og naturforvaltning",structure:"Fasiliteter og konstruksjoner",geoscientificInformation:"Geologisk og geofysisk",health:"Human helse og sykdom",imageryBaseMapsEarthCover:"Bilde- og bakgrunnskart",inlandWaters:"Innlands vannressurser",location:"Lokasjoner og geodetiske nettverk",intelligenceMilitary:"Militært",oceans:"Hav og elvemunninger",transportation:"Transportnettverk",utilitiesCommunication:"Forsyningsverk og kommunikasjon"},MI_ContextCode:{caption:"Kontekst",acquisition:"Oppkjøp",pass:"Pass",wayPoint:"Veipunkt"},MI_EnvironmentalRecord:{caption:"Miljømessige forhold",averageAirTemperature:"Gjennomsnittlig lufttemperatur",maxRelativeHumidity:"Maksimal relativ fuktighet",maxAltitude:"Maksimal høyde over havet",meterologicalConditions:"Meteorologiske forhold"},MI_Event:{identifier:"Hendelsesidentifikator",time:"Tid",expectedObjectiveReference:"Forventet mål (målidentifikator)",relatedSensorReference:"Relatert sensor (instrumentidentifikator)",relatedPassReference:"Relatert pass (plattformpassidentifikator)"},MI_GeometryTypeCode:{point:"Punkt",linear:"Lineær",areal:"Areal",strip:"Stripe"},MI_Instrument:{citation:"Instrumentsitering",identifier:"Instrumentidentifikator",sType:"Instrumenttype",description:"Instrumentbeskrivelse",mountedOn:"Montert på",mountedOnPlatformReference:"Montert på (plattformidentifikator"},MI_Metadata:{acquisitionInformation:"Oppkjøp"},MI_Objective:{caption:"Mål",identifier:"Målidentifikator",priority:"Målprioritet",sFunction:"Målets funksjon",extent:"Omfang",pass:"Plattformpass",sensingInstrumentReference:"Følerinstrument (instrumentidentifikator)",objectiveOccurrence:"Hendelser",sections:{identification:"Identifikasjon",extent:"Omfang",pass:"Pass",sensingInstrument:"Følerinstrument",objectiveOccurrence:"Hendelser"}},MI_ObjectiveTypeCode:{caption:"Type (innsamlingsteknikk for mål)",instantaneousCollection:"Umiddelbar innsamling",persistentView:"Vedvarende visning",survey:"Inspeksjon"},MI_Operation:{caption:"Operasjon",description:"Operasjonsbeskrivelse",citation:"Operasjonssitering",identifier:"Operasjonsidentifikator",status:"Operasjonsstatus",objectiveReference:"Relatert mål (målidentifikator)",planReference:"Relatert plan (planidentifikator)",significantEventReference:"Relatert hendelse (hendelsesidentifikator)",platformReference:"Relatert plattform (plattformidentifikator)",sections:{identification:"Identifikasjon",related:"Relatert"}},MI_OperationTypeCode:{caption:"Operasjonstype",real:"Ekte",simulated:"Simulert",synthesized:"Syntetisert"},MI_Plan:{sType:"Prøvetakingsgeometri for innsamling av data",status:"Planstatus",citation:"Sitering fra myndighet som ber om innsamling",satisfiedRequirementReference:"Fornøyd krav (kravidentifikator)",operationReference:"Relatert operasjon (operasjonsidentifikator)"},MI_Platform:{citation:"Plattformsitering",identifier:"Plattformidentifikator",description:"Beskrivelse av plattformen som støtter instrumentet",sponsor:"Sponsororganisasjon for plattformen",instrument:"Instrument(er) som er montert på plattformen",instrumentReference:"Instrumentidentifikator",sections:{identification:"Identifikasjon",sponsor:"Sponsor",instruments:"Instrumenter"}},MI_PlatformPass:{identifier:"Plattformpassidentifikator",extent:"Plattformpassutstrekning",relatedEventReference:"Relatert hendelse (hendelsesidentifikator)"},MI_PriorityCode:{critical:"Kritisk",highImportance:"Høy viktighet",mediumImportance:"Middels viktighet",lowImportance:"Lav viktighet"},MI_RequestedDate:{requestedDateOfCollection:"Forespurt dato for innsamling",latestAcceptableDate:"Siste akseptable dato"},MI_Requirement:{caption:"Krav",citation:"Sitering for kravveiledningsmateriale",identifier:"Kravidentifikator",requestor:"Den som ber om kravet",recipient:"Mottaker av kravresultater",priority:"Kravprioritet",requestedDate:"Forespurt dato",expiryDate:"Utløpsdato",satisifiedPlanReference:"Godkjent plan (planidentifikator)",sections:{identification:"Identifikasjon",requestor:"Anmoder",recipient:"Mottaker",priorityAndDates:"Prioritet og datoer",satisifiedPlan:"Godkjent plan"}},MI_SequenceCode:{caption:"Sekvens",start:"Start",end:"Avslutt",instantaneous:"Umiddelbar"},MI_TriggerCode:{caption:"Utløser",automatic:"Automatisk",manual:"Manuell",preProgrammed:"Forhåndsprogrammert"},ObjectReference:{uuidref:"UUID-referanse",xlinkref:"URL-referanse"},RS_Identifier:{caption:"ID pluss kodeområde",code:"Kode",codeSpace:"Kodeområde"},SV_CouplingType:{loose:"Løs",mixed:"Blandet",tight:"Streng"},SV_OperationMetadata:{operationName:"Operasjonsnavn",DCP:"DCP",connectPoint:"Koblingspunkt"},SV_ServiceIdentification:{serviceType:"Tjenestetype",couplingType:"Koblingstype",containsOperations:"Operasjonmetadata",operatesOn:"Opereres ved"},TM_Primitive:{indeterminatePosition:"Usikker posisjon",indeterminates:{before:"Før",after:"Etter",now:"Nå",unknown:"Ukjent"}},gemet:{concept:{gemetConceptKeyword:"GEMET-konseptnøkkelord",tool:"Slå opp ...",dialogTitle:"GEMET-konseptnøkkelord",searchLabel:"Søk:",searchTip:"Søk GEMET"},theme:{tool:"Slå opp ...",dialogTitle:"GEMET - Inspire-datatema"},ioerror:"Det oppstod en feil ved kommunikasjon med GEMET-tjenesten: {url}",searching:"Søker GEMET ...",noMatch:"Fant ingen samsvarende resultater.",languages:{bg:"Bulgarsk",cs:"Tsjekkisk",da:"Dansk",nl:"Nederlandsk",en:"Engelsk",et:"Estisk",fi:"Finsk",fr:"Fransk",de:"Tysk",el:"Gresk",hu:"Ungarsk",ga:"Gælisk (irsk)",it:"Italiensk",lv:"Latvisk",lt:"Litauisk",mt:"Maltesisk",pl:"Polsk",pt:"Portugisisk",ro:"Rumensk",sk:"Slovakisk",sl:"Slovensk",es:"Spansk",sv:"Svensk"}}});