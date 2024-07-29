/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultEventTypeCategoryShow from './DefaultEventTypeCategoryShow';

const EventTypeCategoryShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultEventTypeCategoryShow {...props} />
);

export default EventTypeCategoryShow;
