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

const WscContactsWscUserIdTab: FC<Omit<TabProps, 'children'>> = (props) => {
  return (<Tab {...props}>
    <ReferenceManyField
      label={false}
      reference='wscContacts'
      target='wscUserId'
      pagination={<Pagination />}
    >
      <Datagrid
        bulkActionButtons={false}
        rowClick='show'
      >
        <NumberField source='id' label='catalogs.wscContacts.fields.id' />
        <TextField source='name' label='catalogs.wscContacts.fields.name' />
        <TextField source='phoneNumber' label='catalogs.wscContacts.fields.phoneNumber' />
        <ReferenceField source='wscUserId' label='catalogs.wscContacts.fields.wscUserId' reference='wscUsers' link='show' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>);
};

export default WscContactsWscUserIdTab;
