/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  TextField,
  DateField,
  BooleanField,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const MainTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='id' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='title' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><DateField source='version' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='originalEntityType' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='generatingEntityType' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='originalEntityFilter' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='generatingEntityConstructionRules' /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source='ignoreVersionOnHistory' /></FormGrid>
    </FormGrid>
  </Tab>
);

export default MainTab;
