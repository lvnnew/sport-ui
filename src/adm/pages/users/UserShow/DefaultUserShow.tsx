/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
} from 'react-admin';
import {
} from 'react-admin';
import AppLoginsUserIdTab from './tabs/AppLoginsUserIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUserShow: FC<ShowProps> = (props: ShowProps) => (
  <Show {...props}>
    <TabbedShowLayout>
      <MainTab label="Summary" />
      {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
      <AppLoginsUserIdTab label="Logins of usual (not admins) users" path="appLogins-userId" />
    </TabbedShowLayout>
  </Show>
);

export default DefaultUserShow;
