/* eslint-disable max-len */

// DO NOT EDIT! THIS IS GENERATED FILE

const ruCatalogs = {
  admRefreshTokens: {
    title: 'Ui refresh tokens',
    fields: {
      id: 'Id',
      search: 'Search',
      create: 'Create',
      managerId: 'Manager id',
      token: 'Token',
    },
  },
  appLogins: {
    title: 'Логины пользователей',
    fields: {
      id: 'Id',
      search: 'Search',
      login: 'Login',
      passwordHash: 'Password hash',
      userId: 'User id',
    },
  },
  appRefreshTokens: {
    title: 'App refresh tokens',
    fields: {
      id: 'Id',
      search: 'Search',
      create: 'Create',
      userId: 'User id',
      token: 'Token',
    },
  },
  auditLogActionTypes: {
    title: 'Типы событий аудита',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
    },
  },
  auditLogs: {
    title: 'Аудит',
    fields: {
      id: 'Id',
      search: 'Search',
      date: 'Date',
      title: 'Title',
      entityTypeId: 'Entity type id',
      entityId: 'Entity id',
      actionTypeId: 'Action type id',
      managerId: 'Manager id',
      userId: 'User id',
      foreign: 'Foreign',
      foreignEntityType: 'Foreign entity type',
      foreignEntityId: 'Foreign entity id',
      actionData: 'Action data',
    },
  },
  autogenerationHistoryEntries: {
    title: 'История автогенерации',
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
    title: 'Правила автогенерации',
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
    title: 'Делегирование',
    fields: {
      id: 'Id',
      search: 'Search',
      fromId: 'From id',
      toId: 'To id',
      expiresAt: 'Expires at',
      active: 'Active',
    },
  },
  entities: {
    title: 'Сущности',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
    },
  },
  files: {
    title: 'Files',
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
    title: 'Languages',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
    },
  },
  managerLogins: {
    title: 'Логины менеджеров',
    fields: {
      id: 'Id',
      search: 'Search',
      login: 'Login',
      passwordHash: 'Password hash',
      role: 'Role',
      emailVerified: 'Email verified',
      initialPasswordChanged: 'Initial password changed',
      locked: 'Locked',
      managerId: 'Manager id',
    },
  },
  managers: {
    title: 'Менеджеры',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      lastName: 'Last name',
      firstName: 'First name',
      languageId: 'Language id',
      email: 'Email',
      phone: 'Phone',
      photo: 'Photo',
      telegramLogin: 'Telegram login',
      unitId: 'Unit id',
      tenantId: 'Tenant id',
      headOfUnit: 'Head of unit',
      active: 'Active',
    },
  },
  managersToPermissions: {
    title: 'Разрешения менеджеров',
    fields: {
      id: 'Id',
      search: 'Search',
      managerId: 'Manager id',
      permissionId: 'Permission id',
    },
  },
  managersToRoles: {
    title: 'Роли менеджеров',
    fields: {
      id: 'Id',
      search: 'Search',
      managerId: 'Manager id',
      roleId: 'Role id',
    },
  },
  messageTemplates: {
    title: 'Шаблоны сообщений',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      secretData: 'Secret data',
      messageTypeId: 'Message type id',
    },
  },
  messageTypes: {
    title: 'Типы сообщений',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      description: 'Description',
    },
  },
  permissions: {
    title: 'Разрешения',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
    },
  },
  roles: {
    title: 'Роли',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      hasAllPermissions: 'Has all permissions',
      allTenantsAvailable: 'All tenants available',
    },
  },
  rolesToPermissions: {
    title: 'Разрешения ролей',
    fields: {
      id: 'Id',
      search: 'Search',
      roleId: 'Role id',
      permissionId: 'Permission id',
    },
  },
  stats: {
    title: 'Stats',
    fields: {
      id: 'Id',
      search: 'Search',
      updated: 'Updated',
      helloCount: 'Hello count',
    },
  },
  tags: {
    title: 'Tags',
    fields: {
      id: 'Id',
      search: 'Search',
      comment: 'Comment',
    },
  },
  tenants: {
    title: 'Тенанты',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
    },
  },
  units: {
    title: 'Units',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      parentId: 'Parent id',
    },
  },
  users: {
    title: 'Пользователи',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      lastname: 'Lastname',
      firstname: 'Firstname',
      email: 'Email',
      tenantId: 'Tenant id',
    },
  },
};

export default ruCatalogs;
