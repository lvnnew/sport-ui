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
      >
        <NumberField source='id' label={translate('catalogs.rolesToPermissions.fields.id')} />
        <ReferenceField source='roleId' label={translate('catalogs.rolesToPermissions.fields.roleId')} reference='roles' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='permissionId' label={translate('catalogs.rolesToPermissions.fields.permissionId')} reference='permissions' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default RolesToPermissionsRoleIdTab;
