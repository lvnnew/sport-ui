/* eslint-disable max-len */

// DO NOT EDIT! THIS IS GENERATED FILE

const ruCatalogs = {
  admRefreshTokens: {
    title: 'Ui refresh tokens',
    fields: {
      id: 'Ид',
      search: 'Search',
      create: 'Create',
      managerId: 'Manager',
      token: 'Token',
    },
  },
  appLogins: {
    title: 'Логины пользователей',
    fields: {
      id: 'Ид',
      search: 'Search',
      login: 'Login',
      passwordHash: 'Password hash',
      userId: 'User',
    },
  },
  appRefreshTokens: {
    title: 'App refresh tokens',
    fields: {
      id: 'Ид',
      search: 'Search',
      create: 'Create',
      userId: 'User',
      token: 'Token',
    },
  },
  auditLogActionTypes: {
    title: 'Типы событий аудита',
    fields: {
      id: 'Ид',
      search: 'Search',
      title: 'Title',
    },
  },
  auditLogs: {
    title: 'Аудит',
    fields: {
      id: 'Ид',
      search: 'Search',
      date: 'Date',
      title: 'Title',
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
      id: 'Ид',
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
      id: 'Ид',
      search: 'Search',
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
      search: 'Search',
      title: 'Title',
    },
  },
  files: {
    title: 'Files',
    fields: {
      id: 'Ид',
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
      id: 'Ид',
      search: 'Search',
      title: 'Title',
    },
  },
  managerLogins: {
    title: 'Логины менеджеров',
    fields: {
      id: 'Ид',
      search: 'Search',
      login: 'Login',
      passwordHash: 'Password hash',
      role: 'Role',
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
      search: 'Search',
      title: 'Title',
      lastName: 'Last name',
      firstName: 'First name',
      languageId: 'Language',
      email: 'Email',
      phone: 'Phone',
      photo: 'Photo',
      telegramLogin: 'Telegram login',
      unitId: 'Unit',
      headOfUnit: 'Head of unit',
      active: 'Active',
      tenantId: 'Tenant',
    },
  },
  managersToPermissions: {
    title: 'Разрешения менеджеров',
    fields: {
      id: 'Ид',
      search: 'Search',
      managerId: 'Manager',
      permissionId: 'Permission',
    },
  },
  managersToRoles: {
    title: 'Роли менеджеров',
    fields: {
      id: 'Ид',
      search: 'Search',
      managerId: 'Manager',
      roleId: 'Role',
    },
  },
  messageTemplates: {
    title: 'Шаблоны сообщений',
    fields: {
      id: 'Ид',
      search: 'Search',
      title: 'Title',
      secretData: 'Secret data',
      messageTypeId: 'Message type',
    },
  },
  messageTypes: {
    title: 'Типы сообщений',
    fields: {
      id: 'Ид',
      search: 'Search',
      title: 'Title',
      description: 'Description',
    },
  },
  permissions: {
    title: 'Разрешения',
    fields: {
      id: 'Ид',
      search: 'Search',
      title: 'Title',
    },
  },
  roles: {
    title: 'Роли',
    fields: {
      id: 'Ид',
      search: 'Search',
      title: 'Title',
      hasAllPermissions: 'Has all permissions',
      allTenantsAvailable: 'All tenants available',
    },
  },
  rolesToPermissions: {
    title: 'Разрешения ролей',
    fields: {
      id: 'Ид',
      search: 'Search',
      roleId: 'Role',
      permissionId: 'Permission',
    },
  },
  stats: {
    title: 'Stats',
    fields: {
      id: 'Ид',
      search: 'Search',
      updated: 'Updated',
      helloCount: 'Hello count',
    },
  },
  tags: {
    title: 'Tags',
    fields: {
      id: 'Ид',
      search: 'Search',
      comment: 'Comment',
    },
  },
  tenants: {
    title: 'Тенанты',
    fields: {
      id: 'Ид',
      search: 'Search',
      title: 'Title',
    },
  },
  units: {
    title: 'Units',
    fields: {
      id: 'Ид',
      search: 'Search',
      title: 'Title',
      parentId: 'Parent',
    },
  },
  users: {
    title: 'Пользователи',
    fields: {
      id: 'Ид',
      search: 'Search',
      title: 'Title',
      lastname: 'Lastname',
      firstname: 'Firstname',
      email: 'Email',
      tenantId: 'Tenant',
    },
  },
};

export default ruCatalogs;
