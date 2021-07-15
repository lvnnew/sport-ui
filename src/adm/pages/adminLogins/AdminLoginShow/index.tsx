/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultAdminLoginShow from './DefaultAdminLoginShow';

const AdminLoginShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultAdminLoginShow {...props} />
);

export default AdminLoginShow;
