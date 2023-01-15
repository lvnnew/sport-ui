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
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const ManagersToPermissionsPermissionIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='managersToPermissions'
      target='permissionId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.managersToPermissions.fields.id' />
        <ReferenceField source='managerId' label='catalogs.managersToPermissions.fields.managerId' reference='managers' link='show' />
        <ReferenceField source='permissionId' label='catalogs.managersToPermissions.fields.permissionId' reference='permissions' link='show' />
        <DateField source='expiresAt' label='catalogs.managersToPermissions.fields.expiresAt' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default ManagersToPermissionsPermissionIdTab;
