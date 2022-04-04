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
  managerLogins: {
    title: 'Логины менеджеров',
    fields: {
      id: 'Ид',
      search: 'Поиск',
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
      search: 'Поиск',
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
      search: 'Поиск',
      managerId: 'Manager',
      permissionId: 'Permission',
    },
  },
  managersToRoles: {
    title: 'Роли менеджеров',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      managerId: 'Manager',
      roleId: 'Role',
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
  tenants: {
    title: 'Тенанты',
    fields: {
      id: 'Ид',
      search: 'Поиск',
      title: 'Title',
    },
  },
  units: {
    title: 'Units',
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
