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
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' label={translate('catalogs.managers.fields.id')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='title' label={translate('catalogs.managers.fields.title')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='lastName' label={translate('catalogs.managers.fields.lastName')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='firstName' label={translate('catalogs.managers.fields.firstName')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='languageId' label={translate('catalogs.managers.fields.languageId')} reference='languages' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='email' label={translate('catalogs.managers.fields.email')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='phone' label={translate('catalogs.managers.fields.phone')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='photo' label={translate('catalogs.managers.fields.photo')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='telegramLogin' label={translate('catalogs.managers.fields.telegramLogin')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='unitId' label={translate('catalogs.managers.fields.unitId')} reference='units' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='tenantId' label={translate('catalogs.managers.fields.tenantId')} reference='tenants' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source='headOfUnit' label={translate('catalogs.managers.fields.headOfUnit')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanField source='active' label={translate('catalogs.managers.fields.active')} /></FormGrid>
    </FormGrid>
  </Tab>);
};

export default DefaultMainTab;
