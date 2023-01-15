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
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const ManagersTenantIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
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
        <NumberField source='id' label='catalogs.managers.fields.id' />
        <TextField source='title' label='catalogs.managers.fields.title' />
        <TextField source='lastName' label='catalogs.managers.fields.lastName' />
        <TextField source='firstName' label='catalogs.managers.fields.firstName' />
        <ReferenceField source='languageId' label='catalogs.managers.fields.languageId' reference='languages' link='show' />
        <TextField source='email' label='catalogs.managers.fields.email' />
        <TextField source='phone' label='catalogs.managers.fields.phone' />
        <ReferenceField source='photoId' label='catalogs.managers.fields.photoId' reference='files' link='show' />
        <TextField source='telegramLogin' label='catalogs.managers.fields.telegramLogin' />
        <ReferenceField source='unitId' label='catalogs.managers.fields.unitId' reference='units' link='show' />
        <BooleanField source='headOfUnit' label='catalogs.managers.fields.headOfUnit' />
        <BooleanField source='active' label='catalogs.managers.fields.active' />
        <ReferenceField source='tenantId' label='catalogs.managers.fields.tenantId' reference='tenants' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default ManagersTenantIdTab;
