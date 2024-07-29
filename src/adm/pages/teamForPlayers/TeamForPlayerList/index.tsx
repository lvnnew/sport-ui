import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultTeamForPlayerList from './DefaultTeamForPlayerList';

const TeamForPlayerList: FC<ListProps> = (props: ListProps) => (
  <DefaultTeamForPlayerList {...props} />
);

export default TeamForPlayerList;
