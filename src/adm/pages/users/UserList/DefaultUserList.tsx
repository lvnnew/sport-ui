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
  ReferenceField,
  useTranslate,
} from 'react-admin';
import UserFilter from './UserFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'users.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultUserList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.users.title')}
      exporter={false}
      filters={<UserFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.users.fields.id')} />
        <TextField source='title' label={translate('catalogs.users.fields.title')} />
        <TextField source='lastname' label={translate('catalogs.users.fields.lastname')} />
        <TextField source='firstname' label={translate('catalogs.users.fields.firstname')} />
        <TextField source='email' label={translate('catalogs.users.fields.email')} />
        <ReferenceField source='tenantId' label={translate('catalogs.users.fields.tenantId')} reference='tenants' link='show'>
          <TextField source='title' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default DefaultUserList;
