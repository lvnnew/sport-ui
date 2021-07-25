import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultRoleCreate from './DefaultRoleCreate';

const RoleCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultRoleCreate {...props} />
);

export default RoleCreate;
