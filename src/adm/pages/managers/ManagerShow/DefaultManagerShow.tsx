/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
} from 'react-admin';
import DelegationsFromIdTab from './tabs/DelegationsFromIdTab';
import DelegationsToIdTab from './tabs/DelegationsToIdTab';
import ManagerLoginsManagerIdTab from './tabs/ManagerLoginsManagerIdTab';
import ManagersToPermissionsManagerIdTab from './tabs/ManagersToPermissionsManagerIdTab';
import ManagersToRolesManagerIdTab from './tabs/ManagersToRolesManagerIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerShow: FC<ShowProps> = (props: ShowProps) => (
  <Show {...props}>
    <TabbedShowLayout>
      <MainTab label='Summary' />
      {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
      <DelegationsFromIdTab label='Delegations' path='delegations-fromId' />
      <DelegationsToIdTab label='Delegations' path='delegations-toId' />
      <ManagerLoginsManagerIdTab label='Manager logins' path='managerLogins-managerId' />
      <ManagersToPermissionsManagerIdTab label='Managers To Permissions' path='managersToPermissions-managerId' />
      <ManagersToRolesManagerIdTab label='Managers To Roles' path='managersToRoles-managerId' />
    </TabbedShowLayout>
  </Show>
);

export default DefaultManagerShow;
