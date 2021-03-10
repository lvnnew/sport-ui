/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE


const MainTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <NumberField source="id" />
    <TextField source="comment" />
  </Tab>
);

export default MainTab;
