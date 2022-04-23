import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultAggregateTrackingList from './DefaultAggregateTrackingList';

const AggregateTrackingList: FC<ListProps> = (props: ListProps) => (
  <DefaultAggregateTrackingList {...props} />
);

export default AggregateTrackingList;
