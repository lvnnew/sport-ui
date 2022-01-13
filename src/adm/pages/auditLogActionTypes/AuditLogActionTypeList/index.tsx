import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultAuditLogActionTypeList from './DefaultAuditLogActionTypeList';

const AuditLogActionTypeList: FC<ListProps> = (props: ListProps) => (
  <DefaultAuditLogActionTypeList {...props} />
);

export default AuditLogActionTypeList;
