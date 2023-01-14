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

const RolesToPermissionsRoleIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='rolesToPermissions'
      target='roleId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.rolesToPermissions.fields.id' />
        <ReferenceField source='roleId' label='catalogs.rolesToPermissions.fields.roleId' reference='roles' link='show' />
        <ReferenceField source='permissionId' label='catalogs.rolesToPermissions.fields.permissionId' reference='permissions' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default RolesToPermissionsRoleIdTab;
