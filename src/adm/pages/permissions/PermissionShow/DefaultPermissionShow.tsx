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
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPermissionShow: FC<ShowProps> = (props: ShowProps) => (
  <Show actions={<DefaultActions />} {...props}>
    <TabbedShowLayout>
      <MainTab label='Summary' />
      {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
      <ManagersToPermissionsPermissionIdTab label='Разрешения менеджеров' path='managersToPermissions-permissionId' />
      <RolesToPermissionsPermissionIdTab label='Разрешения ролей' path='rolesToPermissions-permissionId' />
    </TabbedShowLayout>
  </Show>
);

export default DefaultPermissionShow;
