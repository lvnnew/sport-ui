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
      title: 'Название',
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
      plural: 'Autogeneration History',
      singular: 'Autogeneration History',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Autogeneration Rules',
      singular: 'Autogeneration Rule',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      title: 'Название',
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
  managerLogins: {
    title: {
      plural: 'Manager logins',
      singular: 'Manager login',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
      plural: 'Managers',
      singular: 'Manager',
    },
    fields: {
      id: 'Id',
      search: 'Search',
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
  roles: {
    title: {
      plural: 'Roles',
      singular: 'Role',
    },
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Название',
      hasAllPermissions: 'Доступны все разрешения',
      allTenantsAvailable: 'Доступны все арендаторы',
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
      utcOffset: 'Utc offset',
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
      parentId: 'Parent',
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
};

export default enCatalogs;
