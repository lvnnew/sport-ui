import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultManagersToPermissionEdit from './DefaultManagersToPermissionEdit';

const ManagersToPermissionEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultManagersToPermissionEdit {...props} />
);

export default ManagersToPermissionEdit;
