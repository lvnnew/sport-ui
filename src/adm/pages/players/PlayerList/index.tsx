import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultPlayerList from './DefaultPlayerList';

const PlayerList: FC<ListProps> = (props: ListProps) => (
  <DefaultPlayerList {...props} />
);

export default PlayerList;
