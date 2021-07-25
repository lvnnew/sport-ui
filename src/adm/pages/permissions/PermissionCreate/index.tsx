import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultPermissionCreate from './DefaultPermissionCreate';

const PermissionCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultPermissionCreate {...props} />
);

export default PermissionCreate;
