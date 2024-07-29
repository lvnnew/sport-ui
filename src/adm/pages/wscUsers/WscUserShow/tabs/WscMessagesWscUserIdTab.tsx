/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const WscMessagesWscUserIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='wscMessages'
      target='wscUserId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.wscMessages.fields.id' />
        <TextField source='externalId' label='catalogs.wscMessages.fields.externalId' />
        <TextField source='dateTimeRaw' label='catalogs.wscMessages.fields.dateTimeRaw' />
        <TextField source='sender' label='catalogs.wscMessages.fields.sender' />
        <TextField source='content' label='catalogs.wscMessages.fields.content' />
        <ReferenceField source='wscUserId' label='catalogs.wscMessages.fields.wscUserId' reference='wscUsers' link='show' />
        <ReferenceField source='wscContactId' label='catalogs.wscMessages.fields.wscContactId' reference='wscContacts' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default WscMessagesWscUserIdTab;
