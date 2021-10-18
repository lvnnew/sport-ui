import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultAuditLogEdit from './DefaultAuditLogEdit';

const AuditLogEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultAuditLogEdit {...props} />
);

export default AuditLogEdit;
