import {MenuElement} from '../uiLib/menu/MenuItem';

// DO NOT EDIT! THIS IS GENERATED FILE

const getDefaultMenu = () => {
  const menuData: MenuElement[] = [
    {
      label: 'catalogs.players.title.plural',
      link: '/players',
      icon: 'PersonRounded',
      debugOnly: false,
      permissions: ['players.all'],
    },
    {
      label: 'catalogs.teams.title.plural',
      link: '/teams',
      icon: 'GroupRounded',
      debugOnly: false,
      permissions: ['teams.all'],
    },
    {
      label: 'Турниры',
      icon: 'EmojiEventsOutlined',
      debugOnly: false,
      permissions: [
        'competitions.all',
        'organizators.all',
        'teamForCompetitions.all',
        'playerForCompetitionTeams.all',
        'playerCompetitionRatings.all',
      ],
      children: [
        {
          label: 'catalogs.competitions.title.plural',
          link: '/competitions',
          icon: 'EmojiEventsOutlined',
          debugOnly: false,
          permissions: ['competitions.all'],
        },
        {
          label: 'catalogs.organizators.title.plural',
          link: '/organizators',
          icon: 'CasesOutlined',
          debugOnly: false,
          permissions: ['organizators.all'],
        },
        {
          label: 'catalogs.teamForCompetitions.title.plural',
          link: '/teamForCompetitions',
          icon: 'GroupsOutlined',
          debugOnly: false,
          permissions: ['teamForCompetitions.all'],
        },
        {
          label: 'catalogs.playerForCompetitionTeams.title.plural',
          link: '/playerForCompetitionTeams',
          icon: 'DirectionsRunOutlined',
          debugOnly: false,
          permissions: ['playerForCompetitionTeams.all'],
        },
        {
          label: 'catalogs.playerCompetitionRatings.title.plural',
          link: '/playerCompetitionRatings',
          icon: 'TrendingUpOutlined',
          debugOnly: false,
          permissions: ['playerCompetitionRatings.all'],
        },
      ],
    },
    {
      label: 'Матчи',
      icon: 'SportsSoccerOutlined',
      debugOnly: false,
      permissions: [
        'commenting',
        'matches.all',
        'matchVideos.all',
        'matchRequests.all',
        'playerMatchRatings.all',
      ],
      children: [
        {
          label: 'Комментирование',
          link: '/commenting',
          icon: 'DetailsOutlined',
          debugOnly: false,
          permissions: ['commenting'],
        },
        {
          label: 'catalogs.matches.title.plural',
          link: '/matches',
          icon: 'SportsSoccerOutlined',
          debugOnly: false,
          permissions: ['matches.all'],
        },
        {
          label: 'catalogs.matchVideos.title.plural',
          link: '/matchVideos',
          icon: 'SmartDisplayOutlined',
          debugOnly: false,
          permissions: ['matchVideos.all'],
        },
        {
          label: 'catalogs.matchRequests.title.plural',
          link: '/matchRequests',
          icon: 'CreateOutlined',
          debugOnly: false,
          permissions: ['matchRequests.all'],
        },
        {
          label: 'catalogs.playerMatchRatings.title.plural',
          link: '/playerMatchRatings',
          icon: 'TrendingUpOutlined',
          debugOnly: false,
          permissions: ['playerMatchRatings.all'],
        },
      ],
    },
    {
      label: 'Отчеты',
      icon: 'AssessmentOutlined',
      debugOnly: false,
      permissions: [
        'reportForParents.all',
        'reportForClubs.all',
        'reportForOrganizations.all',
        'reportForTeams.all',
        'teamMatchReports.all',
      ],
      children: [
        {
          label: 'catalogs.reportForParents.title.plural',
          link: '/reportForParents',
          icon: 'AssessmentOutlined',
          debugOnly: false,
          permissions: ['reportForParents.all'],
        },
        {
          label: 'catalogs.reportForClubs.title.plural',
          link: '/reportForClubs',
          icon: 'AssessmentOutlined',
          debugOnly: false,
          permissions: ['reportForClubs.all'],
        },
        {
          label: 'catalogs.reportForOrganizations.title.plural',
          link: '/reportForOrganizations',
          icon: 'AssessmentOutlined',
          debugOnly: false,
          permissions: ['reportForOrganizations.all'],
        },
        {
          label: 'catalogs.reportForTeams.title.plural',
          link: '/reportForTeams',
          icon: 'AssessmentOutlined',
          debugOnly: false,
          permissions: ['reportForTeams.all'],
        },
        {
          label: 'catalogs.teamMatchReports.title.plural',
          link: '/teamMatchReports',
          icon: 'AssessmentOutlined',
          debugOnly: false,
          permissions: ['teamMatchReports.all'],
        },
      ],
    },
    {
      label: 'app.catalogs',
      icon: 'ImportContactsOutlined',
      debugOnly: true,
      permissions: [
        'eventTypes.all',
        'playerAggregatedRoles.all',
        'playerRoles.all',
        'playerForMatchRequests.all',
        'teamMatchLists.all',
        'playerForTeamMatchLists.all',
        'parents.all',
        'clubs.all',
        'teamForPlayers.all',
        'periodTypes.all',
        'glossaries.all',
        'playerRanks.all',
        'eventTypeCategories.all',
        'historyOfPlayerRoles.all',
        'events.all',
        'matchPeriodMarkups.all',
      ],
      children: [
        {
          label: 'catalogs.eventTypes.title.plural',
          link: '/eventTypes',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['eventTypes.all'],
        },
        {
          label: 'catalogs.playerAggregatedRoles.title.plural',
          link: '/playerAggregatedRoles',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['playerAggregatedRoles.all'],
        },
        {
          label: 'catalogs.playerRoles.title.plural',
          link: '/playerRoles',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['playerRoles.all'],
        },
        {
          label: 'catalogs.playerForMatchRequests.title.plural',
          link: '/playerForMatchRequests',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['playerForMatchRequests.all'],
        },
        {
          label: 'catalogs.teamMatchLists.title.plural',
          link: '/teamMatchLists',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['teamMatchLists.all'],
        },
        {
          label: 'catalogs.playerForTeamMatchLists.title.plural',
          link: '/playerForTeamMatchLists',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['playerForTeamMatchLists.all'],
        },
        {
          label: 'catalogs.parents.title.plural',
          link: '/parents',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['parents.all'],
        },
        {
          label: 'catalogs.clubs.title.plural',
          link: '/clubs',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['clubs.all'],
        },
        {
          label: 'catalogs.teamForPlayers.title.plural',
          link: '/teamForPlayers',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['teamForPlayers.all'],
        },
        {
          label: 'catalogs.periodTypes.title.plural',
          link: '/periodTypes',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['periodTypes.all'],
        },
        {
          label: 'catalogs.glossaries.title.plural',
          link: '/glossaries',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['glossaries.all'],
        },
        {
          label: 'catalogs.playerRanks.title.plural',
          link: '/playerRanks',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['playerRanks.all'],
        },
        {
          label: 'catalogs.eventTypeCategories.title.plural',
          link: '/eventTypeCategories',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['eventTypeCategories.all'],
        },
        {
          label: 'catalogs.historyOfPlayerRoles.title.plural',
          link: '/historyOfPlayerRoles',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['historyOfPlayerRoles.all'],
        },
        {
          label: 'catalogs.events.title.plural',
          link: '/events',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['events.all'],
        },
        {
          label: 'catalogs.matchPeriodMarkups.title.plural',
          link: '/matchPeriodMarkups',
          icon: 'ImportContactsOutlined',
          debugOnly: false,
          permissions: ['matchPeriodMarkups.all'],
        },
      ],
    },
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
    {
      label: 'documents.events.title.plural',
      link: '/events',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
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
      label: 'catalogs.managerLoginTypes.title.plural',
      link: '/managerLoginTypes',
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
      label: 'catalogs.wscContacts.title.plural',
      link: '/wscContacts',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.wscMessages.title.plural',
      link: '/wscMessages',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.wscUsers.title.plural',
      link: '/wscUsers',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.playerAggregatedRoles.title.plural',
      link: '/playerAggregatedRoles',
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
      label: 'catalogs.matchVideos.title.plural',
      link: '/matchVideos',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.glossaries.title.plural',
      link: '/glossaries',
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
      label: 'catalogs.playerForMatchRequests.title.plural',
      link: '/playerForMatchRequests',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.matchRequests.title.plural',
      link: '/matchRequests',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.players.title.plural',
      link: '/players',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.playerForTeamMatchLists.title.plural',
      link: '/playerForTeamMatchLists',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.teamForPlayers.title.plural',
      link: '/teamForPlayers',
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
      label: 'catalogs.historyOfPlayerRoles.title.plural',
      link: '/historyOfPlayerRoles',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.eventTypeCategories.title.plural',
      link: '/eventTypeCategories',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.clubs.title.plural',
      link: '/clubs',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.teamMatchReports.title.plural',
      link: '/teamMatchReports',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.teams.title.plural',
      link: '/teams',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.teamForCompetitions.title.plural',
      link: '/teamForCompetitions',
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
      label: 'catalogs.matches.title.plural',
      link: '/matches',
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
      label: 'catalogs.organizators.title.plural',
      link: '/organizators',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.entitiesTrackings.title.plural',
      link: '/entitiesTrackings',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.reportForClubs.title.plural',
      link: '/reportForClubs',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.reportForTeams.title.plural',
      link: '/reportForTeams',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.reportForOrganizations.title.plural',
      link: '/reportForOrganizations',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.reportForParents.title.plural',
      link: '/reportForParents',
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
      label: 'catalogs.matchPeriodMarkups.title.plural',
      link: '/matchPeriodMarkups',
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
      label: 'catalogs.playerRanks.title.plural',
      link: '/playerRanks',
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
      label: 'catalogs.playerCompetitionRatings.title.plural',
      link: '/playerCompetitionRatings',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.playerMatchRatings.title.plural',
      link: '/playerMatchRatings',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.parents.title.plural',
      link: '/parents',
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
      label: 'catalogs.playerRoles.title.plural',
      link: '/playerRoles',
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
      label: 'catalogs.teamMatchLists.title.plural',
      link: '/teamMatchLists',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'catalogs.playerForCompetitionTeams.title.plural',
      link: '/playerForCompetitionTeams',
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
      label: 'catalogs.matchStatuses.title.plural',
      link: '/matchStatuses',
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
      label: 'catalogs.periodTypes.title.plural',
      link: '/periodTypes',
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
      label: 'catalogs.eventTypes.title.plural',
      link: '/eventTypes',
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
      label: 'catalogs.competitions.title.plural',
      link: '/competitions',
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
