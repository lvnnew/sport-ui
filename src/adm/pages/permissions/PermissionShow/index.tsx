/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultPermissionShow from './DefaultPermissionShow';

const PermissionShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultPermissionShow {...props} />
);

export default PermissionShow;
