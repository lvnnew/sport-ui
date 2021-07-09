/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  BooleanField,
  ReferenceField
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const MainTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source="id" /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source="login" /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source="passwordHash" /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source="role" /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source="emailVerified" /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source="initialPasswordChanged" /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source="locked" /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source="managerId" reference="managers" link="show">
      <TextField source="title" />
    </ReferenceField></FormGrid>
    </FormGrid>
  </Tab>
);

export default MainTab;
