import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultMatchRequestList from './DefaultMatchRequestList';

const MatchRequestList: FC<ListProps> = (props: ListProps) => (
  <DefaultMatchRequestList {...props} />
);

export default MatchRequestList;
