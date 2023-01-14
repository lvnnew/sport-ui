/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const UsersTenantIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='users'
      target='tenantId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.users.fields.id' />
        <TextField source='title' label='catalogs.users.fields.title' />
        <TextField source='lastname' label='catalogs.users.fields.lastname' />
        <TextField source='firstname' label='catalogs.users.fields.firstname' />
        <TextField source='email' label='catalogs.users.fields.email' />
        <ReferenceField source='tenantId' label='catalogs.users.fields.tenantId' reference='tenants' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default UsersTenantIdTab;
