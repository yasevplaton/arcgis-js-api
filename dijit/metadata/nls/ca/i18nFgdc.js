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

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Cap",notComplete:"Sense completar",other:"Altres",present:"Present",unknown:"Desconegut",unpublishedMaterial:"Material no publicat"},hints:{integerGreaterThanOne:"(Introduïu un enter > 1)",integer0To100:"(Introduïu un enter de 0 a 100)"},citeinfo:{caption:"Informació de citació",origin:"Creador",pubdate:"Data de publicació",pubtime:"Hora de publicació",title:"Títol",edition:"Edició",geoform:{caption:"Formulari de presentació de dades geoespacials",atlas:"Atles",audio:"Àudio",diagram:"Diagrama",sDocument:"Document",globe:"Globus",map:"Mapa",model:"Model",multiMediaPresentation:"Presentació multimèdia",profile:"Perfil",rasterDigitalData:"Dades digitals del ràster",remoteSensingImage:"Imatge de teledetecció",section:"Secció",spreadsheet:"Full de càlcul",tabularDigitalData:"Dades digitals tabulars",vectorDigitalData:"Dades digitals vectorials",video:"Vídeo",view:"Visualitza"},serinfo:{caption:"Informació de la sèrie",sername:"Nom de la sèrie",issue:"Identificació del problema"},pubinfo:{caption:"Informació de publicació",pubplace:"Lloc de publicació",publish:"Editor"},othercit:"Altres detalls de citació",onlink:"Enllaç en línia (URL)"},cntinfo:{caption:"Informació de contacte",section:{primary:"Principal",phoneAndEmail:"Telèfon i correu electrònic",hoursAndInstructions:"Hores i instruccions"},cntorgp:{caption:"Per organització",cntorg:"Organització",cntper:"Persona"},cntperp:{caption:"Per persona",cntper:"Persona",cntorg:"Organització"},cntpos:"Posició",cntaddr:{caption:"Adreça",addrtype:{caption:"Tipus d’adreça",mailing:"Correu electrònic",physical:"Física",mailingAndPhysical:"Correu electrònic i física"},address:"Adreça",city:"Ciutat",state:"Estat",postal:"Codi postal",country:"País"},cntvoice:"Veu",cnttdd:"Telèfon TDD o TTY (dificultats auditives)",cntfax:"Fax",cntemail:"Adreça electrònica",hours:"Hores",cntinst:"Instruccions"},dataqual:{caption:"Informació de la qualitat de les dades",section:{attributeAccuracy:"Precisió de l’atribut",logicalConsistency:"Coherència lògica",completeness:"Integritat",positionalAccuracy:"Precisió posicional",lineage:"Llinatge",cloudCover:"Cobertura de núvol"},attracc:{caption:"Precisió de l’atribut",attraccr:"Informe de precisió dels atributs",qattracc:{caption:"Avaluació quantitativa de la precisió d’atributs",attraccv:"Valor de la precisió de l’atribut",attracce:"Explicació de la precisió de l’atribut"}},logic:"Informe de coherència lògica",complete:"Informe de completesa",posacc:"Precisió posicional",horizpa:{caption:"Precisió posicional horitzontal",horizpar:"Informe de la precisió posicional horitzontal",qhorizpa:{caption:"Avaluació quantitativa de la precisió posicional horitzontal",horizpav:"Valor de la precisió posicional horitzontal",horizpae:"Explicació de la precisió posicional horitzontal"}},vertacc:{caption:"Precisió posicional vertical",vertaccr:"Informe de la precisió posicional vertical",qvertpa:{caption:"Avaluació quantitativa de la precisió posicional vertical",vertaccv:"Valor de la precisió posicional vertical",vertacce:"Explicació de la precisió posicional vertical"}},lineage:{caption:"Llinatge"},srcinfo:{caption:"Informació de l’origen",srccite:"Citació de l’origen",srcscale:"Denominador d’escala d’origen",typesrc:{caption:"Tipus de mitjà d’origen",paper:"Paper",stableBaseMaterial:"Material de base estable",microfiche:"Microfitxa",microfilm:"Microfilm",audiocassette:"Casset d’àudio",chart:"Gràfic",filmstrip:"Banda de pel·lícula",transparency:"Transparència",videocassette:"Casset de vídeo",videodisc:"Disc de vídeo",videotape:"Cinta de vídeo",physicalModel:"Model físic",computerProgram:"Programa d’ordinador",disc:"Disc",cartridgeTape:"Cinta de cartutx",magneticTape:"Cinta magnètica",online:"En línia",cdrom:"CD-ROM",electronicBulletinBoard:"Tauler d’anuncis electrònics",electronicMailSystem:"Sistema de correu electrònic"},srctime:"Període de temps del contingut d’origen",srccurr:"Referència d’actualitat de l’origen",srccitea:"Abreviatura de la citació de l’origen",srccontr:"Contribució de l’origen"},procstep:{caption:"Pas de procés",procdesc:"Descripció del procés",srcused:"Abreviatura de la citació de l’origen que s’ha fet servir",procdate:"Data del procés",proctime:"Hora del procés",srcprod:"Abreviatura de la citació de l’origen que s’ha produït",proccont:"Contacte del procés"},cloud:"Cobertura del núvol"},distinfo:{caption:"Informació de distribució",section:{distributor:"Distribuïdor",description:"Descripció",orderProcess:"Procés d’ordre",prerequisites:"Requisits previs",availability:"Disponibilitat"},distrib:"Distribuïdor",resdesc:{caption:"Descripció del recurs",liveData:"Mapes i dades en viu",downloadableData:"Dades que es poden baixar",offlineData:"Dades fora de línia",staticMapImages:"Imatges de mapa estàtiques",sDocument:"Altres documents",application:"Aplicacions",geographicService:"Serveis geogràfics",clearingHouse:"Catàlegs de dades",mapFiles:"Fitxers de mapes",geographicActivies:"Activitats geogràfiques"},distliab:"Declaració de responsabilitat de distribució",custom:"Procés d’ordre personalitzat",techpreq:"Requisits tècnics previs",availabl:"Disponibilitat"},eainfo:{caption:"Informació d’entitats i atributs",overview:"Descripció general",eaover:"Descripció general d’entitats i atributs",eadetcit:"Citació de detalls d’entitats i atributs"},idinfo:{caption:"Informació d’identificació",section:{timeAndStatus:"Temps i estat",constraints:"Restriccions",contact:"Contacte",additional:"Addicional"},citeinfo:"Citació",descript:{caption:"Descripció",sAbstract:"Resum",purpose:"Propòsit",supplinf:"Informació complementària"},timeperd:{caption:"Període de temps del contingut",current:{caption:"Referència d’actualitat",groundCondition:"Condició base",publicationDate:"Data de publicació"}},status:{caption:"Estat",progress:{caption:"Progrés",complete:"Completat",inWork:"En curs",planned:"Planificat"},update:{caption:"Freqüència de manteniment i actualització",continual:"Contínua",daily:"Diària",weekly:"Setmanal",monthly:"Mensual",annually:"Anual",unknown:"Desconeguda",asNeeded:"Segons sigui necessari",irregular:"Irregular",nonePlanned:"Sense planificar"}},spdom:{caption:"Extensió",bounding:{caption:"Coordenades de delimitació",westbc:"Longitud de delimitació cap a l’oest",eastbc:"Longitud de delimitació cap a l’est",northbc:"Latitud de delimitació cap al nord",southbc:"Latitud de delimitació cap al sud"}},keywords:{caption:"Paraules clau",theme:"Tema",place:"Lloc",stratum:"Estrat",temporal:"Temporal",thesaursus:"Diccionari associat",delimited:"Paraules clau",themektIsoTopicCategory:"Tema ISO...",themektIsoTopicDialog:"Tema ISO",placektGnis:"Sistema d’informació de noms geogràfics"},accconst:"Restriccions d’accés",useconst:"Restriccions d’ús",ptcontac:"Punt de contacte per al recurs",browse:{caption:"Examina el gràfic",browsen:"Examina la URL del gràfic",browsed:"Examina la descripció del fitxer del gràfic",browset:"Examina el tipus de fitxer del gràfic"},datacred:"Crèdit del conjunt de dades",secinfo:{caption:"Informació de seguretat",secsys:"Sistema de classificació de seguretat",secclass:{caption:"Classificació de seguretat",topSecret:"Alt secret",secret:"Secret",confidential:"Confidencial",restricted:"Restringit",unclassified:"Sense classificar",sensitive:"Sensible"},sechandl:"Descripció del tractament de la seguretat"},sNative:"Entorn del conjunt de dades nadiu",crossref:"Referència creuada"},metadata:{idinfo:"Identificació",dataqual:"Qualitat",spdoinfo:"Organització de dades espacials",spref:"Referència espacial",eainfo:"Entitat i atribut",distinfo:"Distribució",metainfo:"Metadades"},metainfo:{caption:"Informació de les metadades",section:{dates:"Dates de les metadades",contact:"Contacte de les metadades",standard:"Estàndard de les metadades",additional:"Addicional"},metd:"Data de les metadades",metrd:"Data de revisió de les metadades",metfrd:"Data de revisió futura de les metadades",metstdn:"Nom estàndard de les metadades",metstdv:"Versió estàndard de les metadades",metac:"Restriccions d’accés a les metadades",metuc:"Restriccions d’ús de les metadades",metsi:{caption:"Informació de seguretat de les metadades",metscs:"Sistema de classificació de seguretat de les metadades",metsc:"Classificació de seguretat de les metadades",metshd:"Descripció del tractament de la seguretat de les metadades"}},spref:{caption:"Informació de la referència espacial",horizsys:{caption:"Sistema de coordenades horitzontal",geograph:{caption:"Geogràfic",latres:"Resolució de latitud",longres:"Resolució de longitud",geogunit:{caption:"Unitats de coordenades geogràfiques",decimalDegrees:"Graus decimals",decimalMinutes:"Minuts decimals",decimalSeconds:"Segons decimals",degreesAndDecimalMinutes:"Graus i minuts decimals",degreesMinutesAndDecimalSeconds:"Graus, minuts i segons decimals",radians:"Radians",grads:"Graus centesimals"}},planar:{caption:"Pla"},local:{caption:"Local",localdes:"Descripció local",localgeo:"Informació de referència geogràfica local"},geodetic:{caption:"Model geodèsic",horizdn:{caption:"Nom del dàtum horitzontal",nad83:"Dàtum nord-americà del 1983",nad27:"Dàtum nord-americà del 1927"},ellips:{caption:"Nom de l’el·lipsoide",grs80:"Sistema de referència geodèsica 80",clarke1866:"Clarke 1866"},semiaxis:"Semieix major",denflat:"Denominador de l’índex d’aplanament"}},vertdef:{caption:"Sistema de coordenades vertical",altsys:{caption:"Sistema d’altitud",altdatum:{caption:"Nom del dàtum d’altitud",navd88:"Dàtum vertical nord-americà del 1988",ngvd29:"Dàtum vertical geodèsic nacional del 1929"},altres:"Resolució de l’altitud",altunits:{caption:"Unitats de distància de l’altitud",meters:"Metres",feet:"Peus"},altenc:{caption:"Mètode de codificació de l’altitud",explicit:"Coordenada d’elevació explícita inclosa amb les coordenades horitzontals",implicit:"Coordenada implícita",attribute:"Valors d’atributs"}},depthsys:{caption:"Sistema de profunditat",depthdn:{caption:"Nom del dàtum de profunditat",option1:"Superfície local",option2:"Dàtum de carta; dàtum per a la reducció del sondatge",option3:"Marea astronòmica més baixa",option4:"Marea astronòmica més alta",option5:"Baixamar mitjana",option6:"Plenamar mitjana",option7:"Nivell mitjà de la mar",option8:"Dàtum topogràfic de terra",option9:"Fonts de baixamar mitjana",option10:"Fonts de plenamar mitjana",option11:"Baixamar morta mitjana",option12:"Plenamar morta mitjana",option13:"Baixamar baixa mitjana",option14:"Fonts de baixamar baixa mitjana",option15:"Plenamar alta mitjana",option16:"Baixamar alta mitjana",option17:"Plenamar baixa mitjana",option18:"Marea viva",option19:"Baixamar baixa tropical",option20:"Marea morta",option21:"Plenamar",option22:"Plenamar alta",option23:"Baixamar",option24:"Dàtum de baixamar",option25:"Baixamar més baixa",option26:"Baixamar baixa",option27:"Baixamar normal més baixa",option28:"Nivell mitjà de marea",option29:"Baixamar viva índica",option30:"Plenamar completa i càrrega",option31:"Baixamar completa i càrrega",option32:"Dàtum del riu Columbia",option33:"Dàtum de baixamar de la costa del Golf",option34:"Baixamar de fonts equatorials",option35:"Marea astronòmica més baixa aproximada",option36:"Sense correcció"},depthres:"Resolució de la profunditat",depthdu:{caption:"Unitats de distància de la profunditat",meters:"Metres",feet:"Peus"},depthem:{caption:"Mètode de codificació de la profunditat",explicit:"Coordenada de profunditat explícita inclosa amb les coordenades horitzontals",implicit:"Coordenada implícita",attribute:"Valors d’atributs"}}}},timeinfo:{caption:"Informació del període de temps",sngdate:"Data única",mdattim:"Diverses dates",rngdates:"Interval de dades",caldate:"Data",time:"Hora",begdate:"Data d’inici",begtime:"Hora d’inici",enddate:"Data de finalització",endtime:"Hora de finalització"}});