/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
  TextField,
  useTranslate,
} from 'react-admin';
import PermissionFilter from './PermissionFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'permissions.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultPermissionList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.permissions.title')}
      exporter={false}
      filters={<PermissionFilter />}
      bulkActionButtons={<CustomBulkActionButton />}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label={translate('catalogs.permissions.fields.id')} />
        <TextField source='title' label={translate('catalogs.permissions.fields.title')} />
      </Datagrid>
    </List>
  );
};

export default DefaultPermissionList;
