/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultManagersToPermissionShow from './DefaultManagersToPermissionShow';

const ManagersToPermissionShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultManagersToPermissionShow {...props} />
);

export default ManagersToPermissionShow;
