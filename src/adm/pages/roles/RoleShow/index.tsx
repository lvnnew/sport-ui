/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultRoleShow from './DefaultRoleShow';

const RoleShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultRoleShow {...props} />
);

export default RoleShow;
