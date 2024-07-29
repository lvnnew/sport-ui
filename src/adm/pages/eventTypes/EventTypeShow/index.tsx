/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultEventTypeShow from './DefaultEventTypeShow';

const EventTypeShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultEventTypeShow {...props} />
);

export default EventTypeShow;
