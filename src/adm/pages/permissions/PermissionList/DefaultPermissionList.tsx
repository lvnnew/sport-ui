/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  useTranslate,
} from 'react-admin';
import PermissionFilter from './PermissionFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPermissionList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.permissions.title')} exporter={false} filters={<PermissionFilter />} {...props}>
      <Datagrid rowClick='show'>
        <TextField source='id' />
        <TextField source='title' />
      </Datagrid>
    </List>
  );
};

export default DefaultPermissionList;
