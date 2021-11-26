/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='title' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='lastname' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='firstname' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='email' /></FormGrid>
    </FormGrid>
  </Tab>
);

export default DefaultMainTab;
