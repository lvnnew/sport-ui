import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultRoleList from './DefaultRoleList';

const RoleList: FC<ListProps> = (props: ListProps) => (
  <DefaultRoleList {...props} />
);

export default RoleList;
