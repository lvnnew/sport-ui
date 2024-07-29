import React, {
  FC,
} from 'react';
import NumberWidget from '../widgets/NumberWidget';
import {
  gql,
} from '@apollo/client';
import {Title, useTranslate} from 'react-admin';
import Grid from '@mui/material/Grid';

// DO NOT EDIT! THIS IS GENERATED FILE

const ResourcesPage: FC = () => {
  const translate = useTranslate();

  return (
    <Grid container>
      <Title title='app.resources' />
      <NumberWidget
        request={gql`
          query {
            _allAdmRefreshTokensMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAdmRefreshTokensMeta?.count}
        title={translate('catalogs.admRefreshTokens.title.plural')}
        to='/admRefreshTokens'
      />
      <NumberWidget
        request={gql`
          query {
            _allAggregateTrackingsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAggregateTrackingsMeta?.count}
        title={translate('infoRegistries.aggregateTrackings.title.plural')}
        to='/aggregateTrackings'
      />
      <NumberWidget
        request={gql`
          query {
            _allAppLoginsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAppLoginsMeta?.count}
        title={translate('catalogs.appLogins.title.plural')}
        to='/appLogins'
      />
      <NumberWidget
        request={gql`
          query {
            _allAppRefreshTokensMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAppRefreshTokensMeta?.count}
        title={translate('catalogs.appRefreshTokens.title.plural')}
        to='/appRefreshTokens'
      />
      <NumberWidget
        request={gql`
          query {
            _allAuditLogActionTypesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAuditLogActionTypesMeta?.count}
        title={translate('catalogs.auditLogActionTypes.title.plural')}
        to='/auditLogActionTypes'
      />
      <NumberWidget
        request={gql`
          query {
            _allAuditLogsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAuditLogsMeta?.count}
        title={translate('catalogs.auditLogs.title.plural')}
        to='/auditLogs'
      />
      <NumberWidget
        request={gql`
          query {
            _allAutogenerationHistoryEntriesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAutogenerationHistoryEntriesMeta?.count}
        title={translate('catalogs.autogenerationHistoryEntries.title.plural')}
        to='/autogenerationHistoryEntries'
      />
      <NumberWidget
        request={gql`
          query {
            _allAutogenerationRulesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAutogenerationRulesMeta?.count}
        title={translate('catalogs.autogenerationRules.title.plural')}
        to='/autogenerationRules'
      />
      <NumberWidget
        request={gql`
          query {
            _allClubsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allClubsMeta?.count}
        title={translate('catalogs.clubs.title.plural')}
        to='/clubs'
      />
      <NumberWidget
        request={gql`
          query {
            _allCompetitionsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allCompetitionsMeta?.count}
        title={translate('catalogs.competitions.title.plural')}
        to='/competitions'
      />
      <NumberWidget
        request={gql`
          query {
            _allConfigurationVariablesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allConfigurationVariablesMeta?.count}
        title={translate('catalogs.configurationVariables.title.plural')}
        to='/configurationVariables'
      />
      <NumberWidget
        request={gql`
          query {
            _allDelegationsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allDelegationsMeta?.count}
        title={translate('catalogs.delegations.title.plural')}
        to='/delegations'
      />
      <NumberWidget
        request={gql`
          query {
            _allEntitiesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allEntitiesMeta?.count}
        title={translate('catalogs.entities.title.plural')}
        to='/entities'
      />
      <NumberWidget
        request={gql`
          query {
            _allEntitiesTrackingsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allEntitiesTrackingsMeta?.count}
        title={translate('catalogs.entitiesTrackings.title.plural')}
        to='/entitiesTrackings'
      />
      <NumberWidget
        request={gql`
          query {
            _allEventTypeCategoriesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allEventTypeCategoriesMeta?.count}
        title={translate('catalogs.eventTypeCategories.title.plural')}
        to='/eventTypeCategories'
      />
      <NumberWidget
        request={gql`
          query {
            _allEventTypesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allEventTypesMeta?.count}
        title={translate('catalogs.eventTypes.title.plural')}
        to='/eventTypes'
      />
      <NumberWidget
        request={gql`
          query {
            _allEventsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allEventsMeta?.count}
        title={translate('documents.events.title.plural')}
        to='/events'
      />
      <NumberWidget
        request={gql`
          query {
            _allFilesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allFilesMeta?.count}
        title={translate('catalogs.files.title.plural')}
        to='/files'
      />
      <NumberWidget
        request={gql`
          query {
            _allGlossariesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allGlossariesMeta?.count}
        title={translate('catalogs.glossaries.title.plural')}
        to='/glossaries'
      />
      <NumberWidget
        request={gql`
          query {
            _allHistoryOfPlayerRolesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allHistoryOfPlayerRolesMeta?.count}
        title={translate('catalogs.historyOfPlayerRoles.title.plural')}
        to='/historyOfPlayerRoles'
      />
      <NumberWidget
        request={gql`
          query {
            _allLanguagesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allLanguagesMeta?.count}
        title={translate('catalogs.languages.title.plural')}
        to='/languages'
      />
      <NumberWidget
        request={gql`
          query {
            _allMailingCampaignStatusesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMailingCampaignStatusesMeta?.count}
        title={translate('catalogs.mailingCampaignStatuses.title.plural')}
        to='/mailingCampaignStatuses'
      />
      <NumberWidget
        request={gql`
          query {
            _allMailingCampaignsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMailingCampaignsMeta?.count}
        title={translate('catalogs.mailingCampaigns.title.plural')}
        to='/mailingCampaigns'
      />
      <NumberWidget
        request={gql`
          query {
            _allMailingMessageStatusesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMailingMessageStatusesMeta?.count}
        title={translate('catalogs.mailingMessageStatuses.title.plural')}
        to='/mailingMessageStatuses'
      />
      <NumberWidget
        request={gql`
          query {
            _allMailingMessagesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMailingMessagesMeta?.count}
        title={translate('catalogs.mailingMessages.title.plural')}
        to='/mailingMessages'
      />
      <NumberWidget
        request={gql`
          query {
            _allMailingTypesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMailingTypesMeta?.count}
        title={translate('catalogs.mailingTypes.title.plural')}
        to='/mailingTypes'
      />
      <NumberWidget
        request={gql`
          query {
            _allManagerLoginTypesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allManagerLoginTypesMeta?.count}
        title={translate('catalogs.managerLoginTypes.title.plural')}
        to='/managerLoginTypes'
      />
      <NumberWidget
        request={gql`
          query {
            _allManagerLoginsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allManagerLoginsMeta?.count}
        title={translate('catalogs.managerLogins.title.plural')}
        to='/managerLogins'
      />
      <NumberWidget
        request={gql`
          query {
            _allManagersMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allManagersMeta?.count}
        title={translate('catalogs.managers.title.plural')}
        to='/managers'
      />
      <NumberWidget
        request={gql`
          query {
            _allManagersToPermissionsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allManagersToPermissionsMeta?.count}
        title={translate('catalogs.managersToPermissions.title.plural')}
        to='/managersToPermissions'
      />
      <NumberWidget
        request={gql`
          query {
            _allManagersToRolesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allManagersToRolesMeta?.count}
        title={translate('catalogs.managersToRoles.title.plural')}
        to='/managersToRoles'
      />
      <NumberWidget
        request={gql`
          query {
            _allMatchPeriodMarkupsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMatchPeriodMarkupsMeta?.count}
        title={translate('catalogs.matchPeriodMarkups.title.plural')}
        to='/matchPeriodMarkups'
      />
      <NumberWidget
        request={gql`
          query {
            _allMatchRequestsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMatchRequestsMeta?.count}
        title={translate('catalogs.matchRequests.title.plural')}
        to='/matchRequests'
      />
      <NumberWidget
        request={gql`
          query {
            _allMatchStatusesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMatchStatusesMeta?.count}
        title={translate('catalogs.matchStatuses.title.plural')}
        to='/matchStatuses'
      />
      <NumberWidget
        request={gql`
          query {
            _allMatchVideosMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMatchVideosMeta?.count}
        title={translate('catalogs.matchVideos.title.plural')}
        to='/matchVideos'
      />
      <NumberWidget
        request={gql`
          query {
            _allMatchesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMatchesMeta?.count}
        title={translate('catalogs.matches.title.plural')}
        to='/matches'
      />
      <NumberWidget
        request={gql`
          query {
            _allMessageTemplateLangVariantsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMessageTemplateLangVariantsMeta?.count}
        title={translate('catalogs.messageTemplateLangVariants.title.plural')}
        to='/messageTemplateLangVariants'
      />
      <NumberWidget
        request={gql`
          query {
            _allMessageTemplatesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMessageTemplatesMeta?.count}
        title={translate('catalogs.messageTemplates.title.plural')}
        to='/messageTemplates'
      />
      <NumberWidget
        request={gql`
          query {
            _allMessageTypesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMessageTypesMeta?.count}
        title={translate('catalogs.messageTypes.title.plural')}
        to='/messageTypes'
      />
      <NumberWidget
        request={gql`
          query {
            _allOrganizatorsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allOrganizatorsMeta?.count}
        title={translate('catalogs.organizators.title.plural')}
        to='/organizators'
      />
      <NumberWidget
        request={gql`
          query {
            _allParentsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allParentsMeta?.count}
        title={translate('catalogs.parents.title.plural')}
        to='/parents'
      />
      <NumberWidget
        request={gql`
          query {
            _allPeriodTypesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allPeriodTypesMeta?.count}
        title={translate('catalogs.periodTypes.title.plural')}
        to='/periodTypes'
      />
      <NumberWidget
        request={gql`
          query {
            _allPermissionsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allPermissionsMeta?.count}
        title={translate('catalogs.permissions.title.plural')}
        to='/permissions'
      />
      <NumberWidget
        request={gql`
          query {
            _allPlayerAggregatedRolesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allPlayerAggregatedRolesMeta?.count}
        title={translate('catalogs.playerAggregatedRoles.title.plural')}
        to='/playerAggregatedRoles'
      />
      <NumberWidget
        request={gql`
          query {
            _allPlayerCompetitionRatingsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allPlayerCompetitionRatingsMeta?.count}
        title={translate('catalogs.playerCompetitionRatings.title.plural')}
        to='/playerCompetitionRatings'
      />
      <NumberWidget
        request={gql`
          query {
            _allPlayerForCompetitionTeamsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allPlayerForCompetitionTeamsMeta?.count}
        title={translate('catalogs.playerForCompetitionTeams.title.plural')}
        to='/playerForCompetitionTeams'
      />
      <NumberWidget
        request={gql`
          query {
            _allPlayerForMatchRequestsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allPlayerForMatchRequestsMeta?.count}
        title={translate('catalogs.playerForMatchRequests.title.plural')}
        to='/playerForMatchRequests'
      />
      <NumberWidget
        request={gql`
          query {
            _allPlayerForTeamMatchListsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allPlayerForTeamMatchListsMeta?.count}
        title={translate('catalogs.playerForTeamMatchLists.title.plural')}
        to='/playerForTeamMatchLists'
      />
      <NumberWidget
        request={gql`
          query {
            _allPlayerMatchRatingsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allPlayerMatchRatingsMeta?.count}
        title={translate('catalogs.playerMatchRatings.title.plural')}
        to='/playerMatchRatings'
      />
      <NumberWidget
        request={gql`
          query {
            _allPlayerRanksMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allPlayerRanksMeta?.count}
        title={translate('catalogs.playerRanks.title.plural')}
        to='/playerRanks'
      />
      <NumberWidget
        request={gql`
          query {
            _allPlayerRolesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allPlayerRolesMeta?.count}
        title={translate('catalogs.playerRoles.title.plural')}
        to='/playerRoles'
      />
      <NumberWidget
        request={gql`
          query {
            _allPlayersMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allPlayersMeta?.count}
        title={translate('catalogs.players.title.plural')}
        to='/players'
      />
      <NumberWidget
        request={gql`
          query {
            _allReportForClubsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allReportForClubsMeta?.count}
        title={translate('catalogs.reportForClubs.title.plural')}
        to='/reportForClubs'
      />
      <NumberWidget
        request={gql`
          query {
            _allReportForOrganizationsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allReportForOrganizationsMeta?.count}
        title={translate('catalogs.reportForOrganizations.title.plural')}
        to='/reportForOrganizations'
      />
      <NumberWidget
        request={gql`
          query {
            _allReportForParentsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allReportForParentsMeta?.count}
        title={translate('catalogs.reportForParents.title.plural')}
        to='/reportForParents'
      />
      <NumberWidget
        request={gql`
          query {
            _allReportForTeamsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allReportForTeamsMeta?.count}
        title={translate('catalogs.reportForTeams.title.plural')}
        to='/reportForTeams'
      />
      <NumberWidget
        request={gql`
          query {
            _allRolesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allRolesMeta?.count}
        title={translate('catalogs.roles.title.plural')}
        to='/roles'
      />
      <NumberWidget
        request={gql`
          query {
            _allRolesToPermissionsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allRolesToPermissionsMeta?.count}
        title={translate('catalogs.rolesToPermissions.title.plural')}
        to='/rolesToPermissions'
      />
      <NumberWidget
        request={gql`
          query {
            _allStatsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allStatsMeta?.count}
        title={translate('catalogs.stats.title.plural')}
        to='/stats'
      />
      <NumberWidget
        request={gql`
          query {
            _allTagsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allTagsMeta?.count}
        title={translate('catalogs.tags.title.plural')}
        to='/tags'
      />
      <NumberWidget
        request={gql`
          query {
            _allTeamForCompetitionsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allTeamForCompetitionsMeta?.count}
        title={translate('catalogs.teamForCompetitions.title.plural')}
        to='/teamForCompetitions'
      />
      <NumberWidget
        request={gql`
          query {
            _allTeamForPlayersMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allTeamForPlayersMeta?.count}
        title={translate('catalogs.teamForPlayers.title.plural')}
        to='/teamForPlayers'
      />
      <NumberWidget
        request={gql`
          query {
            _allTeamMatchListsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allTeamMatchListsMeta?.count}
        title={translate('catalogs.teamMatchLists.title.plural')}
        to='/teamMatchLists'
      />
      <NumberWidget
        request={gql`
          query {
            _allTeamMatchReportsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allTeamMatchReportsMeta?.count}
        title={translate('catalogs.teamMatchReports.title.plural')}
        to='/teamMatchReports'
      />
      <NumberWidget
        request={gql`
          query {
            _allTeamsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allTeamsMeta?.count}
        title={translate('catalogs.teams.title.plural')}
        to='/teams'
      />
      <NumberWidget
        request={gql`
          query {
            _allTemplateStylesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allTemplateStylesMeta?.count}
        title={translate('catalogs.templateStyles.title.plural')}
        to='/templateStyles'
      />
      <NumberWidget
        request={gql`
          query {
            _allTenantsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allTenantsMeta?.count}
        title={translate('catalogs.tenants.title.plural')}
        to='/tenants'
      />
      <NumberWidget
        request={gql`
          query {
            _allUnitsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allUnitsMeta?.count}
        title={translate('catalogs.units.title.plural')}
        to='/units'
      />
      <NumberWidget
        request={gql`
          query {
            _allUsersMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allUsersMeta?.count}
        title={translate('catalogs.users.title.plural')}
        to='/users'
      />
      <NumberWidget
        request={gql`
          query {
            _allWscContactsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allWscContactsMeta?.count}
        title={translate('catalogs.wscContacts.title.plural')}
        to='/wscContacts'
      />
      <NumberWidget
        request={gql`
          query {
            _allWscMessagesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allWscMessagesMeta?.count}
        title={translate('catalogs.wscMessages.title.plural')}
        to='/wscMessages'
      />
      <NumberWidget
        request={gql`
          query {
            _allWscUsersMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allWscUsersMeta?.count}
        title={translate('catalogs.wscUsers.title.plural')}
        to='/wscUsers'
      />
    </Grid>
  );
};

export default ResourcesPage;
