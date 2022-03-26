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
        <TextField source='id' label={translate('catalogs.messageTemplates.fields.id')} />
        <TextField source='title' label={translate('catalogs.messageTemplates.fields.title')} />
        <BooleanField source='secretData' label={translate('catalogs.messageTemplates.fields.secretData')} />
        <ReferenceField source='messageTypeId' label={translate('catalogs.messageTemplates.fields.messageTypeId')} reference='messageTypes' link='show'>
          <TextField source='title' />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default DefaultMessageTemplateList;
