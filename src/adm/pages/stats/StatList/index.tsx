import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultStatList from './DefaultStatList';

const StatList: FC<ListProps> = (props: ListProps) => (
  <DefaultStatList {...props} />
);

export default StatList;
