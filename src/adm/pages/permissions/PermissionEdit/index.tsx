import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultPermissionEdit from './DefaultPermissionEdit';

const PermissionEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultPermissionEdit {...props} />
);

export default PermissionEdit;
