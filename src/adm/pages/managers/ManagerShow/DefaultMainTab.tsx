/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  ReferenceField,
  BooleanField,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const MainTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='title' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='lastName' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='firstName' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='languageId' reference='languages' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='email' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='unitId' reference='units' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source='headOfUnit' /></FormGrid>
    </FormGrid>
  </Tab>
);

export default MainTab;
