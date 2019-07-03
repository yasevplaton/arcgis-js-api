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

define({documentTypes:{arcgis:{caption:"Metadata ArcGIS",editorCaption:"Metadata",description:""}},emptyOption:"Kosong",conditionals:{ISO19139A1_ROW4:"Jika Level Hierarki Metadata adalah Dataset, Kotak Tertutup Geografis atau Deskripsi Geografis diperlukan.",ISO19139A1_ROW6:"Diperlukan Pengidentifikasi Dataset atau Nama Dataset.",ISO19139A1_ROW7:"Jika Batasan Lainnya dipilih, Batasan Lainnya diperlukan.",ISO19139A1_ROW9:"Jika Cakupan bukan Dataset atau Rangkaian, Deskripsi Level diperlukan.",ISO19139A1_ROW10_11_12:"Jika Cakupan adalah Dataset atau Rangkaian; salah satu Pernyataan, Langkah Proses, atau Sumber Data diperlukan.",ISO19139A1_ROW15:"Jika Ketersediaan Titik Cek dipilih, Deskripsi Titik Cek diperlukan.",ISO19139A1_ROW18:"Jika Distribusi mendokumentasikan Format atau Distributor/Format diperlukan.",INSPIRE_AccessLimitation:" Minimal satu kode batasan akses legal atau kode klasifikasi keamanan diperlukan. (INSPIRE)",INSPIRE_UseLimitation:" Setidaknya salah satu batasan diperlukan. (INSPIRE)",INSPIRE_ConformanceResult:"Laporan Konsistensi Domain membutuhkan Hasil Kepatuhan. (INSPIRE)",INSPIRE_DomainConsistency:"Laporan Konsistensi Domain diperlukan. (INSPIRE)",INSPIRE_LineageStatement:"Jika Cakupan adalah Dataset atau Rangkaian, Pernyataan Garis Turunan diperlukan. (INSPIRE).",FGDC_DescIfTemporal:"Deskripsi diperlukan untuk Jangkauan Temporal. (FGDC)",FGDC_Keywords:"Topik, Tag, atau Kata Sandi Tema diperlukan. (FGDC)",FGDC_Reports:"Laporan Penghilangan Kelengkapan dan Konsistensi Konseptual diperlukan. (FGDC)",FGDC_Temporal:"Setidaknya salah satu Jangkauan Temporal diperlukan. (FGDC)",NAP_Contact:"Tambah Alamat/Titik Antar, nomor Telepon/Suara atau Sumber Daya Daring/URL diperlukan. (NAP)",GEN_BoundingBox:"Setidaknya salah satu Kotak Pembatas Geographis diperlukan.",GEN_ReportResult:"Diperlukan salah satu hasil Kepatuhan atau Kuantitatif.",minLessThanMax:"Nilai Minimal harus kurang dari Nilai Maksimal."},hints:{integerGreaterThanZero:"(masukkan bilangan bulat > 0)",integerGreaterThanOne:"(masukkan bilangan bulat > 1)",integer0To100:"(masukkan bilangan bulat 0...100)",maxScale:"(masukkan bilangan bulat > 0, misal 50000)",minScale:"(masukkan bilangan bulat > 0, misal 150000000)",number0To100:"(masukkan bilangan bulat 0..100)",number0To360:"(masukkan angka 0..360)",number90To90:"(masukkan angka -90..90)",listOfDoubles:"(masukkan daftar angka, gunakan spasi untuk memisahkan)"},htmlEditor:{button:"Edit..."},sections:{overview:"Ikhtisar",esri:"Esri",resource:"Sumber Daya",reference:"Referensi",content:"Konten",distribution:"Distribusi",quality:"Kualitas",eainfo:"Kolom",representation:"Representasi",metadata:"Metadata"},metadataStyle:{caption:"Gaya Metadata ArcGIS",changeButton:"Ubah...",dialogTitle:"Pilih Gaya Metadata",updating:"Memperbarui dokumen...","Item Description":"Deskripsi Item","FGDC CSDGM Metadata":"FGDC CSDGM Metadata","ISO 19139 Metadata Implementation Specification":"ISO 19139 Spesifikasi Implementasi Metadata","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 Spesifikasi Implementasi Metadata GML3.2","INSPIRE Metadata Directive":"Arahan Metadata INSPIRE","North American Profile of ISO19115 2003":"Profil Amerika Utara ISO19115 2003"},aggrInfo:{caption:"Informasi Agregat",datasetHint:"Diperlukan Pengidentifikasi Dataset atau Nama Dataset.",aggrDSIdent:"Pengidentifikasi Dataset",aggrDSName:"Nama Dataset"},appSchInfo:{caption:"Skema Aplikasi",asName:"Nama Skema",asSchLang:"Bahasa Skema",asCstLang:"Bahasa Batasan",asAscii:"ASCII",asGraFile:"File Grafis",asGraFile_src:"Sumber File Grafis",asSwDevFile:"File Pengembangan Perangkat Lunak",asSwDevFile_src:"Sumber File Pengembangan Perangkat Lunak",asSwDevFiFt:"Format File Pengembangan Perangkat Lunak"},citation:{caption:"Kutipan",section:{titlesAndDates:"Judul & Tanggal",links:"URL",identifiers:"Pengidentifikasi",presentation:"Formulir",other:"Lainnya",edition:"Edisi",series:"Rangkaian"},conditionalDate:{caption:"Tanggal Kutipan",msg:"Tanggal Dibuat, Tanggal Publikasi atau Tanggal Revisi diperlukan.",msg_nap:"Tanggal kutipan diperlukan."},resTitle:"Judul",resAltTitle:"Judul Alternatif",collTitle:"Judul Kolektif",date:{createDate:"Tanggal Dibuat",pubDate:"Tanggal Publikasi",reviseDate:"Tanggal Revisi",notavailDate:"Tanggal Tidak Tersedia",inforceDate:"Tanggal Diberlakukan",adoptDate:"Tanggal Diadopsi",deprecDate:"Tanggal Depresiasi",supersDate:"Tanggal Penggantian"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Pengidentifikasi",identCode:"Kode",identAuth:"Kutipan Otoritas"},resEd:"Edisi",resEdDate:"Tanggal Edisi",datasetSeries:{seriesName:"Nama",issId:"Terbitan",artPage:"Halaman"},otherCitDet:"Detail Lainnya",contactCaption:"Kontak Kutipan"},cntAddress:{caption:"Alamat",delPoint:"Titik Antar",city:"Kota",adminArea:"Area Administratif",postCode:"Kode Pos",country:"Negara",eMailAdd:"Email",addressType:{caption:"Tipe Alamat",postal:"Pos",physical:"Fisik",both:"Keduanya"}},cntOnlineRes:{caption:"Sumber Daya Online",linkage:"URL",protocol:"Protokol",appProfile:"Profil Aplikasi",orName:"Nama",orDesc:"Deskripsi"},cntPhone:{caption:"Telepon",voiceNum:"Suara",faxNum:"Faks",tddtty:"TDD/TTY?"},codeRef:{caption:"Pengidentifikasi",identCode:"Kode",idCodeSpace:"Ruang Kode",idVersion:"Versi",identAuth:"Kutipan Otoritas"},constraints:{caption:"Batasan",useLimit:"Batasan Penggunaan",general:{caption:"Umum"},legal:{caption:"Legal",accessConsts:"Batasan Akses",useConsts:"Gunakan Batasan",othConsts:"Batasan Lainnya"},security:{caption:"Keamanan",classSys:"Sistem Klasifikasi",userNote:"Catatan Pengguna",handDesc:"Deskripsi Penanganan"}},contInfo:{caption:"Informasi Konten",section:{CovDesc:"Deskripsi Cakupan",ImgDesc:"Deskripsi Gambar",FetCatDesc:"Katalog Fitur"},attDesc:"Deskripsi Atribut",covDim:{caption:"Rentang atau Pita",seqID:"Pengidentifikasi Urutan",seqIDType:"Tipe Pengidentifikasi Urutan",dimDescrp:"Pendeksripsi"},RangeDim:{caption:"Dimensi Rentang"},Band:{caption:"Pita",minVal:"Nilai Minimal",maxVal:"Nilai Maksimal",valUnit:"Unit Nilai",pkResp:"Respons Puncak",bitsPerVal:"Bit per Nilai",toneGrad:"Gradasi Nasa",sclFac:"Faktor Skala",offset:"Offset"},CovDesc:{caption:"Deskripsi Cakupan",section:{description:"Deskripsi",rangesAndBands:"Rentang dan Pita"}},ImgDesc:{caption:"Deskripsi Gambar",section:{description:"Deskripsi",rangesAndBands:"Rentang dan Pita"},illElevAng:"Sudut Elevasi Iluminasi",illAziAng:"Sudut Azimut Iluminasi",cloudCovPer:"Persentase Tutup Awan",cmpGenQuan:"Kualitas Kompresi",trianInd:"Indikator Triangulasi?",radCalDatAv:"Ketersediaan Data Kalibrasi Radiometrik?",camCalInAv:"Ketersediaan Informasi Kalibrasi Kamera?",filmDistInAv:"Ketersediaan Informasi Distorsi Film?",lensDistInAv:"Ketersediaan Informasi Distorsi Lensa?",imagQuCode:"Kode Kualitas",prcTypCde:"Kode Level Pemrosesan"},FetCatDesc:{caption:"Katalog Fitur",section:{description:"Deskripsi",featureTypes:"Tipe Fitur",citation:"Kutipan"},compCode:"Sesuai Dengan ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Kutipan Katalog Fitur",catFetTyps:{caption:"Tipe Fitur",genericName:"Nama",codeSpace:"Ruang Kode"}}},contact:{caption:"Kontak",section:{name:"Nama Kontak",info:"Informasi Kontak",hoursAndInstructions:"Jam & Instruksi"},conditionalName:{caption:"Nama Kontak",msg:"Satu Nama Individual, Nama Organisasi Nama, atau Nama Posisi diperlukan.",msg_fgdc:"Satu Nama Individual atau Nama Organisasi diperlukan."},rpIndName:"Nama Individual",rpOrgName:"Nama Organisasi",rpPosName:"Nama Posisi",rpCntInfo:"Informasi Kontak",cntHours:"Jam Layanan",cntInstr:"Instruksi Kontak"},distInfo:{caption:"Informasi Distribusi",section:{format:"Format",distributor:"Distributor",transfer:"Opsi Transfer"},distFormat:{caption:"Format Distribusi",formatName:"Nama Format",formatVer:"Versi Format",formatAmdNum:"Nomor Amendemen",formatSpec:"Spesifikasi",fileDecmTech:"Teknik Dekompresi",formatInfo:"Konten Informasi"},distributor:{caption:"Distributor"},distTranOps:{caption:"Opsi Transfer Digital",section:{unitsAndSize:"Unit"},unitsODist:"Unit Distribusi",transSize:"Ukuran Transfer",offLineMed:{caption:"Medium Offline",medDensity:"Kerapatan",medDenUnits:"Unit Kerapatan",medVol:"Volume",medNote:"Catatan Medium"}},distorOrdPrc:{caption:"Proses Pemesanan",resFees:"Biaya",planAvDtTm:"Tanggal Ketersediaan",planAvTmPd:{caption:"Periode Tanggal Ketersediaan",tmBegin:"Tanggal/Waktu Mulai",tmEnd:"Tanggal/Waktu Berakhir"},ordInstr:"Instruksi Pemesanan",ordTurn:"Perputaran"}},dqInfo:{caption:"Kualitas Data",section:{scope:"Cakupan",report:"Laporan",lineage:"Garis Turunan"},dqScope:{section:{level:"Level",extent:"Jangkauan"},scpLvl:"Level Cakupan",scpLvlDesc:"Deskripsi Level",scpExt:"Jangkauan Cakupan"},report:{section:{measure:"Ukur",evaluation:"Evaluasi",result:"Hasil",conformance:"Kepatuhan"},measDesc:"Deskripsi Pengukuran",measName:"Nama Ukuran",measDateTm:"Tanggal Ukuran",measId:"Pengidentifikasi Ukuran",evalMethDesc:"Metode Evaluasi",evalProc:"Kutipan Prosedur",ConResult:{caption:"Hasil Kepatuhan",conExpl:"Penjelasan",conSpec:"Spesifikasi",conPass:{caption:"Derajat",_1:"Kepatuhan",_0:"Non Kepatuhan"}},QuanResult:{caption:"Hasil Kualitatif",quanVal:"Nilai",quanValType:"Tipe Nilai",quanValUnit:"Unit Nilai",errStat:"Statistik Kesalahan"}},dataLineage:{section:{statement:"Pernyataan",dataSource:"Sumber Data",prcStep:"Langkah Proses"},statement:"Pernyataan Garis Turunan",dataSource:{caption:"Sumber Data",section:{description:"Deskripsi",srcRefSys:"Sistem Referensi",srcExt:"Jangkauan",srcCitatn:"Kutipan"},srcDesc:"Deskripsi Sumber",srcScale:{rfDenom:"Bilangan Penyebut Skala"},srcRefSys:"Sistem Referensi Sumber",srcExt:"Jangkauan Sumber",srcCitatn:"Kutipan Sumber"},prcStep:{caption:"Langkah Proses",section:{description:"Deskripsi",stepProc:"Prosesor",stepSrc:"Sumber Data"},stepDesc:"Deskripsi Proses",stepRat:"Alasan",stepDateTm:"Tanggal Langkah Proses",stepProc:"Prosesor",stepSrc:"Sumber Data"}}},eainfo:{caption:"Informasi Entitas dan Atribut",section:{detailed:"Detail",overview:"Ikhtisar"},detailed:{caption:"Kutipan Entitas dan Atribut",section:{enttyp:"Entitas",attr:"Atribut"},enttyp:{caption:"Tipe Entitas",enttypl:"Label",enttypt:"Objek",enttypc:"Jumlah",enttypd:"Definisi",enttypds:"Sumber Definisi"},attr:{caption:"Atribut",section:{description:"Deskripsi",value:"Nilai",domain:"Domain"},attrlabl:"Label",attalias:"Alias",attrdef:"Definisi",attrdefs:"Sumber Definisi",attrtype:"Tipe",attwidth:"Lebar",atprecis:"Ketepatan",attscale:"Skala",atindex:"Terindekskan",attrvai:{attrva:"Penjelasan Nilai",attrvae:"Akurasi Nilai"},attrmfrq:"Frekuensi Pengukuran Nilai",begdatea:"Tanggal Mulai Nilai",enddatea:"Tanggal Akhir Nilai",attrdomv:{caption:"Domain",edom:{caption:"Dirinci",edomv:"Nilai",edomvd:"Definisi",edomvds:"Sumber Definisi"},rdom:{caption:"Rentang",rdommin:"Nilai Minimal",rdommax:"Nilai Maksimal",rdommean:"Rata-rata",rdomstdv:"Simpangan Baku",attrunit:"Unit",attrmres:"Resolusi Pengukuran"},codesetd:{caption:"Codeset",codesetn:"Nama",codesets:"Sumber"},udom:{caption:"Tidak dapat dipresentasikan"}}}},overview:{caption:"Ikhtisar",eaover:"Ringkasan",eadetcit:"Kutipan"}},extent:{caption:"Jangkauan",section:{description:"Deskripsi",geographic:"Geografis",temporal:"Temporal",vertical:"Vertikal"},exDesc:"Deskripsi Jangkauan",geoEle:{caption:"Jangkauan Geografis",GeoBndBox:{caption:"Kotak Batas",esriExtentType:"Jangkauan untuk pencarian?",exTypeCode:"Jangkauan mengandung sumber daya?",westBL:"Garis Bujur Barat",eastBL:"Garis Bujur Timur",southBL:"Garis Lintang Selatan",northBL:"Garis Lintang Utara"},GeoDesc:{caption:"Deskripsi Geografis",exTypeCode:"Deskripsi mengandung sumber daya?",identCode:"Kode"}},tempEle:{caption:"Jangkauan Temporal",TM_Period:"Periode Waktu",TM_Instant:"Waktu Instan",tmPosition:"Tanggal",tmBegin:"Tanggal Mulai",tmEnd:"Tanggal Akhir"},vertEle:{caption:"Jangkauan Vertikal",vertMinVal:"Nilai Minimal",vertMaxVal:"Nilai Maksimal"}},graphOver:{caption:"Telusuri Grafis",bgFileName:"Telusuri URL Grafis",bgFileDesc:"Telusuri Deskripsi Grafis",bgFileType:"Telusuri Tipe File Grafis"},keywords:{caption:"Kata kunci",section:{topicCategory:"Topik",searchKeys:"Tag",themeKeys:"Tema",placeKeys:"Tempat",tempKeys:"Temporal",discKeys:"Disiplin",stratKeys:"Stratum",productKeys:"Produk",subTopicCatKeys:"Subtopik",otherKeys:"Lainnya"},delimited:"Kata kunci",searchKeys:"Tag",themeKeys:"Kata Kunci Tema",placeKeys:"Kata kunci Tempat",tempKeys:"Kata kunci Temporal",discKeys:"Kata kunci Disiplin",stratKeys:"Kata kunci Stratum",productKeys:"Kata kunci Produk",subTopicCatKeys:"Kata kunci Subtopik",otherKeys:"Kata Kunci Lainnya",thesaName:"Kutipan Tesaurus",thesaLang:"Kutipan Tesaurus"},locales:{caption:"Lokal",locale:"Lokal",resTitle:"Judul",idAbs:"Ringkasan"},maintenance:{caption:"Pemeliharaan",section:{frequency:"Frekuensi",scope:"Cakupan",note:"Catatan"},usrDefFreq:"Frekuensi Kustom",dateNext:"Pembaruan Berikutnya",maintScp:"Cakupan Pembaruan",upScpDesc:{caption:"Deskripsi Cakupan",attribSet:"Atribut",attribIntSet:"Contoh Atribut",featSet:"Fitur",featIntSet:"Contoh Fitur",datasetSet:"Dataset",other:"Contoh Lainnya"},maintNote:"Catatan Pemeliharaan",maintCont:"Kontak Pemeliharaan"},metadata:{section:{profile:"Profil",details:"Cakupan"},mdFileID:"Pengidentifikasi File",mdParentID:"Pengidentifikasi Induk",datasetURI:"Dataset URI",dataSetFn:"Fungsi Dataset",mdDateSt:"Tanggal Metadata",mdLang:"Bahasa Metadata",mdChar:"Rangkaian Karakter",mdHrLv:"Level Hierarki",mdHrLvName:"Nama Level Hierarki",mdContact:"Kontak Metadata",mdMaint:"Pemeliharaan Metadata",mdConst:"Batasan Metadata"},porCatInfo:{caption:"Kutipan Penggambaran"},refSysInfo:{caption:"Referensi Spasial"},resource:{section:{citation:"Kutipan",details:"Detail",description:"Deskripsi",keywords:"Kata kunci",status:"Status",resolution:"Resolusi",representation:"Representasi",browse:"Telusuri Grafis",format:"Format",usage:"Pemakaian",aggregateInfo:"Agregasi",additional:"Tambahan"},idAbs:"Deskripsi (Abstrak)",idPurp:"Ringkasan (Tujuan)",suppInfo:"Informasi Tambahan",idCredit:"Kredit",envirDesc:"Lingkungan Pemrosesan",dataLang:"Bahasa Sumber Daya",dataExt:"Jangkauan Sumber Daya",idPoC:"Titik Kontak",resMaint:"Pemeliharaan Sumber Daya",resConst:"Batasan Sumber Daya",dsFormat:"Format Sumber Daya",dataScale:{caption:"Skala Data",equScale:"Resolusi Skala",scaleDist:"Resolusi Jarak",scaleDist_value:"Jarak"},idSpecUse:{caption:"Pemakaian Sumber Daya",specUsage:"Pemakaian Spesifik",usageDate:"Tanggal Pemakaian",usrDetLim:"Keterbatasan",usrCntInfo:"Kontak Pemakaian"}},service:{caption:"Layanan",svType:"Tipe Layanan",svType_Name:"Nama",svAccProps:"Properti Akses",svCouplRes:{caption:"Sumber Daya Digabungkan",svOpName:"Nama Operasi",svResCitId:"Pengidentifikasi Sumber Daya"},svCoupleType:"Tipe Kopling"},scaleRange:{caption:"Rentang Skala",maxScale:"Skala Maksimal",minScale:"Skala Minimal"},spatRepInfo:{caption:"Representasi Spasial",section:{dimension:"Dimensi",parameters:"Parameter"},numDims:"Jumlah Dimensi",tranParaAv:"Ketersediaan Parameter Transformasi?",axisDimension:{caption:"Dimensi",dimSize:"Ukuran",dimResol:{caption:"Resolusi",_value:"Nilai Resolution",uom:"Unit Resolusi"}},VectSpatRep:{caption:"Vektor",geometObjs:"Objek Geometris",geoObjCnt:"Hitung Objek"},GridSpatRep:{caption:"Grid"},Georect:{caption:"Georectified",section:{centerPoint:"Titik Tengah",cornerPts:"Titik Sudut"},chkPtAv:"Ketersediaan Titik Pemeriksaan?",chkPtDesc:"Deskripsi Titik Pemeriksaan",ptInPixel:"Titik Pada Piksel",transDimDesc:"Deskripsi Dimensi Transformasi",transDimMap:"Pemetaan Dimensi Transformasi",cornerPts:{caption:"Titik Sudut",pos:"Posisikan",gmlDesc:"Deskripsi",gmlDescRef:"Referensi",gmlIdent:"Pengidentifikasi",codeSpace:"Codespace Pengidentifikasi"}},Georef:{caption:"Dapat Digeoreferensikan",ctrlPtAv:"Ketersediaan Titik Kontrol?",orieParaAv:"Orientasi Parameter Transformasi?",orieParaDs:"Deskripsi Parameter Transformasi",georefPars:"Parameter Tergeoreferensikan",paraCit:"Kutipan Parameter"},Indref:{caption:"Tidak langsung"}},booleanOptions:{_false:"Tidak",_true:"Iya"},codelist:{CountryCode:"Negara",LanguageCode:"Bahasa",MonetaryUnits:"Unit Moneter",MonetaryUnits_empty:"Tidak ada mata uang universal",PresentationForm:"Formulir Presentasi Data Geospasial FGDC",CI_PresentationFormCode:"Formulir Presentasi",CI_RoleCode:"Peran",CI_OnLineFunctionCode:"Fungsi",IMS_ContentType:"Tipe Konten",DQ_ElementDimension:"Dimensi",DQ_ElementType:"Tipe Laporan",DQ_EvaluationMethodTypeCode:"Tipe Evaluasi",DS_AssociationTypeCode:"Tipe Asosiasi",DS_InitiativeTypeCode:"Tipe Inisiatif",LI_SourceType:"Tipe Sumber",MD_CellGeometryCode:"Geometri Sel",MD_CharacterSetCode:"Rangkaian Karakter",MD_ClassificationCode:"Klasifikasi",MD_CoverageContentTypeCode:"Tipe Konten",MD_DimensionNameTypeCode:"Tipe Dimensi",MD_GeometricObjectTypeCode:"Tipe Objek Geometris",MD_ImagingConditionCode:"Kondisi Pencitraan",MD_MaintenanceFrequenceCode:"Perbarui Frekuensi",MD_MediumFormatCode:"Kode Format",MD_MediumNameCode:"Nama Medium",MD_PixelOrientationCode:"Orientation Piksel",MD_ProgressCode:"Status",MD_RestrictionCode:"Kode Batasan",MD_ScopeCode:"Cakupan",MD_SpatialRepresentationTypeCode:"Tipe Representasi Spasial",MD_TopicCategoryCode:"Kategori Topik",MD_TopologyLevelCode:"Level Topologi",RS_Dimension:"Dimensi",SV_CouplingType:"Tipe Kopling",UCUM:"Unit",UCUM_Length:"Unit Jarak"}});