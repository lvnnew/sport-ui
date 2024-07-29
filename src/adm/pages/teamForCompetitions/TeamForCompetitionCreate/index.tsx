import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultTeamForCompetitionCreate from './DefaultTeamForCompetitionCreate';

const TeamForCompetitionCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultTeamForCompetitionCreate {...props} />
);

export default TeamForCompetitionCreate;
