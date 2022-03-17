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

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUnitShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} {...props}>
      <TabbedShowLayout>
        <MainTab label='Summary' />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <ManagersUnitIdTab label={translate('catalogs.managers')} path='managers-unitId' />
        <UnitsParentIdTab label={translate('catalogs.units')} path='units-parentId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultUnitShow;
