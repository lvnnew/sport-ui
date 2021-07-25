import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultRolesToPermissionList from './DefaultRolesToPermissionList';

const RolesToPermissionList: FC<ListProps> = (props: ListProps) => (
  <DefaultRolesToPermissionList {...props} />
);

export default RolesToPermissionList;
