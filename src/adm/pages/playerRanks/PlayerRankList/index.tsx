import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultPlayerRankList from './DefaultPlayerRankList';

const PlayerRankList: FC<ListProps> = (props: ListProps) => (
  <DefaultPlayerRankList {...props} />
);

export default PlayerRankList;
