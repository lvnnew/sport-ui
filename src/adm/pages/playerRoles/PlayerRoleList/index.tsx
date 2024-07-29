import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultPlayerRoleList from './DefaultPlayerRoleList';

const PlayerRoleList: FC<ListProps> = (props: ListProps) => (
  <DefaultPlayerRoleList {...props} />
);

export default PlayerRoleList;
