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
import FileFilter from './FileFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'files.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultFileList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.files.title.plural'
      exporter={false}
      filters={<FileFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label='catalogs.files.fields.id' />
        <TextField source='originalName' label='catalogs.files.fields.originalName' />
        <TextField source='mimetype' label='catalogs.files.fields.mimetype' />
      </Datagrid>
    </List>
  );
};

export default DefaultFileList;
