import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultAdminCreate from './DefaultAdminCreate';

const AdminCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultAdminCreate {...props} />
);

export default AdminCreate;
