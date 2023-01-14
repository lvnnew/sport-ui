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
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const MessageTemplatesTemplateStyleIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

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
        <TextField source='id' label={translate('catalogs.messageTemplates.fields.id')} />
        <TextField source='title' label={translate('catalogs.messageTemplates.fields.title')} />
        <BooleanField source='secretData' label={translate('catalogs.messageTemplates.fields.secretData')} />
        <ReferenceField source='messageTypeId' label={translate('catalogs.messageTemplates.fields.messageTypeId')} reference='messageTypes' link='show' />
        <TextField source='dataExample' label={translate('catalogs.messageTemplates.fields.dataExample')} />
        <ReferenceField source='templateStyleId' label={translate('catalogs.messageTemplates.fields.templateStyleId')} reference='templateStyles' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MessageTemplatesTemplateStyleIdTab;
