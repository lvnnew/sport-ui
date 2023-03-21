/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import EntityFilter from './EntityFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'entities.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultEntityList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.entities.title.plural'
      filters={<EntityFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <TextField source='id' label='catalogs.entities.fields.id' />
        <TextField source='title' label='catalogs.entities.fields.title' />
      </Datagrid>
    </List>
  );
};

export default DefaultEntityList;
