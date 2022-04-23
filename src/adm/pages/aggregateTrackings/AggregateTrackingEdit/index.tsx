import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultAggregateTrackingEdit from './DefaultAggregateTrackingEdit';

const AggregateTrackingEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultAggregateTrackingEdit {...props} />
);

export default AggregateTrackingEdit;
