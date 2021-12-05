/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  TabProps,
  Tab,
  NumberField,
  TextField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Pagination,
  Datagrid,
  ShowButton,
} from 'react-admin';
import DateField from '../../../../../uiLib/DateField';

// DO NOT EDIT! THIS IS GENERATED FILE

const AuditLogsUserIdTab: FC<Omit<TabProps, 'children'>> = (props) => (
  <Tab {...props}>
    <ReferenceManyField
      addLabel={false}
      reference='auditLogs'
      target='userId'
      pagination={<Pagination />}
    >
      <Datagrid>
        <NumberField source='id' />
        <DateField source='date' />
        <TextField source='title' />
        <TextField source='entityType' />
        <TextField source='entityId' />
        <TextField source='action' />
        <ReferenceField source='managerId' reference='managers' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <ReferenceField source='userId' reference='users' link='show'>
          <TextField source='title' />
        </ReferenceField>
        <BooleanField source='foreign' />
        <TextField source='foreignEntityType' />
        <TextField source='foreignEntityId' />
        <TextField source='actionData' />
        <ShowButton />
      </Datagrid>
    </ReferenceManyField>
  </Tab>
);

export default AuditLogsUserIdTab;
