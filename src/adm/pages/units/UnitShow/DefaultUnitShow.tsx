/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import ManagersUnitIdTab from './tabs/ManagersUnitIdTab';
import UnitsParentIdTab from './tabs/UnitsParentIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUnitShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <ManagersUnitIdTab label={translate('catalogs.managers.title')} path='managers-unitId' />
        <UnitsParentIdTab label={translate('catalogs.units.title')} path='units-parentId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultUnitShow;
