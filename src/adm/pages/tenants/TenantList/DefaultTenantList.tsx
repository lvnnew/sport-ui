/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
  NumberField,
  TextField,
} from 'react-admin';
import TenantFilter from './TenantFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'tenants.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultTenantList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.tenants.title.plural'
      filters={<TenantFilter />}
      actions={<ListActions />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label='catalogs.tenants.fields.id' />
        <TextField source='title' label='catalogs.tenants.fields.title' />
        <NumberField source='utcOffset' label='catalogs.tenants.fields.utcOffset' />
      </Datagrid>
    </List>
  );
};

export default DefaultTenantList;
