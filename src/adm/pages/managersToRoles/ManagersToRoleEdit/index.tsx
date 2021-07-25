import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultManagersToRoleEdit from './DefaultManagersToRoleEdit';

const ManagersToRoleEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultManagersToRoleEdit {...props} />
);

export default ManagersToRoleEdit;
