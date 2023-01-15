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

const AppLoginsUserIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='appLogins'
      target='userId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.appLogins.fields.id' />
        <TextField source='login' label='catalogs.appLogins.fields.login' />
        <TextField source='passwordHash' label='catalogs.appLogins.fields.passwordHash' />
        <ReferenceField source='userId' label='catalogs.appLogins.fields.userId' reference='users' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default AppLoginsUserIdTab;
