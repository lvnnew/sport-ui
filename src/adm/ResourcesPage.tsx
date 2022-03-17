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
            _allAdmRefreshTokensMeta {
              count
            }
          }
        `}
        resultToValue={result => result?._allAdmRefreshTokensMeta?.count}
        title='Ui refresh tokens'
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
        title='Логины пользователей'
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
        title='App refresh tokens'
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
        title='Типы событий аудита'
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
        title='Аудит'
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
        title='История автогенерации'
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
        title='Правила автогенерации'
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
        title='Делегирование'
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
        title='Сущности'
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
        title='Логины менеджеров'
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
        title='Менеджеры'
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
        title='Разрешения менеджеров'
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
        title='Роли менеджеров'
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
        title='Шаблоны сообщений'
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
        title='Типы сообщений'
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
        title='Разрешения'
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
        title='Роли'
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
        title='Разрешения ролей'
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
        title='Пользователи'
        to='/users'
      />
    </div>
  );
};

export default ResourcesPage;
