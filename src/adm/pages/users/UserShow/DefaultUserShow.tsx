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
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUserShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <AppLoginsUserIdTab label={translate('catalogs.appLogins.title.plural')} path='appLogins-userId' />
        <AppRefreshTokensUserIdTab label={translate('catalogs.appRefreshTokens.title.plural')} path='appRefreshTokens-userId' />
        <AuditLogsUserIdTab label={translate('catalogs.auditLogs.title.plural')} path='auditLogs-userId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultUserShow;
