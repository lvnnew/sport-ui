/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultAdminShow from './DefaultAdminShow';

const AdminShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultAdminShow {...props} />
);

export default AdminShow;
