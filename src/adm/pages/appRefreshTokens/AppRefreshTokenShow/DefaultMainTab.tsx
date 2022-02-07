/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  ReferenceField,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><DateField source='create' showTime /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='userId' reference='users' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='token' /></FormGrid>
    </FormGrid>
  </Tab>
);

export default DefaultMainTab;
