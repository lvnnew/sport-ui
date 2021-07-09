import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultManagerList from './DefaultManagerList';

const ManagerList: FC<ListProps> = (props: ListProps) => (
  <DefaultManagerList {...props} />
);

export default ManagerList;
