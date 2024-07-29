/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import PlayersParentIdTab from './tabs/PlayersParentIdTab';
import ReportForParentsParentIdTab from './tabs/ReportForParentsParentIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultParentShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <PlayersParentIdTab label={translate('catalogs.players.title.plural')} path='players-parentId' />
        <ReportForParentsParentIdTab label={translate('catalogs.reportForParents.title.plural')} path='reportForParents-parentId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultParentShow;
