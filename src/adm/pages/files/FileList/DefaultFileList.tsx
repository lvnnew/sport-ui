/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
} from 'react-admin';
import FileFilter from './FileFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultFileList: FC<ListProps> = (props: ListProps) => (
  <List title='Files' exporter={false} filters={<FileFilter />} {...props}>
    <Datagrid rowClick='show'>
      <NumberField source='id' />
      <TextField source='originalName' />
      <TextField source='url' />
      <TextField source='mimetype' />
      <TextField source='s3Key' />
      <TextField source='eTag' />
    </Datagrid>
  </List>
);

export default DefaultFileList;
