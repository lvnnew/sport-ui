/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
} from 'react-admin';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToRoleShow: FC<ShowProps> = (props: ShowProps) => {
  return (
    <Show actions={<DefaultActions />} {...props}>
      <TabbedShowLayout>
        <MainTab label='Summary' />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultManagersToRoleShow;
