/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultStatShow from './DefaultStatShow';

const StatShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultStatShow {...props} />
);

export default StatShow;
