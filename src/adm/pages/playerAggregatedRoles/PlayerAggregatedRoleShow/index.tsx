/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultPlayerAggregatedRoleShow from './DefaultPlayerAggregatedRoleShow';

const PlayerAggregatedRoleShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultPlayerAggregatedRoleShow {...props} />
);

export default PlayerAggregatedRoleShow;
