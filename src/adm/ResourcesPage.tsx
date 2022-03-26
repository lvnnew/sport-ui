import React, {
  FC,
} from 'react';
import NumberWiget from '../widgets/NumberWiget';
import {
  gql,
} from '@apollo/client';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {useTranslate} from 'react-admin';

const useStyles = makeStyles(() => createStyles({
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

// DO NOT EDIT! THIS IS GENERATED FILE

const ResourcesPage: FC = () => {
  const classes = useStyles();
  const translate = useTranslate();

  return (
    <div className={classes.flex}>
      <NumberWiget
        request={gql`
          query {
            _allAdmRefreshTokensMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAdmRefreshTokensMeta?.count}
        title={translate('catalogs.admRefreshTokens.title')}
        to='/admRefreshTokens'
      />
      <NumberWiget
        request={gql`
          query {
            _allAppLoginsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAppLoginsMeta?.count}
        title={translate('catalogs.appLogins.title')}
        to='/appLogins'
      />
      <NumberWiget
        request={gql`
          query {
            _allAppRefreshTokensMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAppRefreshTokensMeta?.count}
        title={translate('catalogs.appRefreshTokens.title')}
        to='/appRefreshTokens'
      />
      <NumberWiget
        request={gql`
          query {
            _allAuditLogActionTypesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAuditLogActionTypesMeta?.count}
        title={translate('catalogs.auditLogActionTypes.title')}
        to='/auditLogActionTypes'
      />
      <NumberWiget
        request={gql`
          query {
            _allAuditLogsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAuditLogsMeta?.count}
        title={translate('catalogs.auditLogs.title')}
        to='/auditLogs'
      />
      <NumberWiget
        request={gql`
          query {
            _allAutogenerationHistoryEntriesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAutogenerationHistoryEntriesMeta?.count}
        title={translate('catalogs.autogenerationHistoryEntries.title')}
        to='/autogenerationHistoryEntries'
      />
      <NumberWiget
        request={gql`
          query {
            _allAutogenerationRulesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAutogenerationRulesMeta?.count}
        title={translate('catalogs.autogenerationRules.title')}
        to='/autogenerationRules'
      />
      <NumberWiget
        request={gql`
          query {
            _allDelegationsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allDelegationsMeta?.count}
        title={translate('catalogs.delegations.title')}
        to='/delegations'
      />
      <NumberWiget
        request={gql`
          query {
            _allEntitiesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allEntitiesMeta?.count}
        title={translate('catalogs.entities.title')}
        to='/entities'
      />
      <NumberWiget
        request={gql`
          query {
            _allFilesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allFilesMeta?.count}
        title={translate('catalogs.files.title')}
        to='/files'
      />
      <NumberWiget
        request={gql`
          query {
            _allLanguagesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allLanguagesMeta?.count}
        title={translate('catalogs.languages.title')}
        to='/languages'
      />
      <NumberWiget
        request={gql`
          query {
            _allManagerLoginsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allManagerLoginsMeta?.count}
        title={translate('catalogs.managerLogins.title')}
        to='/managerLogins'
      />
      <NumberWiget
        request={gql`
          query {
            _allManagersMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allManagersMeta?.count}
        title={translate('catalogs.managers.title')}
        to='/managers'
      />
      <NumberWiget
        request={gql`
          query {
            _allManagersToPermissionsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allManagersToPermissionsMeta?.count}
        title={translate('catalogs.managersToPermissions.title')}
        to='/managersToPermissions'
      />
      <NumberWiget
        request={gql`
          query {
            _allManagersToRolesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allManagersToRolesMeta?.count}
        title={translate('catalogs.managersToRoles.title')}
        to='/managersToRoles'
      />
      <NumberWiget
        request={gql`
          query {
            _allMessageTemplatesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMessageTemplatesMeta?.count}
        title={translate('catalogs.messageTemplates.title')}
        to='/messageTemplates'
      />
      <NumberWiget
        request={gql`
          query {
            _allMessageTypesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allMessageTypesMeta?.count}
        title={translate('catalogs.messageTypes.title')}
        to='/messageTypes'
      />
      <NumberWiget
        request={gql`
          query {
            _allPermissionsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allPermissionsMeta?.count}
        title={translate('catalogs.permissions.title')}
        to='/permissions'
      />
      <NumberWiget
        request={gql`
          query {
            _allRolesMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allRolesMeta?.count}
        title={translate('catalogs.roles.title')}
        to='/roles'
      />
      <NumberWiget
        request={gql`
          query {
            _allRolesToPermissionsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allRolesToPermissionsMeta?.count}
        title={translate('catalogs.rolesToPermissions.title')}
        to='/rolesToPermissions'
      />
      <NumberWiget
        request={gql`
          query {
            _allStatsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allStatsMeta?.count}
        title={translate('catalogs.stats.title')}
        to='/stats'
      />
      <NumberWiget
        request={gql`
          query {
            _allTagsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allTagsMeta?.count}
        title={translate('catalogs.tags.title')}
        to='/tags'
      />
      <NumberWiget
        request={gql`
          query {
            _allTenantsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allTenantsMeta?.count}
        title={translate('catalogs.tenants.title')}
        to='/tenants'
      />
      <NumberWiget
        request={gql`
          query {
            _allUnitsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allUnitsMeta?.count}
        title={translate('catalogs.units.title')}
        to='/units'
      />
      <NumberWiget
        request={gql`
          query {
            _allUsersMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allUsersMeta?.count}
        title={translate('catalogs.users.title')}
        to='/users'
      />
    </div>
  );
};

export default ResourcesPage;
