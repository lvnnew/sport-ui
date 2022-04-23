/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultAggregateTrackingShow from './DefaultAggregateTrackingShow';

const AggregateTrackingShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultAggregateTrackingShow {...props} />
);

export default AggregateTrackingShow;
