/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
} from 'react-admin';
import MessageTemplatesMessageTypeIdTab from './tabs/MessageTemplatesMessageTypeIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTypeShow: FC<ShowProps> = (props: ShowProps) => (
  <Show actions={<DefaultActions />} {...props}>
    <TabbedShowLayout>
      <MainTab label='Summary' />
      {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
      <MessageTemplatesMessageTypeIdTab label='Message templates' path='messageTemplates-messageTypeId' />
    </TabbedShowLayout>
  </Show>
);

export default DefaultMessageTypeShow;
