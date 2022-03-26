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
    <List title={translate('catalogs.roles.title')} exporter={false} filters={<RoleFilter />} {...props}>
      <Datagrid rowClick='show'>
        <TextField source='id' label={translate('catalogs.roles.fields.id')} />
        <TextField source='title' label={translate('catalogs.roles.fields.title')} />
        <BooleanField source='hasAllPermissions' label={translate('catalogs.roles.fields.hasAllPermissions')} />
        <BooleanField source='allTenantsAvailable' label={translate('catalogs.roles.fields.allTenantsAvailable')} />
      </Datagrid>
    </List>
  );
};

export default DefaultRoleList;
