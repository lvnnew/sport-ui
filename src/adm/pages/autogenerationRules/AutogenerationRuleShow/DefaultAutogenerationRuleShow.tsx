/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import AutogenerationHistoryEntriesAutogenerationRuleIdTab from './tabs/AutogenerationHistoryEntriesAutogenerationRuleIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationRuleShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} {...props}>
      <TabbedShowLayout>
        <MainTab label='Summary' />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <AutogenerationHistoryEntriesAutogenerationRuleIdTab label={translate('catalogs.autogenerationHistoryEntries.title')} path='autogenerationHistoryEntries-autogenerationRuleId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultAutogenerationRuleShow;
