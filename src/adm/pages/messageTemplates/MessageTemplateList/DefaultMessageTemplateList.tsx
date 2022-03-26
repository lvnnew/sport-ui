/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import MessageTemplateFilter from './MessageTemplateFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateList: FC<ListProps> = (props: ListProps) => {
  const translate = useTranslate();

  return (
    <List title={translate('catalogs.messageTemplates.title')} exporter={false} filters={<MessageTemplateFilter />} {...props}>
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
};

export default DefaultMessageTemplateList;
