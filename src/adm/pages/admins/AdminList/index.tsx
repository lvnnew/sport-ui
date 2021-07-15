import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultAdminList from './DefaultAdminList';

const AdminList: FC<ListProps> = (props: ListProps) => (
  <DefaultAdminList {...props} />
);

export default AdminList;
