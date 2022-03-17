/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
} from 'react-admin';
import AppLoginsUserIdTab from './tabs/AppLoginsUserIdTab';
import AppRefreshTokensUserIdTab from './tabs/AppRefreshTokensUserIdTab';
import AuditLogsUserIdTab from './tabs/AuditLogsUserIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUserShow: FC<ShowProps> = (props: ShowProps) => (
  <Show actions={<DefaultActions />} {...props}>
    <TabbedShowLayout>
      <MainTab label='Summary' />
      {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
      <AppLoginsUserIdTab label='Логины пользователей' path='appLogins-userId' />
      <AppRefreshTokensUserIdTab label='App refresh tokens' path='appRefreshTokens-userId' />
      <AuditLogsUserIdTab label='Аудит' path='auditLogs-userId' />
    </TabbedShowLayout>
  </Show>
);

export default DefaultUserShow;
