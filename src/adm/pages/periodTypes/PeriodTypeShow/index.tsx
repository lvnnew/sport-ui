/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultPeriodTypeShow from './DefaultPeriodTypeShow';

const PeriodTypeShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultPeriodTypeShow {...props} />
);

export default PeriodTypeShow;
