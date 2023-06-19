import {MenuElement} from '../uiLib/menu/MenuItem';

// DO NOT EDIT! THIS IS GENERATED FILE

const getDefaultMenu = () => {
  const menuData: MenuElement[] = [
    {
      label: 'app.menu.functions',
      link: '/functions',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'app.menu.resources',
      link: '/resources',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'app.menu.meta',
      link: '/meta',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
  ];

  const infoRegistriesMenuData: MenuElement[] = [
    {
      label: 'infoRegistries.aggregateTrackings.title.plural',
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
      label: 'catalogs.appRefreshTokens.title.plural',
      link: '/appRefreshTokens',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.languages.title.plural',
      link: '/languages',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.stats.title.plural',
      link: '/stats',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.tags.title.plural',
      link: '/tags',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.admRefreshTokens.title.plural',
      link: '/admRefreshTokens',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.auditLogs.title.plural',
      link: '/auditLogs',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.delegations.title.plural',
      link: '/delegations',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.autogenerationHistoryEntries.title.plural',
      link: '/autogenerationHistoryEntries',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.configurationVariables.title.plural',
      link: '/configurationVariables',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.managerLogins.title.plural',
      link: '/managerLogins',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.appLogins.title.plural',
      link: '/appLogins',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.managers.title.plural',
      link: '/managers',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.units.title.plural',
      link: '/units',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.users.title.plural',
      link: '/users',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.autogenerationRules.title.plural',
      link: '/autogenerationRules',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.permissions.title.plural',
      link: '/permissions',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.managersToPermissions.title.plural',
      link: '/managersToPermissions',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.rolesToPermissions.title.plural',
      link: '/rolesToPermissions',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.mailingCampaigns.title.plural',
      link: '/mailingCampaigns',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.roles.title.plural',
      link: '/roles',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.managersToRoles.title.plural',
      link: '/managersToRoles',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.mailingMessages.title.plural',
      link: '/mailingMessages',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.mailingCampaignStatuses.title.plural',
      link: '/mailingCampaignStatuses',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.mailingMessageStatuses.title.plural',
      link: '/mailingMessageStatuses',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.templateStyles.title.plural',
      link: '/templateStyles',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.entities.title.plural',
      link: '/entities',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.tenants.title.plural',
      link: '/tenants',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.mailingTypes.title.plural',
      link: '/mailingTypes',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.auditLogActionTypes.title.plural',
      link: '/auditLogActionTypes',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.messageTypes.title.plural',
      link: '/messageTypes',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.files.title.plural',
      link: '/files',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.messageTemplates.title.plural',
      link: '/messageTemplates',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.messageTemplateLangVariants.title.plural',
      link: '/messageTemplateLangVariants',
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
