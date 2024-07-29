import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultWscContactList from './DefaultWscContactList';

const WscContactList: FC<ListProps> = (props: ListProps) => (
  <DefaultWscContactList {...props} />
);

export default WscContactList;
