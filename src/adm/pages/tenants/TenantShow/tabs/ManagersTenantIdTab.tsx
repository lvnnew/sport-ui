/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const ManagersTenantIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='managers'
      target='tenantId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label={translate('catalogs.managers.fields.id')} />
        <TextField source='title' label={translate('catalogs.managers.fields.title')} />
        <TextField source='lastName' label={translate('catalogs.managers.fields.lastName')} />
        <TextField source='firstName' label={translate('catalogs.managers.fields.firstName')} />
        <ReferenceField source='languageId' label={translate('catalogs.managers.fields.languageId')} reference='languages' link='show' />
        <TextField source='email' label={translate('catalogs.managers.fields.email')} />
        <TextField source='phone' label={translate('catalogs.managers.fields.phone')} />
        <ReferenceField source='photoId' label={translate('catalogs.managers.fields.photoId')} reference='files' link='show' />
        <TextField source='telegramLogin' label={translate('catalogs.managers.fields.telegramLogin')} />
        <ReferenceField source='unitId' label={translate('catalogs.managers.fields.unitId')} reference='units' link='show' />
        <BooleanField source='headOfUnit' label={translate('catalogs.managers.fields.headOfUnit')} />
        <BooleanField source='active' label={translate('catalogs.managers.fields.active')} />
        <ReferenceField source='tenantId' label={translate('catalogs.managers.fields.tenantId')} reference='tenants' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default ManagersTenantIdTab;
