/* eslint-disable max-len */

// DO NOT EDIT! THIS IS GENERATED FILE

const ruCatalogs = {
  admRefreshTokens: {
    title: 'Ui refresh tokens',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      create: 'Create',
      managerId: 'Manager',
      token: 'Token',
    },
  },
  appLogins: {
    title: 'Логины пользователей',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      login: 'Login',
      passwordHash: 'Password hash',
      userId: 'User',
    },
  },
  appRefreshTokens: {
    title: 'App refresh tokens',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      create: 'Create',
      userId: 'User',
      token: 'Token',
    },
  },
  auditLogActionTypes: {
    title: 'Типы событий аудита',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
    },
  },
  auditLogs: {
    title: 'Аудит',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      date: 'Date',
      title: 'Title',
      success: 'Success',
      error: 'Error',
      entityTypeId: 'Сущность',
      entityId: 'ID сущности',
      actionTypeId: 'Тип операции',
      managerId: 'Manager',
      userId: 'User',
      foreign: 'Foreign',
      foreignEntityType: 'Foreign entity type',
      foreignEntityId: 'Foreign entity',
      actionData: 'Action data',
    },
  },
  autogenerationHistoryEntries: {
    title: 'История автогенерации',
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
    title: 'Правила автогенерации',
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
    title: 'Делегирование',
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
    title: 'Сущности',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
    },
  },
  files: {
    title: 'Files',
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
    title: 'Languages',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
    },
  },
  mailingCampaignStatuses: {
    title: 'Статусы рассылок',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
    },
  },
  mailingCampaigns: {
    title: 'Рассылки',
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
    title: 'Статусы сообщений массовой рассылки',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
      final: 'Final',
    },
  },
  mailingMessages: {
    title: 'Сообщения рассылки',
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
    title: 'Типы рассылок',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
    },
  },
  managerLogins: {
    title: 'Логины менеджеров',
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
    title: 'Менеджеры',
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
    title: 'Разрешения менеджеров',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      managerId: 'Manager',
      permissionId: 'Permission',
      expiresAt: 'Expires at',
    },
  },
  managersToRoles: {
    title: 'Роли менеджеров',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      managerId: 'Manager',
      roleId: 'Role',
      expiresAt: 'Expires at',
    },
  },
  messageTemplateLangVariants: {
    title: 'Языковой вариант шаблона сообщения',
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
    title: 'Шаблоны сообщений',
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
    title: 'Типы сообщений',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
      description: 'Description',
    },
  },
  permissions: {
    title: 'Разрешения',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
    },
  },
  roles: {
    title: 'Роли',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
      hasAllPermissions: 'Has all permissions',
      allTenantsAvailable: 'All tenants available',
    },
  },
  rolesToPermissions: {
    title: 'Разрешения ролей',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      roleId: 'Role',
      permissionId: 'Permission',
    },
  },
  stats: {
    title: 'Stats',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      updated: 'Updated',
      helloCount: 'Hello count',
    },
  },
  tags: {
    title: 'Tags',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      comment: 'Comment',
    },
  },
  templateStyles: {
    title: 'Стили шаблонов',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
      style: 'Style',
    },
  },
  tenants: {
    title: 'Тенанты',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
      utcOffset: 'Utc offset',
    },
  },
  units: {
    title: 'Подразделения',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
      parentId: 'Parent',
    },
  },
  users: {
    title: 'Пользователи',
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
