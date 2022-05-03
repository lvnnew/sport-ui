import {MenuElement} from '../uiLib/menu/MenuItem';

// DO NOT EDIT! THIS IS GENERATED FILE

const getDefaultMenu = () => {
  const menuData: MenuElement[] = [
    {
      label: 'menu.members',
      link: '/members',
      icon: 'AccountCircleOutlined',
      debugOnly: false,
      permissions: ['members.all'],
    },
    {
      label: 'menu.newMember',
      link: '/memberByManager',
      icon: 'PersonAddOutlined',
      debugOnly: false,
      permissions: ['members.newMemberByManager'],
    },
  ];

  const infoRegistriesMenuData: MenuElement[] = [
    {
      label: 'infoRegistries.aggregateTrackings.title',
      link: '/aggregateTrackings',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
  ];

  if (infoRegistriesMenuData.length) {
    menuData.push({
      label: 'app.infoRegistries',
      icon: 'DetailsOutlined',
      debugOnly: true,
      children: infoRegistriesMenuData,
    });
  }

  const sumRegistriesMenuData: MenuElement[] = [

  ];

  if (sumRegistriesMenuData.length) {
    menuData.push({
      label: 'app.sumRegistries',
      icon: 'DetailsOutlined',
      debugOnly: true,
      children: sumRegistriesMenuData,
    });
  }

  const documentsMenuData: MenuElement[] = [

  ];

  if (documentsMenuData.length) {
    menuData.push({
      label: 'app.documents',
      icon: 'DetailsOutlined',
      debugOnly: true,
      children: documentsMenuData,
    });
  }

  const catalogsMenuData: MenuElement[] = [
    {
      label: 'catalogs.appRefreshTokens.title',
      link: '/appRefreshTokens',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.files.title',
      link: '/files',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.languages.title',
      link: '/languages',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.stats.title',
      link: '/stats',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.tags.title',
      link: '/tags',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.admRefreshTokens.title',
      link: '/admRefreshTokens',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.units.title',
      link: '/units',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.auditLogs.title',
      link: '/auditLogs',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.delegations.title',
      link: '/delegations',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.autogenerationHistoryEntries.title',
      link: '/autogenerationHistoryEntries',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.managerLogins.title',
      link: '/managerLogins',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.appLogins.title',
      link: '/appLogins',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.managers.title',
      link: '/managers',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.users.title',
      link: '/users',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.autogenerationRules.title',
      link: '/autogenerationRules',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.permissions.title',
      link: '/permissions',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.managersToPermissions.title',
      link: '/managersToPermissions',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.rolesToPermissions.title',
      link: '/rolesToPermissions',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.roles.title',
      link: '/roles',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.managersToRoles.title',
      link: '/managersToRoles',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.entities.title',
      link: '/entities',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.tenants.title',
      link: '/tenants',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.auditLogActionTypes.title',
      link: '/auditLogActionTypes',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.messageTypes.title',
      link: '/messageTypes',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.messageTemplates.title',
      link: '/messageTemplates',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
  ];

  if (catalogsMenuData.length) {
    menuData.push({
      label: 'app.catalogs',
      icon: 'DetailsOutlined',
      debugOnly: true,
      children: catalogsMenuData,
    });
  }

  return menuData;
};

export default getDefaultMenu;
