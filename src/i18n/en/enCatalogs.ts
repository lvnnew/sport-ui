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
};

export default enCatalogs;
