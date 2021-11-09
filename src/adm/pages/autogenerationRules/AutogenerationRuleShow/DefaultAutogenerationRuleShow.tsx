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

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationRuleShow: FC<ShowProps> = (props: ShowProps) => (
  <Show {...props}>
    <TabbedShowLayout>
      <MainTab label='Summary' />
      {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
      <AutogenerationHistoryEntriesAutogenerationRuleIdTab label='Autogeneration History' path='autogenerationHistoryEntries-autogenerationRuleId' />
    </TabbedShowLayout>
  </Show>
);

export default DefaultAutogenerationRuleShow;
