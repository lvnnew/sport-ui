/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import AggregateTrackingsEntityTypeIdTab from './tabs/AggregateTrackingsEntityTypeIdTab';
import AuditLogsEntityTypeIdTab from './tabs/AuditLogsEntityTypeIdTab';
import EntitiesTrackingsEntityTypeIdTab from './tabs/EntitiesTrackingsEntityTypeIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultEntityShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <AggregateTrackingsEntityTypeIdTab label={translate('infoRegistries.aggregateTrackings.title.plural')} path='aggregateTrackings-entityTypeId' />
        <AuditLogsEntityTypeIdTab label={translate('catalogs.auditLogs.title.plural')} path='auditLogs-entityTypeId' />
        <EntitiesTrackingsEntityTypeIdTab label={translate('catalogs.entitiesTrackings.title.plural')} path='entitiesTrackings-entityTypeId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultEntityShow;
