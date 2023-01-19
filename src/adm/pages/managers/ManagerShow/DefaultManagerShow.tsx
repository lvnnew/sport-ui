/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import AdmRefreshTokensManagerIdTab from './tabs/AdmRefreshTokensManagerIdTab';
import AuditLogsManagerIdTab from './tabs/AuditLogsManagerIdTab';
import DelegationsFromIdTab from './tabs/DelegationsFromIdTab';
import DelegationsToIdTab from './tabs/DelegationsToIdTab';
import ManagerLoginsManagerIdTab from './tabs/ManagerLoginsManagerIdTab';
import ManagersToPermissionsManagerIdTab from './tabs/ManagersToPermissionsManagerIdTab';
import ManagersToRolesManagerIdTab from './tabs/ManagersToRolesManagerIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <AdmRefreshTokensManagerIdTab label={translate('catalogs.admRefreshTokens.title.plural')} path='admRefreshTokens-managerId' />
        <AuditLogsManagerIdTab label={translate('catalogs.auditLogs.title.plural')} path='auditLogs-managerId' />
        <DelegationsFromIdTab label={translate('catalogs.delegations.title.plural')} path='delegations-fromId' />
        <DelegationsToIdTab label={translate('catalogs.delegations.title.plural')} path='delegations-toId' />
        <ManagerLoginsManagerIdTab label={translate('catalogs.managerLogins.title.plural')} path='managerLogins-managerId' />
        <ManagersToPermissionsManagerIdTab label={translate('catalogs.managersToPermissions.title.plural')} path='managersToPermissions-managerId' />
        <ManagersToRolesManagerIdTab label={translate('catalogs.managersToRoles.title.plural')} path='managersToRoles-managerId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultManagerShow;
