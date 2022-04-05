/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  NumberField,
  TextField,
  useTranslate,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='id' label={translate('catalogs.tenants.fields.id')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='title' label={translate('catalogs.tenants.fields.title')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='utcOffset' label={translate('catalogs.tenants.fields.utcOffset')} /></FormGrid>
    </FormGrid>
  </Tab>);
};

export default DefaultMainTab;
