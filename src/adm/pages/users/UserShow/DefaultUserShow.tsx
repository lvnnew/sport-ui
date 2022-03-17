/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import AppLoginsUserIdTab from './tabs/AppLoginsUserIdTab';
import AppRefreshTokensUserIdTab from './tabs/AppRefreshTokensUserIdTab';
import AuditLogsUserIdTab from './tabs/AuditLogsUserIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUserShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} {...props}>
      <TabbedShowLayout>
        <MainTab label='Summary' />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <AppLoginsUserIdTab label={translate('catalogs.appLogins')} path='appLogins-userId' />
        <AppRefreshTokensUserIdTab label={translate('catalogs.appRefreshTokens')} path='appRefreshTokens-userId' />
        <AuditLogsUserIdTab label={translate('catalogs.auditLogs')} path='auditLogs-userId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultUserShow;
