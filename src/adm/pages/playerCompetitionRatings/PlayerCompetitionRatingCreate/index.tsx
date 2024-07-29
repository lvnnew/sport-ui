import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultPlayerCompetitionRatingCreate from './DefaultPlayerCompetitionRatingCreate';

const PlayerCompetitionRatingCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultPlayerCompetitionRatingCreate {...props} />
);

export default PlayerCompetitionRatingCreate;
