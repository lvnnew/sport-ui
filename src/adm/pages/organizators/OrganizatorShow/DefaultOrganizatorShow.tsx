/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import CompetitionsOrganizationIdTab from './tabs/CompetitionsOrganizationIdTab';
import ReportForOrganizationsOrganizatorIdTab from './tabs/ReportForOrganizationsOrganizatorIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultOrganizatorShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <CompetitionsOrganizationIdTab label={translate('catalogs.competitions.title.plural')} path='competitions-organizationId' />
        <ReportForOrganizationsOrganizatorIdTab label={translate('catalogs.reportForOrganizations.title.plural')} path='reportForOrganizations-organizatorId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultOrganizatorShow;
