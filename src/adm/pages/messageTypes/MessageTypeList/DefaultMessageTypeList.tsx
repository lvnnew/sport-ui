/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  useTranslate,
} from 'react-admin';
import MessageTypeFilter from './MessageTypeFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTypeList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.messageTypes.title')} exporter={false} filters={<MessageTypeFilter />} {...props}>
      <Datagrid rowClick='show'>
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='description' />
      </Datagrid>
    </List>
  );
};

export default DefaultMessageTypeList;
