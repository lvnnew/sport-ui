import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultEventTypeList from './DefaultEventTypeList';

const EventTypeList: FC<ListProps> = (props: ListProps) => (
  <DefaultEventTypeList {...props} />
);

export default EventTypeList;
