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
import CatalogTitle from '../../../../raUiLib/CatalogTitle';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUserShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <AppLoginsUserIdTab label={translate('catalogs.appLogins.title')} path='appLogins-userId' />
        <AppRefreshTokensUserIdTab label={translate('catalogs.appRefreshTokens.title')} path='appRefreshTokens-userId' />
        <AuditLogsUserIdTab label={translate('catalogs.auditLogs.title')} path='auditLogs-userId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultUserShow;
