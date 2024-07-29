import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultWscUserList from './DefaultWscUserList';

const WscUserList: FC<ListProps> = (props: ListProps) => (
  <DefaultWscUserList {...props} />
);

export default WscUserList;
