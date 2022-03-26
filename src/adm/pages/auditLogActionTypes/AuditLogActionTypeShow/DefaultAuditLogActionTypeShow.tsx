/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import AuditLogsActionTypeIdTab from './tabs/AuditLogsActionTypeIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAuditLogActionTypeShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} {...props}>
      <TabbedShowLayout>
        <MainTab label='Summary' />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <AuditLogsActionTypeIdTab label={translate('catalogs.auditLogs.title')} path='auditLogs-actionTypeId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultAuditLogActionTypeShow;
