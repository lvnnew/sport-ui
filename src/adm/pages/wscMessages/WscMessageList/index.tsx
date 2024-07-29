import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultWscMessageList from './DefaultWscMessageList';

const WscMessageList: FC<ListProps> = (props: ListProps) => (
  <DefaultWscMessageList {...props} />
);

export default WscMessageList;
