import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultAuditLogCreate from './DefaultAuditLogCreate';

const AuditLogCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultAuditLogCreate {...props} />
);

export default AuditLogCreate;
