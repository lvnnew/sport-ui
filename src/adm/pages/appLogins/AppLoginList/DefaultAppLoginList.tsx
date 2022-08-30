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
import AppLoginFilter from './AppLoginFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'appLogins.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultAppLoginList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.appLogins.title')}
      exporter={false}
      filters={<AppLoginFilter />}
      bulkActionButtons={<CustomBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.appLogins.fields.id')} />
        <TextField source='login' label={translate('catalogs.appLogins.fields.login')} />
        <TextField source='passwordHash' label={translate('catalogs.appLogins.fields.passwordHash')} />
        <ReferenceField source='userId' label={translate('catalogs.appLogins.fields.userId')} reference='users' link='show'>
          <TextField source='title' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default DefaultAppLoginList;
