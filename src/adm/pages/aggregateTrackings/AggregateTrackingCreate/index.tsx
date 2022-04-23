import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultAggregateTrackingCreate from './DefaultAggregateTrackingCreate';

const AggregateTrackingCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultAggregateTrackingCreate {...props} />
);

export default AggregateTrackingCreate;
