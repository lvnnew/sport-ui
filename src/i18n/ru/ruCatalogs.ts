/* eslint-disable max-len */

// DO NOT EDIT! THIS IS GENERATED FILE

const ruCatalogs = {
  admRefreshTokens: {
    title: {
      plural: 'Ui refresh tokens',
      singular: 'Ui refresh token',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      create: 'Create',
      managerId: 'Manager',
      token: 'Token',
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
      login: 'Login',
      passwordHash: 'Password hash',
      userId: 'User',
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
      create: 'Create',
      userId: 'User',
      token: 'Token',
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
      plural: 'Аудиты',
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
      userId: 'Пользователь',
      foreign: 'Внешняя сущность',
      foreignEntityType: 'Тип внешней сущности ',
      foreignEntityId: 'ID внешней сущности',
      actionData: 'Action data',
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
  delegations: {
    title: {
      plural: 'Делегирования',
      singular: 'Делегирование',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      fromId: 'From',
      toId: 'To',
      expiresAt: 'Expires at',
      active: 'Active',
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
  files: {
    title: {
      plural: 'Files',
      singular: 'File',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      originalName: 'Original name',
      url: 'Url',
      mimetype: 'Mimetype',
      s3Key: 'S3 key',
      eTag: 'E tag',
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
      title: 'Title',
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
  managerLogins: {
    title: {
      plural: 'Логины менеджеров',
      singular: 'Логин менеджера',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      login: 'Login',
      passwordHash: 'Password hash',
      emailVerified: 'Email verified',
      initialPasswordChanged: 'Initial password changed',
      locked: 'Locked',
      managerId: 'Manager',
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
      title: 'Title',
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
      managerId: 'Manager',
      permissionId: 'Permission',
      expiresAt: 'Expires at',
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
      managerId: 'Manager',
      roleId: 'Role',
      expiresAt: 'Expires at',
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
  permissions: {
    title: {
      plural: 'Разрешения',
      singular: 'Разрешение',
    },
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
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
      roleId: 'Role',
      permissionId: 'Permission',
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
  templateStyles: {
    title: {
      plural: 'Стили шаблонов',
      singular: 'Стили шаблона',
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
      title: 'Title',
      utcOffset: 'Utc offset',
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
      title: 'Title',
      parentId: 'Parent',
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
};

export default ruCatalogs;
