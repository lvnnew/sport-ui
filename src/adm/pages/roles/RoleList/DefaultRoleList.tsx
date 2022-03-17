/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  useTranslate,
} from 'react-admin';
import RoleFilter from './RoleFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRoleList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.roles')} exporter={false} filters={<RoleFilter />} {...props}>
      <Datagrid rowClick='show'>
        <TextField source='id' />
        <TextField source='title' />
        <BooleanField source='hasAllPermissions' />
        <BooleanField source='allTenantsAvailable' />
      </Datagrid>
    </List>
  );
};

export default DefaultRoleList;
