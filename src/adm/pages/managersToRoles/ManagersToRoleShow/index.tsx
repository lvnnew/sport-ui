/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultManagersToRoleShow from './DefaultManagersToRoleShow';

const ManagersToRoleShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultManagersToRoleShow {...props} />
);

export default ManagersToRoleShow;
