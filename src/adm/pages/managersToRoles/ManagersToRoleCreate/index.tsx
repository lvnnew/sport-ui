import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultManagersToRoleCreate from './DefaultManagersToRoleCreate';

const ManagersToRoleCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultManagersToRoleCreate {...props} />
);

export default ManagersToRoleCreate;
