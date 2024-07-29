/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultEntitiesTrackingShow from './DefaultEntitiesTrackingShow';

const EntitiesTrackingShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultEntitiesTrackingShow {...props} />
);

export default EntitiesTrackingShow;
