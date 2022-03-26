/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  useTranslate,
} from 'react-admin';
import FileFilter from './FileFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultFileList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.files.title')} exporter={false} filters={<FileFilter />} {...props}>
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
