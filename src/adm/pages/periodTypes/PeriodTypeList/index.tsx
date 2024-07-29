import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultPeriodTypeList from './DefaultPeriodTypeList';

const PeriodTypeList: FC<ListProps> = (props: ListProps) => (
  <DefaultPeriodTypeList {...props} />
);

export default PeriodTypeList;
