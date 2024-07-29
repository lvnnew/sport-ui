import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultPlayerForCompetitionTeamCreate from './DefaultPlayerForCompetitionTeamCreate';

const PlayerForCompetitionTeamCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultPlayerForCompetitionTeamCreate {...props} />
);

export default PlayerForCompetitionTeamCreate;
