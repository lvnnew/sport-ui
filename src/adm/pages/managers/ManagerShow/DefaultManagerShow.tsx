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

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} {...props}>
      <TabbedShowLayout>
        <MainTab label='Summary' />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <AdmRefreshTokensManagerIdTab label={translate('catalogs.admRefreshTokens.title')} path='admRefreshTokens-managerId' />
        <AuditLogsManagerIdTab label={translate('catalogs.auditLogs.title')} path='auditLogs-managerId' />
        <DelegationsFromIdTab label={translate('catalogs.delegations.title')} path='delegations-fromId' />
        <DelegationsToIdTab label={translate('catalogs.delegations.title')} path='delegations-toId' />
        <ManagerLoginsManagerIdTab label={translate('catalogs.managerLogins.title')} path='managerLogins-managerId' />
        <ManagersToPermissionsManagerIdTab label={translate('catalogs.managersToPermissions.title')} path='managersToPermissions-managerId' />
        <ManagersToRolesManagerIdTab label={translate('catalogs.managersToRoles.title')} path='managersToRoles-managerId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultManagerShow;
