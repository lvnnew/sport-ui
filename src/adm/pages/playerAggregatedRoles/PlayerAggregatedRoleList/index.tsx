import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultPlayerAggregatedRoleList from './DefaultPlayerAggregatedRoleList';

const PlayerAggregatedRoleList: FC<ListProps> = (props: ListProps) => (
  <DefaultPlayerAggregatedRoleList {...props} />
);

export default PlayerAggregatedRoleList;
