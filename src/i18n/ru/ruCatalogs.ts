/* eslint-disable max-len */

// DO NOT EDIT! THIS IS GENERATED FILE

const ruCatalogs = {
  admRefreshTokens: {
    title: {
      plural: 'UI Токены обновления',
      singular: 'UI Токен обновления',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      create: 'Создать',
      managerId: 'Менеджер',
      token: 'Токен',
    },
  },
  appLogins: {
    title: {
      plural: 'Логины пользователей',
      singular: 'Логин пользователей',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      login: 'Логин',
      passwordHash: 'Пароль',
      userId: 'Пользователь',
    },
  },
  appRefreshTokens: {
    title: {
      plural: 'App refresh tokens',
      singular: 'App refresh token',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      create: 'Создать',
      userId: 'Пользователь',
      token: 'Токен',
    },
  },
  auditLogActionTypes: {
    title: {
      plural: 'Типы событий аудита',
      singular: 'Тип события аудита',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
    },
  },
  auditLogs: {
    title: {
      plural: 'Аудит',
      singular: 'Аудит',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      date: 'Дата',
      title: 'Название',
      success: 'Успешно',
      error: 'Ошибка',
      entityTypeId: 'Сущность',
      entityId: 'ID сущности',
      actionTypeId: 'Тип операции',
      managerId: 'Менеджер',
      managerLogin: 'Логин',
      userId: 'Пользователь',
      foreign: 'Внешняя сущность',
      foreignEntityType: 'Тип внешней сущности',
      foreignEntityId: 'ID внешней сущности',
      actionData: 'Данные о действии',
    },
  },
  autogenerationHistoryEntries: {
    title: {
      plural: 'Истории автогенерации',
      singular: 'История автогенерации',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      date: 'Дату проверки',
      originalEntityType: 'Тип сущности, на которой запускалось правило',
      originalEntityId: 'Идентификатор сущности, на котором запускалось правило',
      autogenerationRuleId: 'Правило автогенерации, которое запускалось',
      version: 'Версия запускаемого правила',
      errorOccurred: 'Произошла ли ошибка',
      error: 'Текст ошибки',
    },
  },
  autogenerationRules: {
    title: {
      plural: 'Правило автогенерации',
      singular: 'Правила автогенерации',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название правила',
      version: 'Дата последнего изменения правила',
      originalEntityType: 'На основе какой сущности производится генерация',
      generatingEntityType: 'Какую сущность генерируем',
      originalEntityFilter: 'Объект с информацией, как отобрать среди первоначальных сущностей те, по которым следует произвести генерацию',
      generatingEntityConstructionRules: 'Объект с информацией, как заполнить поля генерируемой сущности. На основе полей исходной сущности, констант или выражений',
      ignoreVersionOnHistory: 'Нужно ли учитывать версию при поиске сущностей ещё не обработанных правилом',
    },
  },
  clubs: {
    title: {
      plural: 'Клубы',
      singular: 'Клуб',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      createdByManagerId: 'Создано менеджером',
      lastChangedByManagerId: 'Изменено менеджером',
    },
  },
  competitions: {
    title: {
      plural: 'Турниры',
      singular: 'Турнир',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название турнира',
      dateOfBirthFrom: 'Год рождения с',
      dateOfBirthTo: 'По год рождения',
      organizationId: 'Организатор',
      createdByManagerId: 'Создано менеджером',
      lastChangedByManagerId: 'Изменено менеджером',
    },
  },
  configurationVariables: {
    title: {
      plural: 'Конфигурационные переменные',
      singular: 'Конфигурационная переменная',
    },
    fields: {
      id: 'Ид',
      value: 'Значение',
    },
  },
  delegations: {
    title: {
      plural: 'Делегирования',
      singular: 'Делегирование',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      fromId: 'От',
      toId: 'К',
      expiresAt: 'Истекает',
      active: 'Активно',
    },
  },
  entities: {
    title: {
      plural: 'Сущности',
      singular: 'Сущность',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
    },
  },
  entitiesTrackings: {
    title: {
      plural: 'Отслеживание сущностей',
      singular: 'Отслеживание сущности',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      entityTypeId: 'Сущность',
      entityId: 'Идентификатор сущности',
      lastEntityComputed: 'Сущность последний раз вычислена',
      lastEntityScheduled: 'Сущность последний раз добавлена в очередь на обработку',
      lastEntityUpdate: 'Сущность последний раз обновлена',
    },
  },
  eventTypeCategories: {
    title: {
      plural: 'Категории типов событий',
      singular: 'Категория типа события',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
    },
  },
  eventTypes: {
    title: {
      plural: 'Типы событий',
      singular: 'Тип события',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      points: 'Баллы эффективности события',
      eventTypeCategoryId: 'Категория типов событий',
      order: 'Порядок',
      showInTranslationMode: 'Показывать в режиме трансляции',
      needForSecondPlayer: 'Указывается второй игрок',
      dependsOnPoint: 'Влияет на счет матча',
      redCard: 'Красная карточка',
      yellowCard: 'Желтая карточка',
      calculateBlock: 'Участвует в расчете Блоки',
      calculateTakeaway: 'Участвует в расчете Выносы',
      calculateSelection: 'Участвует в расчете Отборы',
      calculateInterseption: 'Участвует в расчете Перехват',
      calculateGuardian: 'Участвует в расчете Опека',
      calculatePositionError: 'Участвует в расчете Поз.ошибки',
      calculateGrossError: 'Участвует в расчете Грубые ошибки',
      calculatePositiveDribling: 'Участвует в расчете Дриблинг +',
      calculateNegativeDribling: 'Участвует в расчете Дриблинг -',
      calculatePositiveSgm: 'Участвует в расчете СГМ +',
      calculateNegativeSgm: 'Участвует в расчете СГМ -',
      calculatePositiveRgm: 'Участвует в расчете РГМ +',
      calculateNegativeRgm: 'Участвует в расчете РГМ -',
      calculateLosses: 'Участвует в расчете Потери под прессингом',
      calculateGegenPressing: 'Участвует в расчете контрпрессинг',
      calculatePressing: 'Участвует в расчете Прессинг',
      calculateSaveBall: 'Участвует в расчете Сохранение мяча',
      calculatePositiveTransfer: 'Участвует в расчете Передачи +',
      calculateNegativeTransfer: 'Участвует в расчете Передачи -',
      calculateHit: 'Участвует в расчете Удары',
      calculateHitTarget: 'Участвует в расчете Удары в створ',
      calculateCorner: 'Участвует в расчете Угловой удар',
      calculateFoul: 'Участвует в расчете Фол',
      calculateOffside: 'Участвует в расчете Оффсайд',
    },
  },
  files: {
    title: {
      plural: 'Файлы',
      singular: 'Файл',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      originalName: 'Original name',
      url: 'Url',
      mimetype: 'Mimetype',
      s3Key: 'S3 key',
      eTag: 'E tag',
      bytes: 'Bytes',
    },
  },
  glossaries: {
    title: {
      plural: 'Глоссарий',
      singular: 'Глоссарий',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      description: 'Определение термина',
      periodTypeId: 'Тип периода',
    },
  },
  historyOfPlayerRoles: {
    title: {
      plural: 'История ролей игроков',
      singular: 'История роли игрока',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      matchId: 'Матч',
      playerId: 'Игрок',
      playerRoleId: 'Амплуа игрока',
      status: 'Игрок на поле',
      order: 'Время на матче',
    },
  },
  languages: {
    title: {
      plural: 'Languages',
      singular: 'Language',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
    },
  },
  mailingCampaignStatuses: {
    title: {
      plural: 'Статус рассылок',
      singular: 'Статус рассылок',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
    },
  },
  mailingCampaigns: {
    title: {
      plural: 'Рассылки',
      singular: 'Рассылка',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
      mailingTypeId: 'Mailing type',
      priority: 'Priority',
      date: 'Date',
      mailingCampaignStatusId: 'Mailing campaign status',
      messageTemplateId: 'Message template',
    },
  },
  mailingMessageStatuses: {
    title: {
      plural: 'Статусы сообщений массовой рассылки',
      singular: 'Статус сообщений массовой рассылки',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
      final: 'Final',
    },
  },
  mailingMessages: {
    title: {
      plural: 'Сообщения рассылки',
      singular: 'Сообщение рассылки',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      mailingCampaignId: 'Mailing campaign',
      templateId: 'Template',
      languageId: 'Language',
      to: 'To',
      locals: 'Locals',
      localsHash: 'Locals hash',
      priority: 'Priority',
      dateCreated: 'Date created',
      dateSent: 'Date sent',
      error: 'Error',
      html: 'Html',
      text: 'Text',
      uniqueKey: 'Unique key',
      subject: 'Subject',
      mailingMessageStatusId: 'Mailing message status',
      messageTemplateLangVariantId: 'Message template lang variant',
    },
  },
  mailingTypes: {
    title: {
      plural: 'Типы рассылок',
      singular: 'Тип рассылок',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
    },
  },
  managerLoginTypes: {
    title: {
      plural: 'Manager login types',
      singular: 'Manager login type',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
    },
  },
  managerLogins: {
    title: {
      plural: 'Логины менеджеров',
      singular: 'Логин менеджера',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      managerLoginTypeId: 'Тил логина',
      login: 'Логин',
      passwordHash: 'Хэш пароля',
      emailVerified: 'Email подтвержден',
      locked: 'Заблокирован',
      managerId: 'Менеджеры',
    },
  },
  managers: {
    title: {
      plural: 'Менеджеры',
      singular: 'Менеджер',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      lastName: 'Фамилия',
      firstName: 'Имя',
      languageId: 'Язык',
      email: 'Email',
      phone: 'Телефон',
      photoId: 'Фото',
      telegramLogin: 'Логин в Telegram',
      unitId: 'Подразделение',
      headOfUnit: 'Глава подразделения',
      active: 'Активный',
      tenantId: 'Tenant',
    },
  },
  managersToPermissions: {
    title: {
      plural: 'Разрешения менеджеров',
      singular: 'Разрешение менеджера',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      managerId: 'Менеджер',
      permissionId: 'Разрешение',
      expiresAt: 'Истекает',
    },
  },
  managersToRoles: {
    title: {
      plural: 'Роли менеджеров',
      singular: 'Роль менеджера',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      managerId: 'Менеджер',
      roleId: 'Роль',
      expiresAt: 'Истекает',
    },
  },
  matchPeriodMarkups: {
    title: {
      plural: 'Разметки периодов',
      singular: 'Разметка периода',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      timestamp: 'Временная метка мм:сс',
      periodTypeId: 'Тип периода',
      matchVideoId: 'Видео матча',
    },
  },
  matchRequests: {
    title: {
      plural: 'Заявки на матчи',
      singular: 'Заявка на матч',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      matchId: 'Матч',
      teamForCompetitionId: 'Команда на турнире',
    },
  },
  matchStatuses: {
    title: {
      plural: 'Статусы матчей',
      singular: 'Статус матча',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
    },
  },
  matchVideos: {
    title: {
      plural: 'Видео матчей',
      singular: 'Видео матча',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      videoTitle: 'Название видео матча',
      videoLink: 'Ссылка на видео на YouTube',
      matchId: 'Матч',
      order: 'Порядок',
    },
  },
  matches: {
    title: {
      plural: 'Матчи',
      singular: 'Матч',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      createdByManagerId: 'Создано менеджером',
      lastChangedByManagerId: 'Изменено менеджером',
      title: 'Название',
      competitionId: 'Турнир',
      firstTeamId: 'Команда матча 1',
      firstTeamColor: 'Цвет первой команды',
      firstTeamOnFieldId: 'Первая команда на поле',
      secondTeamId: 'Команда матча 2',
      secondTeamColor: 'Цвет второй команды',
      matchDate: 'Дата проведения матча',
      matchTime: 'Время начала матча',
      duration: 'Продолжительность в минутах',
      place: 'Место проведения',
      active: 'Активен',
      firstTeamPoints: 'Счет команды 1',
      secondTeamPoints: 'Счет команды 2',
      redCardFirstTeam: 'Красных карточек команды 1',
      redCardSecondTeam: 'Красных карточек команды 2',
      yellowCardFirstTeam: 'Желтых карточек команды 1',
      yellowCardSecondTeam: 'Желтых карточек команды 2',
      firstTeamHandleTime: 'Время владения мячом первой командой',
      secondTeamHandleTime: 'Время владения мячом второй командой',
      linkToProtocol: 'Ссылка на протокол игры',
      matchStatusId: 'Статус матча',
    },
  },
  messageTemplateLangVariants: {
    title: {
      plural: 'Языковые варианты шаблонов сообщений',
      singular: 'Языковой вариант шаблона сообщения',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
      subjectTemplate: 'Subject template',
      bodyTemplate: 'Body template',
      messageTemplateId: 'Message template',
      languageId: 'Language',
      additionalStyle: 'Additional style',
    },
  },
  messageTemplates: {
    title: {
      plural: 'Шаблоны сообщений',
      singular: 'Шаблон сообщения',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
      secretData: 'Secret data',
      messageTypeId: 'Message type',
      dataExample: 'Data example',
      templateStyleId: 'Template style',
    },
  },
  messageTypes: {
    title: {
      plural: 'Типы сообщений',
      singular: 'Тип сообщений',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
      description: 'Description',
    },
  },
  organizators: {
    title: {
      plural: 'Организаторы',
      singular: 'Организатор',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      createdByManagerId: 'Создано менеджером',
      lastChangedByManagerId: 'Изменено менеджером',
    },
  },
  parents: {
    title: {
      plural: 'Родители',
      singular: 'Родитель',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      firstname: 'Имя',
      lastname: 'Фамилия',
      patronymic: 'Отчество',
      createdByManagerId: 'Создано менеджером',
      lastChangedByManagerId: 'Изменено менеджером',
    },
  },
  periodTypes: {
    title: {
      plural: 'Типы периодов',
      singular: 'Тип периода',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      order: 'Порядковый номер',
    },
  },
  permissions: {
    title: {
      plural: 'Разрешения',
      singular: 'Разрешение',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
    },
  },
  playerAggregatedRoles: {
    title: {
      plural: 'Агрегированные позиции',
      singular: 'Агрегированная позиция',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
    },
  },
  playerCompetitionRatings: {
    title: {
      plural: 'Рейтинги игроков команд на турнирах',
      singular: 'Рейтинг игроков команд на турнирах',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      competitionId: 'Турнир',
      playerId: 'Игрок',
      rating: 'Рейтинг',
    },
  },
  playerForCompetitionTeams: {
    title: {
      plural: 'Списки игроков команд на турнире ',
      singular: 'Список игроков команды на турнире',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      teamForCompetitionId: 'Команда на турнире',
      playerId: 'Игрок',
    },
  },
  playerForMatchRequests: {
    title: {
      plural: 'Заявки игроков на матч',
      singular: 'Заявка игрока на матч',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      matchRequestId: 'Заявка на матч',
      playerId: 'Игрок',
    },
  },
  playerForTeamMatchLists: {
    title: {
      plural: 'Игроки заявки',
      singular: 'Игрок заявки',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      teamMatchListId: 'Состав команды',
      playerId: 'Игрок',
      startingPosition: 'Участвует в стартовом составе',
      onField: 'На поле',
      playerRoleId: 'Амплуа игрока',
      playerOnMatchNumber: 'Номер игрока на матче',
    },
  },
  playerMatchRatings: {
    title: {
      plural: 'Рейтинги игроков на матчах',
      singular: 'Рейтинг игрока на матче',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      matchId: 'Матч',
      playerId: 'Игрок',
      rating: 'Рейтинг',
      progressivePassAccuracy: 'Точность прогрессивных передач',
      playerRatingAverage: 'Средний рейтинг',
    },
  },
  playerRanks: {
    title: {
      plural: 'Ранги игроков',
      singular: 'Ранг игрока',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      rating: 'Рейтинг',
      fileId: 'Изображение баджа',
    },
  },
  playerRoles: {
    title: {
      plural: 'Роли игроков',
      singular: 'Роль игрока',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      shortTitle: 'Сокращенное название',
      playerAggregatedRoleId: 'Агрегированная позиция',
    },
  },
  players: {
    title: {
      plural: 'Игроки',
      singular: 'Игрок',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      firstname: 'Имя',
      lastname: 'Фамилия',
      patronymic: 'Отчество',
      title: 'Название',
      playerName: 'Игрок',
      number: 'Номер игрока',
      dateOfBirth: 'Дата рождения',
      age: 'Возраст',
      teamId: 'Команда',
      createdByManagerId: 'Создано менеджером',
      lastChangedByManagerId: 'Изменено менеджером',
      parentId: 'Родитель',
      linkToProfile: 'Ссылка на профиль',
      playerRating: 'Рейтинг за все время',
      photoId: 'Фото игрока',
      playerRatingAverage: 'Средний рейтинг',
      commonPlayerRatingGoalkeeper: 'Общий рейтинг по позиции Goalkeeper',
      commonPlayerRatingAttack: 'Общий рейтинг по позиции Attack',
      commonPlayerRatingMidfielder: 'Общий рейтинг по позиции Midfielder',
      commonPlayerRatingDefender: 'Общий рейтинг по позиции Defender',
      playedMatches: 'Количество сыгранных матчей',
      averagePlayerRatingGoalkeeper: 'Средний рейтинг по позиции Goalkeeper',
      averagePlayerRatingAttack: 'Средний рейтинг по позиции Attack',
      averagePlayerRatingMidfielder: 'Средний рейтинг игрока по позиции Midfielder',
      averagePlayerRatingDefender: 'Средний рейтинг игрока по позиции Defender',
      playerAggregatedRoleId: 'Агрегированная позиция',
      playerTag: 'Тэг',
      progressivePassAccuracy: 'Точность прогрессивных передач',
      playerRankId: 'Ранг игрока',
    },
  },
  reportForClubs: {
    title: {
      plural: 'Отчеты для клубов',
      singular: 'Отчет для клуба',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      teamId: 'Команда',
      competitionId: 'Турнир',
      clubId: 'Клуб',
      lastUpdated: 'Дата последнего изменения',
      paid: 'Оплачен',
    },
  },
  reportForOrganizations: {
    title: {
      plural: 'Отчеты для организаторов',
      singular: 'Отчет для организаторов',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      competitionId: 'Турнир',
      organizatorId: 'Организатор',
      lastUpdated: 'Дата последнего изменения',
      paid: 'Оплачен',
    },
  },
  reportForParents: {
    title: {
      plural: 'Отчеты для родителей',
      singular: 'Отчет для родителей',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      playerId: 'Игрок',
      matchId: 'Матч',
      parentId: 'Родитель',
      lastUpdated: 'Дата последнего изменения',
      paid: 'Оплачен',
    },
  },
  reportForTeams: {
    title: {
      plural: 'Отчеты для команд',
      singular: 'Отчет для команды',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      created: 'Дата и время создания',
      title: 'Название',
      teamForCompetitionId: 'Команда на турнире',
      matchId: 'Матч',
      clubId: 'Клуб',
      lastUpdated: 'Дата последнего изменения',
      paid: 'Оплачен',
      fileId: 'Файл отчета',
      htmlFileId: 'HTML файл отчета',
      jsonFileId: 'JSON файл отчета',
      needRecalculate: 'Требуется пересчет',
    },
  },
  roles: {
    title: {
      plural: 'Роли',
      singular: 'Роль',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      hasAllPermissions: 'Доступны все разрешения',
      allTenantsAvailable: 'Доступны все арендаторы',
    },
  },
  rolesToPermissions: {
    title: {
      plural: 'Разрешения ролей',
      singular: 'Разрешение роли',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      roleId: 'Роль',
      permissionId: 'Разрешение',
    },
  },
  stats: {
    title: {
      plural: 'Stats',
      singular: 'Stats',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      updated: 'Updated',
      helloCount: 'Hello count',
    },
  },
  tags: {
    title: {
      plural: 'Tags',
      singular: 'Tag',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      comment: 'Comment',
    },
  },
  teamForCompetitions: {
    title: {
      plural: 'Команды на турнире',
      singular: 'Команда на турнире',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      fullTitle: 'Полное название',
      teamId: 'Команда',
      competitionId: 'Турнир',
    },
  },
  teamForPlayers: {
    title: {
      plural: 'Игроки команд',
      singular: 'Игрок команды',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      playerId: 'Игрок',
      teamId: 'Команда',
    },
  },
  teamMatchLists: {
    title: {
      plural: 'Составы команд на матчи',
      singular: 'Состав команды на матч',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      matchId: 'Матч',
      teamForCompetitionId: 'Команда на турнире',
    },
  },
  teamMatchReports: {
    title: {
      plural: 'Командные отчеты',
      singular: 'Командный отчет',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      created: 'Дата и время создания',
      matchId: 'Матч',
      lastUpdated: 'Дата последнего изменения',
      fileId: 'Файл отчета',
      needRecalculate: 'Требуется пересчет',
    },
  },
  teams: {
    title: {
      plural: 'Команды',
      singular: 'Команда',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      dateOfBirthFrom: 'Год рождения с',
      dateOfBirthTo: 'По год рождения',
      createdByManagerId: 'Создано менеджером',
      lastChangedByManagerId: 'Изменено менеджером',
      clubId: 'Клуб',
      fileId: 'Логотип команды',
    },
  },
  templateStyles: {
    title: {
      plural: 'Стили шаблонов',
      singular: 'Стиль шаблона',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
      style: 'Style',
    },
  },
  tenants: {
    title: {
      plural: 'Тенанты',
      singular: 'Тенант',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      utcOffset: 'Смещение по UTC',
    },
  },
  units: {
    title: {
      plural: 'Подразделения',
      singular: 'Подразделение',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Название',
      parentId: 'Родительское подразделение',
    },
  },
  users: {
    title: {
      plural: 'Пользователи',
      singular: 'Пользовател',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
      lastname: 'Lastname',
      firstname: 'Firstname',
      email: 'Email',
      tenantId: 'Tenant',
    },
  },
  wscContacts: {
    title: {
      plural: 'WSC Contacts',
      singular: 'WSC Contact',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      name: 'Name',
      phoneNumber: 'Phone number',
      wscUserId: 'User',
    },
  },
  wscMessages: {
    title: {
      plural: 'WSC Messages',
      singular: 'WSC Message',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      externalId: 'External id',
      dateTimeRaw: 'Datetime raw',
      sender: 'Sender',
      content: 'Content',
      wscUserId: 'User',
      wscContactId: 'Contact',
    },
  },
  wscUsers: {
    title: {
      plural: 'WSC Users',
      singular: 'WSC User',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      login: 'Login',
      passwordHash: 'Password hash',
      accessToken: 'Access token',
    },
  },
};

export default ruCatalogs;
