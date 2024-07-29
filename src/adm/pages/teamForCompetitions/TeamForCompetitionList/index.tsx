import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultTeamForCompetitionList from './DefaultTeamForCompetitionList';

const TeamForCompetitionList: FC<ListProps> = (props: ListProps) => (
  <DefaultTeamForCompetitionList {...props} />
);

export default TeamForCompetitionList;
