/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
} from 'react-admin';
import AuditLogsActionTypeIdTab from './tabs/AuditLogsActionTypeIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAuditLogActionTypeShow: FC<ShowProps> = (props: ShowProps) => (
  <Show actions={<DefaultActions />} {...props}>
    <TabbedShowLayout>
      <MainTab label='Summary' />
      {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
      <AuditLogsActionTypeIdTab label='Audit' path='auditLogs-actionTypeId' />
    </TabbedShowLayout>
  </Show>
);

export default DefaultAuditLogActionTypeShow;
