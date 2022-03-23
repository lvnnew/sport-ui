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
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const UsersTenantIdTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <ReferenceManyField
      addLabel={false}
      reference='users'
      target='tenantId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <NumberField source='id' />
        <TextField source='title' />
        <TextField source='lastname' />
        <TextField source='firstname' />
        <TextField source='email' />
        <ReferenceField source='tenantId' reference='tenants' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>
);

export default UsersTenantIdTab;
