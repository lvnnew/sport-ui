/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultAuditLogActionTypeShow from './DefaultAuditLogActionTypeShow';

const AuditLogActionTypeShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultAuditLogActionTypeShow {...props} />
);

export default AuditLogActionTypeShow;
