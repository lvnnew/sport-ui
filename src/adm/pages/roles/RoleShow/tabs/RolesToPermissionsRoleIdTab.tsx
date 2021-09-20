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

const RolesToPermissionsRoleIdTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <ReferenceManyField
      addLabel={false}
      reference='rolesToPermissions'
      target='roleId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <NumberField source='id' />
        <ReferenceField source='roleId' reference='roles' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='permissionId' reference='permissions' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>
);

export default RolesToPermissionsRoleIdTab;
