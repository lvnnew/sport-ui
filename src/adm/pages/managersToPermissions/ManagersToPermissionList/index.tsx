import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultManagersToPermissionList from './DefaultManagersToPermissionList';

const ManagersToPermissionList: FC<ListProps> = (props: ListProps) => (
  <DefaultManagersToPermissionList {...props} />
);

export default ManagersToPermissionList;
