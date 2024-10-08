/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  ReferenceField,
  TextField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import AppRefreshTokenFilter from './AppRefreshTokenFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'appRefreshTokens.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultAppRefreshTokenList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.appRefreshTokens.title.plural'
      filters={<AppRefreshTokenFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.appRefreshTokens.fields.id' />
        <DateField source='create' label='catalogs.appRefreshTokens.fields.create' showTime />
        <ReferenceField source='userId' label='catalogs.appRefreshTokens.fields.userId' reference='users' link='show' />
        <TextField source='token' label='catalogs.appRefreshTokens.fields.token' />
      </Datagrid>
    </List>
  );
};

export default DefaultAppRefreshTokenList;
