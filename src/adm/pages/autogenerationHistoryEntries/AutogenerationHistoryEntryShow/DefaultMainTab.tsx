/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  ReferenceField,
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
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' label={translate('catalogs.autogenerationHistoryEntries.fields.id')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><DateField source='date' label={translate('catalogs.autogenerationHistoryEntries.fields.date')} showTime /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='originalEntityType' label={translate('catalogs.autogenerationHistoryEntries.fields.originalEntityType')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='originalEntityId' label={translate('catalogs.autogenerationHistoryEntries.fields.originalEntityId')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='autogenerationRuleId' label={translate('catalogs.autogenerationHistoryEntries.fields.autogenerationRuleId')} reference='autogenerationRules' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><DateField source='version' label={translate('catalogs.autogenerationHistoryEntries.fields.version')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source='errorOccurred' label={translate('catalogs.autogenerationHistoryEntries.fields.errorOccurred')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='error' label={translate('catalogs.autogenerationHistoryEntries.fields.error')} /></FormGrid>
    </FormGrid>
  </Tab>);
};

export default DefaultMainTab;
