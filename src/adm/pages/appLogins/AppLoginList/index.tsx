import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultAppLoginList from './DefaultAppLoginList';

const AppLoginList: FC<ListProps> = (props: ListProps) => (
  <DefaultAppLoginList {...props} />
);

export default AppLoginList;
