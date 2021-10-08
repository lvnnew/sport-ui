/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const MainTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='fromId' reference='managers' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='toId' reference='managers' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><DateField source='expiresAt' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source='active' /></FormGrid>
    </FormGrid>
  </Tab>
);

export default MainTab;
