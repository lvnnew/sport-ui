import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultManagersToPermissionCreate from './DefaultManagersToPermissionCreate';

const ManagersToPermissionCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultManagersToPermissionCreate {...props} />
);

export default ManagersToPermissionCreate;
