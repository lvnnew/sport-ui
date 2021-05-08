import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultAdminLoginList from './DefaultAdminLoginList';

const AdminLoginList: FC<ListProps> = (props: ListProps) => (
  <DefaultAdminLoginList {...props} />
);

export default AdminLoginList;
