/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import ManagersTenantIdTab from './tabs/ManagersTenantIdTab';
import UsersTenantIdTab from './tabs/UsersTenantIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTenantShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} {...props}>
      <TabbedShowLayout>
        <MainTab label='Summary' />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <ManagersTenantIdTab label={translate('catalogs.managers')} path='managers-tenantId' />
        <UsersTenantIdTab label={translate('catalogs.users')} path='users-tenantId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultTenantShow;
