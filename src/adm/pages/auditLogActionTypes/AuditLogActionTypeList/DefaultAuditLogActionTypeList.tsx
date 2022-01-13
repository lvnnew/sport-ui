/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  TextField,
} from 'react-admin';
import AuditLogActionTypeFilter from './AuditLogActionTypeFilter';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAuditLogActionTypeList: FC<ListProps> = (props: ListProps) => (
  <List title='Audit log action types' exporter={false} filters={<AuditLogActionTypeFilter />} {...props}>
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <TextField source='title' />
    </Datagrid>
  </List>
);

export default DefaultAuditLogActionTypeList;
