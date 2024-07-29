import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultParentList from './DefaultParentList';

const ParentList: FC<ListProps> = (props: ListProps) => (
  <DefaultParentList {...props} />
);

export default ParentList;
