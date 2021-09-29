/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
} from 'react-admin';
import ManagersToRolesRoleIdTab from './tabs/ManagersToRolesRoleIdTab';
import RolesToPermissionsRoleIdTab from './tabs/RolesToPermissionsRoleIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRoleShow: FC<ShowProps> = (props: ShowProps) => (
  <Show {...props}>
    <TabbedShowLayout>
      <MainTab label='Summary' />
      {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
      <ManagersToRolesRoleIdTab label='Managers To Roles' path='managersToRoles-roleId' />
      <RolesToPermissionsRoleIdTab label='Roles To Permissions' path='rolesToPermissions-roleId' />
    </TabbedShowLayout>
  </Show>
);

export default DefaultRoleShow;
