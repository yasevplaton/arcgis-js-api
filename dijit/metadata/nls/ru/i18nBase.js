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

define({general:{cancel:"Отменить",close:"Закрыть",none:"Нет",ok:"OK",other:"Прочее",stamp:"Отметка",now:"Сейчас",choose:"Выберите одно:"},editor:{noMetadata:"Нет метаданных для этого элемента.",xmlViewOnly:"Тип метаданных этого элемента не поддерживается редактором. Метаданные должны быть в формате ArcGIS.",editorDialog:{caption:"Метаданные",captionPattern:"Метаданные для {title}"},primaryToolbar:{view:"Просмотр",viewXml:"Просмотреть XML",edit:"Редактировать",initializing:"Загрузка...",startingEditor:"Запуск редактора...",loadingDocument:"Загрузка документа...",updatingDocument:"Обновление документа...",generatingView:"Построение вида...",errors:{errorGeneratingView:"При построении вида произошла ошибка.",errorLoadingDocument:"Произошла ошибка во время загрузки документа."}},changesNotSaved:{prompt:"Документ содержит изменения, которые не были сохранены.",dialogTitle:"Закрыть редактор метаданных",closeButton:"Закрыть"},download:{caption:"Скачать",dialogTitle:"Скачать",prompt:"Щелкните, чтобы загрузить файл."},load:{caption:"Открыть",dialogTitle:"Открыть",typeTab:"Новый документ",fileTab:"Открыть файл",templateTab:"Шаблон",itemTab:"Ваш элемент",filePrompt:"Выберите локальный XML-файл метаданных ArcGIS. Метаданные должны быть в формате ArcGIS.",templatePrompt:"Создать метаданные",pullItem:"Заполните метаданные информацией об элементе.",importWarning:"Выбранный файл не появился в формате ArcGIS. Выгруженные метаданные должны быть в формате ArcGIS.",loading:"Загрузка...",noMetadata:"Метаданные для данного элемента могут создаваться при выборе одной из следующих опций.",unrecognizedMetadata:"Тип метаданных этого элемента не поддерживается редактором. Поддерживаемые метаданные могут создаваться при выборе одной из следующих опций.",errorLoading:"Во время загрузки произошла ошибка.",warnings:{badFile:"Выбранный файл невозможно загрузить.",notAnXml:"Выбранный файл не в формате XML.",notSupported:"Этот тип файла не поддерживается."},portalCaption:"Перезаписать"},save:{caption:"Сохранить",dialogTitle:"Сохранить метаданные",working:"Сохранение метаданных...",errorSaving:"Произошла ошибка, метаданные не были сохранены.",saveDialog:{pushCaption:"Применить изменения к элементу"}},saveAndClose:{caption:"Сохранить и закрыть"},saveDraft:{caption:"Загрузить",dialogTitle:"Загрузить"},validate:{caption:"Проверить",dialogTitle:"Проверка",docIsValid:"Ваш документ корректен."},viewHtml:{caption:"Просмотреть",dialogTitle:"Просмотреть метаданные",savePrompt:"В документе имеются не сохраненные изменения. Все изменения необходимо сохранить, чтобы увидеть их при просмотре метаданных.",saveButton:"Сохранить и просмотреть",portalNone:"Стандартные базовые метаданные не были созданы. Прежде чем просматривать метаданные, сначала их необходимо сохранить."},del:{caption:"Удалить",dialogTitle:"Удалить метаданные",prompt:"Вы уверены, что хотите удалить эти метаданные?",working:"Удаление метаданных...",errorDeleting:"Произошла ошибка, метаданные не были удалены.",portalNone:"Нет доступного для удаления документа метаданных. Стандартные базовые метаданные не были созданы.",portalPrompt:"Это удалит документ метаданных и сбросит метаданные элемента до информации об элементе, такой как Заголовок, Описание и т.п.",portalPrompt2:"Это удалит метаданные, основанные на стандарте. Вы уверены, что хотите удалить эти метаданные?",portalButton:"Удалить и закрыть"},transform:{caption:"Преобразовать",dialogTitle:"Преобразовать в",prompt:"",working:"Преобразование...",errorTransforming:"Произошла ошибка при преобразовании документа."},errorDialog:{dialogTitle:"Произошла ошибка"}},arcgis:{portal:{metadataButton:{caption:"Метаданные"}}},calendar:{button:"Календарь...",title:"Календарь"},geoExtent:{button:"Задать географический экстент...",title:"Географический экстент",navigate:"Навигация",draw:"Нарисовать прямоугольник",drawHint:"Нажмите кнопку, чтобы начать, и отпустите ее, чтобы завершить."},hints:{date:"(гггг или гггг-мм, или гггг-мм-дд)",dateTime:"(гггг-мм-ддTчч:мм:сс.мс[+-]чч:мм)",dateOrDateTime:"(гггг или гггг-мм, или гггг-мм-дд, или гггг-мм-ддTчч:мм:сс.мс[+-]чч:мм)",delimitedTextArea:"(используйте запятую или переход на другую строку как разделитель)",fgdcDate:"(гггг или гггг-мм, или гггг-мм-дд)",fgdcTime:"(чч:мм:сс.мс[+-]чч:мм)",integer:"(введите целое значение)",latitude:"(дес.градусы)",longitude:"(дес.градусы)",number:"(введите число)",numberGreaterThanZero:"(введите число > 0)"},isoTopicCategoryCode:{caption:"Категория тем",boundaries:"Административные и государственные границы",farming:"Земледелие и сельское хозяйство",climatologyMeteorologyAtmosphere:"Атмосфера и климат",biota:"Биология и экология",economy:"Бизнес и экономика",planningCadastre:"Кадастровые данные",society:"Демография, культура, общество",elevation:"Рельеф и производные продукты",environment:"Охрана окружающей среды",structure:"Здания и сооружения",geoscientificInformation:"Геология и геофизика",health:"Здравоохранение",imageryBaseMapsEarthCover:"Снимки и базовые карты",inlandWaters:"Ресурсы внутренних вод",location:"Места и геодезические сети",intelligenceMilitary:"Военный",oceans:"Океаны и эстуарии",transportation:"Транспортные сети",utilitiesCommunication:"Коммунальные службы и связь"},multiplicity:{moveElementDown:"Переместить раздел вниз",moveElementUp:"Переместить раздел вверх",removeElement:"Удалить раздел",repeatElement:"Повторить раздел"},optionalNode:{switchTip:"Добавить или исключить раздел."},serviceTypes:{featureService:"Сервис пространственных объектов",mapService:"Картографический сервис",imageService:"Сервис изображений",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"OK",empty:"Требуется ввести значение.",date:"Значение должно быть датой.",integer:"Значение должно быть целым числом.",number:"Значение должно быть числом.",other:"Некорректное значение."},validationPane:{clearMessages:"Очистить сообщения",prompt:"(щелкните ниже на каждом сообщении и предоставьте требуемую информацию в указанном поле)"}});