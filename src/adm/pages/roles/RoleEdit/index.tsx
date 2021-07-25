import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultRoleEdit from './DefaultRoleEdit';

const RoleEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultRoleEdit {...props} />
);

export default RoleEdit;
