/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import EventsPeriodTypeIdTab from './tabs/EventsPeriodTypeIdTab';
import GlossariesPeriodTypeIdTab from './tabs/GlossariesPeriodTypeIdTab';
import MatchPeriodMarkupsPeriodTypeIdTab from './tabs/MatchPeriodMarkupsPeriodTypeIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPeriodTypeShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <EventsPeriodTypeIdTab label={translate('documents.events.title.plural')} path='events-periodTypeId' />
        <GlossariesPeriodTypeIdTab label={translate('catalogs.glossaries.title.plural')} path='glossaries-periodTypeId' />
        <MatchPeriodMarkupsPeriodTypeIdTab label={translate('catalogs.matchPeriodMarkups.title.plural')} path='matchPeriodMarkups-periodTypeId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultPeriodTypeShow;
