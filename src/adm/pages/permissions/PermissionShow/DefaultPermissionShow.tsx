/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import ManagersToPermissionsPermissionIdTab from './tabs/ManagersToPermissionsPermissionIdTab';
import RolesToPermissionsPermissionIdTab from './tabs/RolesToPermissionsPermissionIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPermissionShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <ManagersToPermissionsPermissionIdTab label={translate('catalogs.managersToPermissions.title')} path='managersToPermissions-permissionId' />
        <RolesToPermissionsPermissionIdTab label={translate('catalogs.rolesToPermissions.title')} path='rolesToPermissions-permissionId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultPermissionShow;
