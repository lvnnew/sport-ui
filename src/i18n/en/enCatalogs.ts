/* eslint-disable max-len */

// DO NOT EDIT! THIS IS GENERATED FILE

const enCatalogs = {
  admRefreshTokens: {
    title: {
      plural: 'Ui refresh tokens',
      singular: 'Ui refresh token',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      create: 'Create',
      managerId: 'Manager',
      token: 'Token',
    },
  },
  appLogins: {
    title: {
      plural: 'Logins of users',
      singular: 'Login of user',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      login: 'Login',
      passwordHash: 'Password',
      userId: 'User',
    },
  },
  appRefreshTokens: {
    title: {
      plural: 'App refresh tokens',
      singular: 'App refresh token',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      create: 'Create',
      userId: 'User',
      token: 'Token',
    },
  },
  auditLogActionTypes: {
    title: {
      plural: 'Audit action types',
      singular: 'Audit action type',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
    },
  },
  auditLogs: {
    title: {
      plural: 'Audit logs',
      singular: 'Audit log',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      date: 'Date',
      title: 'Title',
      success: 'Success',
      error: 'Error',
      entityTypeId: 'Entity type',
      entityId: 'Entity Id',
      actionTypeId: 'Action Type',
      managerId: 'Manager',
      managerLogin: 'Логин',
      userId: 'User',
      foreign: 'Foreign',
      foreignEntityType: 'Foreign entity type',
      foreignEntityId: 'Foreign entity Id',
      actionData: 'Action data',
    },
  },
  autogenerationHistoryEntries: {
    title: {
      plural: 'Autogeneration History',
      singular: 'Autogeneration History',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      date: 'Date',
      originalEntityType: 'Original entity type',
      originalEntityId: 'Original entity Id',
      autogenerationRuleId: 'Autogeneration rule',
      version: 'Version',
      errorOccurred: 'Error occurred',
      error: 'error',
    },
  },
  autogenerationRules: {
    title: {
      plural: 'Autogeneration Rules',
      singular: 'Autogeneration Rule',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      version: 'Version',
      originalEntityType: 'Original entity type',
      generatingEntityType: 'Generating entity type',
      originalEntityFilter: 'Original entity filter',
      generatingEntityConstructionRules: 'Generating entity construction rules',
      ignoreVersionOnHistory: 'Ignore version on history',
    },
  },
  clubs: {
    title: {
      plural: 'Clubs',
      singular: 'Club',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Название',
      createdByManagerId: 'Создано менеджером',
      lastChangedByManagerId: 'Изменено менеджером',
    },
  },
  competitions: {
    title: {
      plural: 'Сompetitions',
      singular: 'Сompetition',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      id: 'Id',
      value: 'Значение',
    },
  },
  delegations: {
    title: {
      plural: 'Delegations',
      singular: 'Delegation',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      fromId: 'From',
      toId: 'To',
      expiresAt: 'Expires at',
      active: 'Active',
    },
  },
  entities: {
    title: {
      plural: 'Entities',
      singular: 'Entity',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
    },
  },
  entitiesTrackings: {
    title: {
      plural: 'Entities trackings',
      singular: 'Entity tracking',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      entityTypeId: 'Сущность',
      entityId: 'Идентификатор сущности',
      lastEntityComputed: 'Сущность последний раз вычислена',
      lastEntityScheduled: 'Сущность последний раз добавлена в очередь на обработку',
      lastEntityUpdate: 'Сущность последний раз обновлена',
    },
  },
  eventTypeCategories: {
    title: {
      plural: 'Event type categories',
      singular: 'Event type category',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Название',
    },
  },
  eventTypes: {
    title: {
      plural: 'Event types',
      singular: 'Event type',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Files',
      singular: 'File',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Glossaries',
      singular: 'Glossary',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Название',
      description: 'Определение термина',
      periodTypeId: 'Тип периода',
    },
  },
  historyOfPlayerRoles: {
    title: {
      plural: 'History of player roles',
      singular: 'History of player role',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      id: 'Id',
      search: 'Search',
      title: 'Title',
    },
  },
  mailingCampaignStatuses: {
    title: {
      plural: 'Mailing campaign statuses',
      singular: 'Mailing campaign statuse',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
    },
  },
  mailingCampaigns: {
    title: {
      plural: 'Mailing campaigns',
      singular: 'Mailing campaign',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Mailing message statuses',
      singular: 'Mailing message statuse',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      final: 'Final',
    },
  },
  mailingMessages: {
    title: {
      plural: 'Mailing messages',
      singular: 'Mailing message',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Mailing types',
      singular: 'Mailing type',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
    },
  },
  managerLoginTypes: {
    title: {
      plural: 'Manager login types',
      singular: 'Manager login type',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
    },
  },
  managerLogins: {
    title: {
      plural: 'Manager logins',
      singular: 'Manager login',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      managerLoginTypeId: 'Login type',
      login: 'Login',
      passwordHash: 'Password hash',
      emailVerified: 'Email verified',
      locked: 'Locked',
      managerId: 'Managers',
    },
  },
  managers: {
    title: {
      plural: 'Managers',
      singular: 'Manager',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      lastName: 'Lastname',
      firstName: 'Firstname',
      languageId: 'Language',
      email: 'Email',
      phone: 'Phone',
      photoId: 'Фото',
      telegramLogin: 'Telegram login',
      unitId: 'Units',
      headOfUnit: 'Head of unit',
      active: 'Active',
      tenantId: 'Tenant',
    },
  },
  managersToPermissions: {
    title: {
      plural: 'Managers To Permissions',
      singular: 'Manager To Permission',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      managerId: 'Manager',
      permissionId: 'Permission',
      expiresAt: 'Expires at',
    },
  },
  managersToRoles: {
    title: {
      plural: 'Managers To Roles',
      singular: 'Manager To Role',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      managerId: 'Manager',
      roleId: 'Role',
      expiresAt: 'Expires at',
    },
  },
  matchPeriodMarkups: {
    title: {
      plural: 'Match period markups',
      singular: 'Match period markup',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      timestamp: 'Временная метка мм:сс',
      periodTypeId: 'Тип периода',
      matchVideoId: 'Видео матча',
    },
  },
  matchRequests: {
    title: {
      plural: 'Match requests',
      singular: 'Match request',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      matchId: 'Матч',
      teamForCompetitionId: 'Команда на турнире',
    },
  },
  matchStatuses: {
    title: {
      plural: 'Match statuses',
      singular: 'Match status',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Название',
    },
  },
  matchVideos: {
    title: {
      plural: 'Match videos',
      singular: 'Match video',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      videoTitle: 'Название видео матча',
      videoLink: 'Ссылка на видео на YouTube',
      matchId: 'Матч',
      order: 'Порядок',
    },
  },
  matches: {
    title: {
      plural: 'Matches',
      singular: 'Match',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Message template lang variants',
      singular: 'Message template lang variant',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Message templates',
      singular: 'Message template',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      secretData: 'Secret data',
      messageTypeId: 'Message type',
      dataExample: 'Data example',
      templateStyleId: 'Template style',
    },
  },
  messageTypes: {
    title: {
      plural: 'Message types',
      singular: 'Message type',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      description: 'Description',
    },
  },
  organizators: {
    title: {
      plural: 'Organizators',
      singular: 'Organizator',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Название',
      createdByManagerId: 'Создано менеджером',
      lastChangedByManagerId: 'Изменено менеджером',
    },
  },
  parents: {
    title: {
      plural: 'Parents',
      singular: 'Parent',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Period types',
      singular: 'Period type',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Название',
      order: 'Порядковый номер',
    },
  },
  permissions: {
    title: {
      plural: 'Permissions',
      singular: 'Permission',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
    },
  },
  playerAggregatedRoles: {
    title: {
      plural: 'Player aggregated roles',
      singular: 'Player aggregated role',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Название',
    },
  },
  playerCompetitionRatings: {
    title: {
      plural: 'Players Competition Ratings',
      singular: 'Player Competition Ratings',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      competitionId: 'Турнир',
      playerId: 'Игрок',
      rating: 'Рейтинг',
    },
  },
  playerForCompetitionTeams: {
    title: {
      plural: 'Players For Competition Teams',
      singular: 'Player For Competition Teams',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      teamForCompetitionId: 'Команда на турнире',
      playerId: 'Игрок',
    },
  },
  playerForMatchRequests: {
    title: {
      plural: 'Player for match requests',
      singular: 'Player for match request',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      matchRequestId: 'Заявка на матч',
      playerId: 'Игрок',
    },
  },
  playerForTeamMatchLists: {
    title: {
      plural: 'Player for team match lists',
      singular: 'Player for team match list',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Players match ratings',
      singular: 'Player match rating',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      matchId: 'Матч',
      playerId: 'Игрок',
      rating: 'Рейтинг',
      progressivePassAccuracy: 'Точность прогрессивных передач',
      playerRatingAverage: 'Средний рейтинг',
    },
  },
  playerRanks: {
    title: {
      plural: 'Player ranks',
      singular: 'Player rank',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Название',
      rating: 'Рейтинг',
      fileId: 'Изображение баджа',
    },
  },
  playerRoles: {
    title: {
      plural: 'Player roles',
      singular: 'Player role',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Название',
      shortTitle: 'Сокращенное название',
      playerAggregatedRoleId: 'Агрегированная позиция',
    },
  },
  players: {
    title: {
      plural: 'Players',
      singular: 'Player',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Reports For Clubs',
      singular: 'Report For Club',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Reports For Organizations',
      singular: 'Report For Organization',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Название',
      competitionId: 'Турнир',
      organizatorId: 'Организатор',
      lastUpdated: 'Дата последнего изменения',
      paid: 'Оплачен',
    },
  },
  reportForParents: {
    title: {
      plural: 'Reports for parents',
      singular: 'Report for parent',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Reports for teams',
      singular: 'Report for team',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Roles',
      singular: 'Role',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      hasAllPermissions: 'Has all permissions',
      allTenantsAvailable: 'All tenants available',
    },
  },
  rolesToPermissions: {
    title: {
      plural: 'Roles To Permissions',
      singular: 'Role To Permission',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      roleId: 'Roles',
      permissionId: 'Permission',
    },
  },
  stats: {
    title: {
      plural: 'Stats',
      singular: 'Stats',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      id: 'Id',
      search: 'Search',
      comment: 'Comment',
    },
  },
  teamForCompetitions: {
    title: {
      plural: 'Teams For Competitions',
      singular: 'Team For Competition',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Название',
      fullTitle: 'Полное название',
      teamId: 'Команда',
      competitionId: 'Турнир',
    },
  },
  teamForPlayers: {
    title: {
      plural: 'Team for players',
      singular: 'Team for player',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      playerId: 'Игрок',
      teamId: 'Команда',
    },
  },
  teamMatchLists: {
    title: {
      plural: 'Team match lists',
      singular: 'Team match list',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      matchId: 'Матч',
      teamForCompetitionId: 'Команда на турнире',
    },
  },
  teamMatchReports: {
    title: {
      plural: 'Team match reports',
      singular: 'Team match report',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      created: 'Дата и время создания',
      matchId: 'Матч',
      lastUpdated: 'Дата последнего изменения',
      fileId: 'Файл отчета',
      needRecalculate: 'Требуется пересчет',
    },
  },
  teams: {
    title: {
      plural: 'Teams',
      singular: 'Team',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Template styles',
      singular: 'Template style',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      style: 'Style',
    },
  },
  tenants: {
    title: {
      plural: 'Tenants',
      singular: 'Tenant',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      utcOffset: 'UTC offset',
    },
  },
  units: {
    title: {
      plural: 'Units',
      singular: 'Unit',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      parentId: 'Parent id',
    },
  },
  users: {
    title: {
      plural: 'Users',
      singular: 'User',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      id: 'Id',
      search: 'Search',
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
      id: 'Id',
      search: 'Search',
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
      id: 'Id',
      search: 'Search',
      login: 'Login',
      passwordHash: 'Password hash',
      accessToken: 'Access token',
    },
  },
};

export default enCatalogs;
