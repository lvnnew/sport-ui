/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
} from 'react-admin';
import MessageTypeFilter from './MessageTypeFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTypeList: FC<ListProps> = (props: ListProps) => (
  <List title='Message types' exporter={false} filters={<MessageTypeFilter />} {...props}>
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <TextField source='title' />
      <TextField source='description' />
    </Datagrid>
  </List>
);

export default DefaultMessageTypeList;
