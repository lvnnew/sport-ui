/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  DateField,
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
      <FormGrid item xs={12} sm={6} md={3} lg={2}><DateField source='date' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='originalEntityType' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='originalEntityId' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='autogenerationRuleId' reference='autogenerationRules' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><DateField source='version' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source='errorOccurred' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='error' /></FormGrid>
    </FormGrid>
  </Tab>
);

export default MainTab;
