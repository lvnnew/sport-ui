/* eslint-disable max-len */

// DO NOT EDIT! THIS IS GENERATED FILE

const enCatalogs = {
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
    title: 'Logins of users',
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
    title: 'Audit action types',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
    },
  },
  auditLogs: {
    title: 'Audit',
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
    title: 'Autogeneration History',
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
    title: 'Autogeneration Rules',
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
    title: 'Delegations',
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
    title: 'Entities',
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
    title: 'Manager logins',
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
    title: 'Managers',
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
    title: 'Managers To Permissions',
    fields: {
      id: 'Id',
      search: 'Search',
      managerId: 'Manager id',
      permissionId: 'Permission id',
    },
  },
  managersToRoles: {
    title: 'Managers To Roles',
    fields: {
      id: 'Id',
      search: 'Search',
      managerId: 'Manager id',
      roleId: 'Role id',
    },
  },
  messageTemplates: {
    title: 'Message templates',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      secretData: 'Secret data',
      messageTypeId: 'Message type id',
    },
  },
  messageTypes: {
    title: 'Message types',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      description: 'Description',
    },
  },
  permissions: {
    title: 'Permissions',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
    },
  },
  roles: {
    title: 'Roles',
    fields: {
      id: 'Id',
      search: 'Search',
      title: 'Title',
      hasAllPermissions: 'Has all permissions',
      allTenantsAvailable: 'All tenants available',
    },
  },
  rolesToPermissions: {
    title: 'Roles To Permissions',
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
    title: 'Tenants',
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
    title: 'Users',
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

export default enCatalogs;
