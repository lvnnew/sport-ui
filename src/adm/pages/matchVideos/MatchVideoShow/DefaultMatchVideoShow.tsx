/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import EventsVideoIdTab from './tabs/EventsVideoIdTab';
import MatchPeriodMarkupsMatchVideoIdTab from './tabs/MatchPeriodMarkupsMatchVideoIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMatchVideoShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <EventsVideoIdTab label={translate('documents.events.title.plural')} path='events-videoId' />
        <MatchPeriodMarkupsMatchVideoIdTab label={translate('catalogs.matchPeriodMarkups.title.plural')} path='matchPeriodMarkups-matchVideoId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultMatchVideoShow;
