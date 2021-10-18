import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultAuditLogList from './DefaultAuditLogList';

const AuditLogList: FC<ListProps> = (props: ListProps) => (
  <DefaultAuditLogList {...props} />
);

export default AuditLogList;
