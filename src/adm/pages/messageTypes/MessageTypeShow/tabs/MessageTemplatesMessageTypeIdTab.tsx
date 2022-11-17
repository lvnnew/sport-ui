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

const MessageTemplatesMessageTypeIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  const translate = useTranslate();

  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='messageTemplates'
      target='messageTypeId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <TextField source='id' label={translate('catalogs.messageTemplates.fields.id')} />
        <TextField source='title' label={translate('catalogs.messageTemplates.fields.title')} />
        <BooleanField source='secretData' label={translate('catalogs.messageTemplates.fields.secretData')} />
        <ReferenceField source='messageTypeId' label={translate('catalogs.messageTemplates.fields.messageTypeId')} reference='messageTypes' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='dataExample' label={translate('catalogs.messageTemplates.fields.dataExample')} />
        <ReferenceField source='templateStyleId' label={translate('catalogs.messageTemplates.fields.templateStyleId')} reference='templateStyles' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default MessageTemplatesMessageTypeIdTab;
