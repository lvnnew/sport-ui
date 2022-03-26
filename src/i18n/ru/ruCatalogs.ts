/* eslint-disable max-len */

// DO NOT EDIT! THIS IS GENERATED FILE

const ruCatalogs = {
  admRefreshTokens: {
    title: 'Ui refresh tokens',
    fields: {
      id: 'undefined',
      search: 'undefined',
      create: 'undefined',
      managerId: 'undefined',
      token: 'undefined',
    },
  },
  appLogins: {
    title: 'Логины пользователей',
    fields: {
      id: 'undefined',
      search: 'undefined',
      login: 'undefined',
      passwordHash: 'undefined',
      userId: 'undefined',
    },
  },
  appRefreshTokens: {
    title: 'App refresh tokens',
    fields: {
      id: 'undefined',
      search: 'undefined',
      create: 'undefined',
      userId: 'undefined',
      token: 'undefined',
    },
  },
  auditLogActionTypes: {
    title: 'Типы событий аудита',
    fields: {
      id: 'undefined',
      search: 'undefined',
      title: 'undefined',
    },
  },
  auditLogs: {
    title: 'Аудит',
    fields: {
      id: 'undefined',
      search: 'undefined',
      date: 'undefined',
      title: 'undefined',
      entityTypeId: 'undefined',
      entityId: 'undefined',
      actionTypeId: 'undefined',
      managerId: 'undefined',
      userId: 'undefined',
      foreign: 'undefined',
      foreignEntityType: 'undefined',
      foreignEntityId: 'undefined',
      actionData: 'undefined',
    },
  },
  autogenerationHistoryEntries: {
    title: 'История автогенерации',
    fields: {
      id: 'undefined',
      search: 'undefined',
      date: 'undefined',
      originalEntityType: 'undefined',
      originalEntityId: 'undefined',
      autogenerationRuleId: 'undefined',
      version: 'undefined',
      errorOccurred: 'undefined',
      error: 'undefined',
    },
  },
  autogenerationRules: {
    title: 'Правила автогенерации',
    fields: {
      id: 'undefined',
      search: 'undefined',
      title: 'undefined',
      version: 'undefined',
      originalEntityType: 'undefined',
      generatingEntityType: 'undefined',
      originalEntityFilter: 'undefined',
      generatingEntityConstructionRules: 'undefined',
      ignoreVersionOnHistory: 'undefined',
    },
  },
  delegations: {
    title: 'Делегирование',
    fields: {
      id: 'undefined',
      search: 'undefined',
      fromId: 'undefined',
      toId: 'undefined',
      expiresAt: 'undefined',
      active: 'undefined',
    },
  },
  entities: {
    title: 'Сущности',
    fields: {
      id: 'undefined',
      search: 'undefined',
      title: 'undefined',
    },
  },
  files: {
    title: 'Files',
    fields: {
      id: 'undefined',
      search: 'undefined',
      originalName: 'undefined',
      url: 'undefined',
      mimetype: 'undefined',
      s3Key: 'undefined',
      eTag: 'undefined',
    },
  },
  languages: {
    title: 'Languages',
    fields: {
      id: 'undefined',
      search: 'undefined',
      title: 'undefined',
    },
  },
  managerLogins: {
    title: 'Логины менеджеров',
    fields: {
      id: 'undefined',
      search: 'undefined',
      login: 'undefined',
      passwordHash: 'undefined',
      role: 'undefined',
      emailVerified: 'undefined',
      initialPasswordChanged: 'undefined',
      locked: 'undefined',
      managerId: 'undefined',
    },
  },
  managers: {
    title: 'Менеджеры',
    fields: {
      id: 'undefined',
      search: 'undefined',
      title: 'undefined',
      lastName: 'undefined',
      firstName: 'undefined',
      languageId: 'undefined',
      email: 'undefined',
      phone: 'undefined',
      photo: 'undefined',
      telegramLogin: 'undefined',
      unitId: 'undefined',
      tenantId: 'undefined',
      headOfUnit: 'undefined',
      active: 'undefined',
    },
  },
  managersToPermissions: {
    title: 'Разрешения менеджеров',
    fields: {
      id: 'undefined',
      search: 'undefined',
      managerId: 'undefined',
      permissionId: 'undefined',
    },
  },
  managersToRoles: {
    title: 'Роли менеджеров',
    fields: {
      id: 'undefined',
      search: 'undefined',
      managerId: 'undefined',
      roleId: 'undefined',
    },
  },
  messageTemplates: {
    title: 'Шаблоны сообщений',
    fields: {
      id: 'undefined',
      search: 'undefined',
      title: 'undefined',
      secretData: 'undefined',
      messageTypeId: 'undefined',
    },
  },
  messageTypes: {
    title: 'Типы сообщений',
    fields: {
      id: 'undefined',
      search: 'undefined',
      title: 'undefined',
      description: 'undefined',
    },
  },
  permissions: {
    title: 'Разрешения',
    fields: {
      id: 'undefined',
      search: 'undefined',
      title: 'undefined',
    },
  },
  roles: {
    title: 'Роли',
    fields: {
      id: 'undefined',
      search: 'undefined',
      title: 'undefined',
      hasAllPermissions: 'undefined',
      allTenantsAvailable: 'undefined',
    },
  },
  rolesToPermissions: {
    title: 'Разрешения ролей',
    fields: {
      id: 'undefined',
      search: 'undefined',
      roleId: 'undefined',
      permissionId: 'undefined',
    },
  },
  stats: {
    title: 'Stats',
    fields: {
      id: 'undefined',
      search: 'undefined',
      updated: 'undefined',
      helloCount: 'undefined',
    },
  },
  tags: {
    title: 'Tags',
    fields: {
      id: 'undefined',
      search: 'undefined',
      comment: 'undefined',
    },
  },
  tenants: {
    title: 'Тенанты',
    fields: {
      id: 'undefined',
      search: 'undefined',
      title: 'undefined',
    },
  },
  units: {
    title: 'Units',
    fields: {
      id: 'undefined',
      search: 'undefined',
      title: 'undefined',
      parentId: 'undefined',
    },
  },
  users: {
    title: 'Пользователи',
    fields: {
      id: 'undefined',
      search: 'undefined',
      title: 'undefined',
      lastname: 'undefined',
      firstname: 'undefined',
      email: 'undefined',
      tenantId: 'undefined',
    },
  },
};

export default ruCatalogs;
