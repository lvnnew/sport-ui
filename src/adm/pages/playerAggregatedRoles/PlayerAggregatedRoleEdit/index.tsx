import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultPlayerAggregatedRoleEdit from './DefaultPlayerAggregatedRoleEdit';

const PlayerAggregatedRoleEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultPlayerAggregatedRoleEdit {...props} />
);

export default PlayerAggregatedRoleEdit;
