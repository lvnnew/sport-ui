import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultManagerLoginList from './DefaultManagerLoginList';

const ManagerLoginList: FC<ListProps> = (props: ListProps) => (
  <DefaultManagerLoginList {...props} />
);

export default ManagerLoginList;
