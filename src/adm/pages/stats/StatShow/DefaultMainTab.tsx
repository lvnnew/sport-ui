/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  TextField,
  NumberField,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='id' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><DateField source='updated' showTime /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='helloCount' /></FormGrid>
    </FormGrid>
  </Tab>
);

export default DefaultMainTab;
