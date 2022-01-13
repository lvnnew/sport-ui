import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultAuditLogActionTypeCreate from './DefaultAuditLogActionTypeCreate';

const AuditLogActionTypeCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultAuditLogActionTypeCreate {...props} />
);

export default AuditLogActionTypeCreate;
