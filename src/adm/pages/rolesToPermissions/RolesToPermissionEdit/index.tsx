import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultRolesToPermissionEdit from './DefaultRolesToPermissionEdit';

const RolesToPermissionEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultRolesToPermissionEdit {...props} />
);

export default RolesToPermissionEdit;
