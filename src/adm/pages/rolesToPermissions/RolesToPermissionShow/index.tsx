/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultRolesToPermissionShow from './DefaultRolesToPermissionShow';

const RolesToPermissionShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultRolesToPermissionShow {...props} />
);

export default RolesToPermissionShow;
