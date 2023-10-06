import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultManagerLoginTypeList from './DefaultManagerLoginTypeList';

const ManagerLoginTypeList: FC<ListProps> = (props: ListProps) => (
  <DefaultManagerLoginTypeList {...props} />
);

export default ManagerLoginTypeList;
