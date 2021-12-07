/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
} from 'react-admin';
import ManagersUnitIdTab from './tabs/ManagersUnitIdTab';
import UnitsParentIdTab from './tabs/UnitsParentIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUnitShow: FC<ShowProps> = (props: ShowProps) => (
  <Show actions={<DefaultActions />} {...props}>
    <TabbedShowLayout>
      <MainTab label='Summary' />
      {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
      <ManagersUnitIdTab label='Manager' path='managers-unitId' />
      <UnitsParentIdTab label='Units' path='units-parentId' />
    </TabbedShowLayout>
  </Show>
);

export default DefaultUnitShow;
