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
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPermissionShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <ManagersToPermissionsPermissionIdTab label={translate('catalogs.managersToPermissions.title.plural')} path='managersToPermissions-permissionId' />
        <RolesToPermissionsPermissionIdTab label={translate('catalogs.rolesToPermissions.title.plural')} path='rolesToPermissions-permissionId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultPermissionShow;
