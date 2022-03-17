/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
} from 'react-admin';
import AutogenerationHistoryEntriesAutogenerationRuleIdTab from './tabs/AutogenerationHistoryEntriesAutogenerationRuleIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationRuleShow: FC<ShowProps> = (props: ShowProps) => (
  <Show actions={<DefaultActions />} {...props}>
    <TabbedShowLayout>
      <MainTab label='Summary' />
      {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
      <AutogenerationHistoryEntriesAutogenerationRuleIdTab label='История автогенерации' path='autogenerationHistoryEntries-autogenerationRuleId' />
    </TabbedShowLayout>
  </Show>
);

export default DefaultAutogenerationRuleShow;
