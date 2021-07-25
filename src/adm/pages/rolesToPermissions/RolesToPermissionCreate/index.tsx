import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultRolesToPermissionCreate from './DefaultRolesToPermissionCreate';

const RolesToPermissionCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultRolesToPermissionCreate {...props} />
);

export default RolesToPermissionCreate;
