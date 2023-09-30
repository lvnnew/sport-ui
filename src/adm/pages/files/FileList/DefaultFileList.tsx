/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import FileFilter from './FileFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

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
      filters={<FileFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'DESC'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.files.fields.id' />
        <TextField source='originalName' label='catalogs.files.fields.originalName' />
        <TextField source='mimetype' label='catalogs.files.fields.mimetype' />
      </Datagrid>
    </List>
  );
};

export default DefaultFileList;
