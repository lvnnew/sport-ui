import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultEntitiesTrackingList from './DefaultEntitiesTrackingList';

const EntitiesTrackingList: FC<ListProps> = (props: ListProps) => (
  <DefaultEntitiesTrackingList {...props} />
);

export default EntitiesTrackingList;
