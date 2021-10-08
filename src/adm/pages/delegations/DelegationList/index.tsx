import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultDelegationList from './DefaultDelegationList';

const DelegationList: FC<ListProps> = (props: ListProps) => (
  <DefaultDelegationList {...props} />
);

export default DelegationList;
