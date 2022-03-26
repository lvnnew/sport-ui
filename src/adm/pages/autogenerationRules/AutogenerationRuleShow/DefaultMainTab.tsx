/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  TextField,
  BooleanField,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='id' label={translate('catalogs.autogenerationRules.fields.id')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='title' label={translate('catalogs.autogenerationRules.fields.title')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><DateField source='version' label={translate('catalogs.autogenerationRules.fields.version')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='originalEntityType' label={translate('catalogs.autogenerationRules.fields.originalEntityType')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='generatingEntityType' label={translate('catalogs.autogenerationRules.fields.generatingEntityType')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='originalEntityFilter' label={translate('catalogs.autogenerationRules.fields.originalEntityFilter')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='generatingEntityConstructionRules' label={translate('catalogs.autogenerationRules.fields.generatingEntityConstructionRules')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source='ignoreVersionOnHistory' label={translate('catalogs.autogenerationRules.fields.ignoreVersionOnHistory')} /></FormGrid>
    </FormGrid>
  </Tab>);
};

export default DefaultMainTab;
