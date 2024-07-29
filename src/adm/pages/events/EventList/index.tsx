import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultEventList from './DefaultEventList';

const EventList: FC<ListProps> = (props: ListProps) => (
  <DefaultEventList {...props} />
);

export default EventList;
