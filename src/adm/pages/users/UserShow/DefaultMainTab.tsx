/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' label={translate('catalogs.users.fields.id')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='title' label={translate('catalogs.users.fields.title')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='lastname' label={translate('catalogs.users.fields.lastname')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='firstname' label={translate('catalogs.users.fields.firstname')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='email' label={translate('catalogs.users.fields.email')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceField source='tenantId' label={translate('catalogs.users.fields.tenantId')} reference='tenants' link='show'>
        <TextField source='title' />
      </ReferenceField></FormGrid>
    </FormGrid>
  </Tab>);
};

export default DefaultMainTab;
