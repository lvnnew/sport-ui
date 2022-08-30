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
  useTranslate,
} from 'react-admin';
import TenantFilter from './TenantFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'tenants.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultTenantList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.tenants.title')}
      exporter={false}
      filters={<TenantFilter />}
      bulkActionButtons={<CustomBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.tenants.fields.id')} />
        <TextField source='title' label={translate('catalogs.tenants.fields.title')} />
        <NumberField source='utcOffset' label={translate('catalogs.tenants.fields.utcOffset')} />
      </Datagrid>
    </List>
  );
};

export default DefaultTenantList;
