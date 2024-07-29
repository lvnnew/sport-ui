import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultTeamMatchListList from './DefaultTeamMatchListList';

const TeamMatchListList: FC<ListProps> = (props: ListProps) => (
  <DefaultTeamMatchListList {...props} />
);

export default TeamMatchListList;
