/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultPlayerRoleShow from './DefaultPlayerRoleShow';

const PlayerRoleShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultPlayerRoleShow {...props} />
);

export default PlayerRoleShow;
