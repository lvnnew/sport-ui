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
import ClubFilter from './ClubFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'clubs.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultClubList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.clubs.title.plural'
      filters={<ClubFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.clubs.fields.id' />
        <TextField source='title' label='catalogs.clubs.fields.title' />
        <ReferenceField source='createdByManagerId' label='catalogs.clubs.fields.createdByManagerId' reference='managers' link='show' />
        <ReferenceField source='lastChangedByManagerId' label='catalogs.clubs.fields.lastChangedByManagerId' reference='managers' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultClubList;
