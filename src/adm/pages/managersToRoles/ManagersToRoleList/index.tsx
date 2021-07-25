import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultManagersToRoleList from './DefaultManagersToRoleList';

const ManagersToRoleList: FC<ListProps> = (props: ListProps) => (
  <DefaultManagersToRoleList {...props} />
);

export default ManagersToRoleList;
