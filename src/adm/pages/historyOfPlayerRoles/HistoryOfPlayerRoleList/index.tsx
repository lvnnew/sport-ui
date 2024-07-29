import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultHistoryOfPlayerRoleList from './DefaultHistoryOfPlayerRoleList';

const HistoryOfPlayerRoleList: FC<ListProps> = (props: ListProps) => (
  <DefaultHistoryOfPlayerRoleList {...props} />
);

export default HistoryOfPlayerRoleList;
