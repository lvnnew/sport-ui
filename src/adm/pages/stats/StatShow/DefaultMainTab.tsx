/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Tab,
  TabProps,
  TextField,
  NumberField,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMainTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <FormGrid container spacing={2}>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><TextField source='id' label={translate('catalogs.stats.fields.id')} /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><DateField source='updated' label={translate('catalogs.stats.fields.updated')} showTime /></FormGrid>
      <FormGrid item xs={12} sm={6} md={3} lg={2}><NumberField source='helloCount' label={translate('catalogs.stats.fields.helloCount')} /></FormGrid>
    </FormGrid>
  </Tab>);
};

export default DefaultMainTab;
