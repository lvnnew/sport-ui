/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
} from 'react-admin';
import ManagersToPermissionsPermissionIdTab from './tabs/ManagersToPermissionsPermissionIdTab';
import RolesToPermissionsPermissionIdTab from './tabs/RolesToPermissionsPermissionIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPermissionShow: FC<ShowProps> = (props: ShowProps) => (
  <Show {...props}>
    <TabbedShowLayout>
      <MainTab label='Summary' />
      {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
      <ManagersToPermissionsPermissionIdTab label='Managers To Permissions' path='managersToPermissions-permissionId' />
      <RolesToPermissionsPermissionIdTab label='Roles To Permissions' path='rolesToPermissions-permissionId' />
    </TabbedShowLayout>
  </Show>
);

export default DefaultPermissionShow;
