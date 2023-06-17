import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import CustomManagerList from './CustomManagerList';

const ManagerList: FC<ListProps> = (props: ListProps) => (
  <CustomManagerList {...props} />
);

export default ManagerList;
