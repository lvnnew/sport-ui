/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const ManagerLoginsManagerIdTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <ReferenceManyField
      addLabel={false}
      reference="managerLogins"
      target="managerId"
      pagination={<Pagination/>}
    >
      <Datagrid>
        <NumberField source="id" />
        <TextField source="login" />
        <TextField source="passwordHash" />
        <TextField source="role" />
        <BooleanField source="emailVerified" />
        <BooleanField source="initialPasswordChanged" />
        <BooleanField source="locked" />
        <ReferenceField source="managerId" reference="managers" link="show">
      <TextField source="title" />
    </ReferenceField>
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>
);

export default ManagerLoginsManagerIdTab;
