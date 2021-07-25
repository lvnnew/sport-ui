/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
} from 'react-admin';
import {
} from 'react-admin';
import ManagerLoginsManagerIdTab from './tabs/ManagerLoginsManagerIdTab';
import ManagersToRolesManageIdTab from './tabs/ManagersToRolesManageIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerShow: FC<ShowProps> = (props: ShowProps) => (
  <Show {...props}>
    <TabbedShowLayout>
      <MainTab label="Summary" />
      {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
      <ManagerLoginsManagerIdTab label="Manager logins" path="managerLogins-managerId" />
      <ManagersToRolesManageIdTab label="Managers To Roles" path="managersToRoles-manageId" />
    </TabbedShowLayout>
  </Show>
);

export default DefaultManagerShow;
