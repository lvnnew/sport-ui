import React, {
  FC,
} from 'react';
import NumberWiget from '../widgets/NumberWiget';
import {
  gql,
} from '@apollo/client';
import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

// DO NOT EDIT! THIS IS GENERATED FILE

const ResourcesPage: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.flex}>
      <NumberWiget
        request={gql`
          query {
            _allAppLoginsMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAppLoginsMeta?.count}
        title='Logins of usual (not admins) users'
        to='/appLogins'
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
        title='Audit'
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
        title='Autogeneration History'
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
        title='Autogeneration Rules'
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
        title='Delegations'
        to='/delegations'
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
        title='Files'
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
        title='Languages'
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
        title='Manager logins'
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
        title='Manager'
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
        title='Managers To Permissions'
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
        title='Managers To Roles'
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
        title='Message templates'
        to='/messageTemplates'
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
        title='Permissions'
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
        title='Roles'
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
        title='Roles To Permissions'
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
        title='Stats'
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
        title='Tags'
        to='/tags'
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
        title='Units'
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
        title='Users'
        to='/users'
      />
    </div>
  );
};

export default ResourcesPage;
