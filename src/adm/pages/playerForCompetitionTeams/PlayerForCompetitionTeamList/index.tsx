import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultPlayerForCompetitionTeamList from './DefaultPlayerForCompetitionTeamList';

const PlayerForCompetitionTeamList: FC<ListProps> = (props: ListProps) => (
  <DefaultPlayerForCompetitionTeamList {...props} />
);

export default PlayerForCompetitionTeamList;
