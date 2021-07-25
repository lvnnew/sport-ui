import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultPermissionList from './DefaultPermissionList';

const PermissionList: FC<ListProps> = (props: ListProps) => (
  <DefaultPermissionList {...props} />
);

export default PermissionList;
