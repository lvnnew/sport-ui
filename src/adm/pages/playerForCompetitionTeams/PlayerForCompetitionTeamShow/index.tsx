/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultPlayerForCompetitionTeamShow from './DefaultPlayerForCompetitionTeamShow';

const PlayerForCompetitionTeamShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultPlayerForCompetitionTeamShow {...props} />
);

export default PlayerForCompetitionTeamShow;
