import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultAdminLoginEdit from './DefaultAdminLoginEdit';

const AdminLoginEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultAdminLoginEdit {...props} />
);

export default AdminLoginEdit;
