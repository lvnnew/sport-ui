/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
} from 'react-admin';
import ManagerLoginsManagerIdTab from './tabs/ManagerLoginsManagerIdTab';
import ManagersToRolesManagerIdTab from './tabs/ManagersToRolesManagerIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerShow: FC<ShowProps> = (props: ShowProps) => (
  <Show {...props}>
    <TabbedShowLayout>
      <MainTab label='Summary' />
      {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
      <ManagerLoginsManagerIdTab label='Manager logins' path='managerLogins-managerId' />
      <ManagersToRolesManagerIdTab label='Managers To Roles' path='managersToRoles-managerId' />
    </TabbedShowLayout>
  </Show>
);

export default DefaultManagerShow;
