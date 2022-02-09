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

const MessageTemplatesMessageTypeIdTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <ReferenceManyField
      addLabel={false}
      reference='messageTemplates'
      target='messageTypeId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <BooleanField source='secretData' />
        <ReferenceField source='messageTypeId' reference='messageTypes' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>
);

export default MessageTemplatesMessageTypeIdTab;
