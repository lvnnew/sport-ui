/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import ManagersToRolesRoleIdTab from './tabs/ManagersToRolesRoleIdTab';
import RolesToPermissionsRoleIdTab from './tabs/RolesToPermissionsRoleIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRoleShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <ManagersToRolesRoleIdTab label={translate('catalogs.managersToRoles.title.plural')} path='managersToRoles-roleId' />
        <RolesToPermissionsRoleIdTab label={translate('catalogs.rolesToPermissions.title.plural')} path='rolesToPermissions-roleId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultRoleShow;
