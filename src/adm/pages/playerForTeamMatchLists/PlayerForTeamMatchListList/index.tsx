import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultPlayerForTeamMatchListList from './DefaultPlayerForTeamMatchListList';

const PlayerForTeamMatchListList: FC<ListProps> = (props: ListProps) => (
  <DefaultPlayerForTeamMatchListList {...props} />
);

export default PlayerForTeamMatchListList;
