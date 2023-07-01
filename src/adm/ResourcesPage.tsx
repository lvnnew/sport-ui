import React, {
  FC,
} from 'react';
import NumberWidget from '../widgets/NumberWidget';
import {
  gql,
} from '@apollo/client';
import {useTranslate} from 'react-admin';
import Grid from '@mui/material/Grid';

// DO NOT EDIT! THIS IS GENERATED FILE

const ResourcesPage: FC = () => {
  const translate = useTranslate();

  return (
    <Grid container>
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
    </Grid>
  );
};

export default ResourcesPage;
