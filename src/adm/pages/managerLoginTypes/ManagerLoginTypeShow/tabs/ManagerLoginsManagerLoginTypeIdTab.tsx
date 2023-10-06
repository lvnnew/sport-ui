/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  ReferenceField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const ManagerLoginsManagerLoginTypeIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='managerLogins'
      target='managerLoginTypeId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.managerLogins.fields.id' />
        <ReferenceField source='managerLoginTypeId' label='catalogs.managerLogins.fields.managerLoginTypeId' reference='managerLoginTypes' link='show' />
        <TextField source='login' label='catalogs.managerLogins.fields.login' />
        <TextField source='passwordHash' label='catalogs.managerLogins.fields.passwordHash' />
        <BooleanField source='emailVerified' label='catalogs.managerLogins.fields.emailVerified' />
        <BooleanField source='locked' label='catalogs.managerLogins.fields.locked' />
        <ReferenceField source='managerId' label='catalogs.managerLogins.fields.managerId' reference='managers' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default ManagerLoginsManagerLoginTypeIdTab;
