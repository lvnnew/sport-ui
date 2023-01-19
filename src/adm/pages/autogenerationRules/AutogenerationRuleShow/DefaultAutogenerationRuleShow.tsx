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
import CatalogTitle from '../../../../raUiLib/CatalogTitle';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationRuleShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <AutogenerationHistoryEntriesAutogenerationRuleIdTab label={translate('catalogs.autogenerationHistoryEntries.title.plural')} path='autogenerationHistoryEntries-autogenerationRuleId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultAutogenerationRuleShow;
