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
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import AdmRefreshTokenFilter from './AdmRefreshTokenFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'admRefreshTokens.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultAdmRefreshTokenList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.admRefreshTokens.title.plural'
      filters={<AdmRefreshTokenFilter />}
      actions={<ListActions />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label='catalogs.admRefreshTokens.fields.id' />
        <DateField source='create' label='catalogs.admRefreshTokens.fields.create' showTime />
        <ReferenceField source='managerId' label='catalogs.admRefreshTokens.fields.managerId' reference='managers' link='show' />
        <TextField source='token' label='catalogs.admRefreshTokens.fields.token' />
      </Datagrid>
    </List>
  );
};

export default DefaultAdmRefreshTokenList;
