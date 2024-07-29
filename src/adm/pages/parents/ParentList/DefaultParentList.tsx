/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import ParentFilter from './ParentFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'parents.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultParentList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.parents.title.plural'
      filters={<ParentFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.parents.fields.id' />
        <TextField source='title' label='catalogs.parents.fields.title' />
        <TextField source='firstname' label='catalogs.parents.fields.firstname' />
        <TextField source='lastname' label='catalogs.parents.fields.lastname' />
        <TextField source='patronymic' label='catalogs.parents.fields.patronymic' />
        <ReferenceField source='createdByManagerId' label='catalogs.parents.fields.createdByManagerId' reference='managers' link='show' />
        <ReferenceField source='lastChangedByManagerId' label='catalogs.parents.fields.lastChangedByManagerId' reference='managers' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultParentList;
