import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultAdminEdit from './DefaultAdminEdit';

const AdminEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultAdminEdit {...props} />
);

export default AdminEdit;
