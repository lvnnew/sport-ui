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
  useTranslate,
} from 'react-admin';
import FileFilter from './FileFilter';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'files.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultFileList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.files.title')}
      exporter={false}
      filters={<FileFilter />}
      bulkActionButtons={<CustomBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.files.fields.id')} />
        <TextField source='originalName' label={translate('catalogs.files.fields.originalName')} />
        <TextField source='url' label={translate('catalogs.files.fields.url')} />
        <TextField source='mimetype' label={translate('catalogs.files.fields.mimetype')} />
        <TextField source='s3Key' label={translate('catalogs.files.fields.s3Key')} />
        <TextField source='eTag' label={translate('catalogs.files.fields.eTag')} />
      </Datagrid>
    </List>
  );
};

export default DefaultFileList;
