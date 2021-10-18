/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultAuditLogShow from './DefaultAuditLogShow';

const AuditLogShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultAuditLogShow {...props} />
);

export default AuditLogShow;
