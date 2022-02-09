/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from 'react-admin';
import MessageTemplateFilter from './MessageTemplateFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateList: FC<ListProps> = (props: ListProps) => (
  <List title='Message templates' exporter={false} filters={<MessageTemplateFilter />} {...props}>
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <TextField source='title' />
      <BooleanField source='secretData' />
      <ReferenceField source='messageTypeId' reference='messageTypes' link='show'>
        <TextField source='title' />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default DefaultMessageTemplateList;
