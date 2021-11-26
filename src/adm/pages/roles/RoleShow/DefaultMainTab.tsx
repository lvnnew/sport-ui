/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  TextField,
  BooleanField,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='id' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='title' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source='hasFullAccess' /></FormGrid>
    </FormGrid>
  </Tab>
);

export default DefaultMainTab;
