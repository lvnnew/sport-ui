/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultTeamForCompetitionShow from './DefaultTeamForCompetitionShow';

const TeamForCompetitionShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultTeamForCompetitionShow {...props} />
);

export default TeamForCompetitionShow;
