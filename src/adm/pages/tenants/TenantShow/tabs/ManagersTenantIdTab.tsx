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

const ManagersTenantIdTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <ReferenceManyField
      addLabel={false}
      reference='managers'
      target='tenantId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <NumberField source='id' />
        <TextField source='title' />
        <TextField source='lastName' />
        <TextField source='firstName' />
        <ReferenceField source='languageId' reference='languages' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='email' />
        <TextField source='phone' />
        <TextField source='photo' />
        <TextField source='telegramLogin' />
        <ReferenceField source='unitId' reference='units' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='tenantId' reference='tenants' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <BooleanField source='headOfUnit' />
        <BooleanField source='active' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>
);

export default ManagersTenantIdTab;
