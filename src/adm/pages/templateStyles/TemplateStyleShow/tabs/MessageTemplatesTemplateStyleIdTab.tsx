/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const MessageTemplatesTemplateStyleIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='messageTemplates'
      target='templateStyleId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <TextField source='id' label='catalogs.messageTemplates.fields.id' />
        <TextField source='title' label='catalogs.messageTemplates.fields.title' />
        <BooleanField source='secretData' label='catalogs.messageTemplates.fields.secretData' />
        <ReferenceField source='messageTypeId' label='catalogs.messageTemplates.fields.messageTypeId' reference='messageTypes' link='show' />
        <TextField source='dataExample' label='catalogs.messageTemplates.fields.dataExample' />
        <ReferenceField source='templateStyleId' label='catalogs.messageTemplates.fields.templateStyleId' reference='templateStyles' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MessageTemplatesTemplateStyleIdTab;
