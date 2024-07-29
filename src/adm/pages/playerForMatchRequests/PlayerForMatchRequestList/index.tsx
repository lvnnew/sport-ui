import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultPlayerForMatchRequestList from './DefaultPlayerForMatchRequestList';

const PlayerForMatchRequestList: FC<ListProps> = (props: ListProps) => (
  <DefaultPlayerForMatchRequestList {...props} />
);

export default PlayerForMatchRequestList;
