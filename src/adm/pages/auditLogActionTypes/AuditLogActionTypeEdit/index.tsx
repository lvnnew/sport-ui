import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultAuditLogActionTypeEdit from './DefaultAuditLogActionTypeEdit';

const AuditLogActionTypeEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultAuditLogActionTypeEdit {...props} />
);

export default AuditLogActionTypeEdit;
