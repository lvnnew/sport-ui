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

const ManagersToRolesManagerIdTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <ReferenceManyField
      addLabel={false}
      reference='managersToRoles'
      target='managerId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <NumberField source='id' />
        <TextField source='title' />
        <ReferenceField source='managerId' reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='roleId' reference='roles' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>
);

export default ManagersToRolesManagerIdTab;
