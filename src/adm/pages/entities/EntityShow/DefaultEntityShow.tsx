/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import AuditLogsEntityTypeIdTab from './tabs/AuditLogsEntityTypeIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultEntityShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} {...props}>
      <TabbedShowLayout>
        <MainTab label='Summary' />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <AuditLogsEntityTypeIdTab label={translate('catalogs.auditLogs')} path='auditLogs-entityTypeId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultEntityShow;
