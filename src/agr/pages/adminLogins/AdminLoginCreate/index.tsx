import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultAdminLoginCreate from './DefaultAdminLoginCreate';

const AdminLoginCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultAdminLoginCreate {...props} />
);

export default AdminLoginCreate;
