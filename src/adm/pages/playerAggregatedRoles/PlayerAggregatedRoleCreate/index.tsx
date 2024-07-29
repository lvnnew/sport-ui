import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultPlayerAggregatedRoleCreate from './DefaultPlayerAggregatedRoleCreate';

const PlayerAggregatedRoleCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultPlayerAggregatedRoleCreate {...props} />
);

export default PlayerAggregatedRoleCreate;
