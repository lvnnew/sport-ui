/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from 'react-admin';
import MessageTemplateFilter from './MessageTemplateFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateList: FC<ListProps> = (props: ListProps) => (
  <List title='Message templates' exporter={false} filters={<MessageTemplateFilter />} {...props}>
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <TextField source='title' />
      <BooleanField source='secretData' />
    </Datagrid>
  </List>
);

export default DefaultMessageTemplateList;
