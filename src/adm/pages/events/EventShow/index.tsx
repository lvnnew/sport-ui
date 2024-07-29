/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultEventShow from './DefaultEventShow';

const EventShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultEventShow {...props} />
);

export default EventShow;
