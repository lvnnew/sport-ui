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
import OrganizatorFilter from './OrganizatorFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'organizators.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultOrganizatorList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.organizators.title.plural'
      filters={<OrganizatorFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.organizators.fields.id' />
        <TextField source='title' label='catalogs.organizators.fields.title' />
        <ReferenceField source='createdByManagerId' label='catalogs.organizators.fields.createdByManagerId' reference='managers' link='show' />
        <ReferenceField source='lastChangedByManagerId' label='catalogs.organizators.fields.lastChangedByManagerId' reference='managers' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultOrganizatorList;
