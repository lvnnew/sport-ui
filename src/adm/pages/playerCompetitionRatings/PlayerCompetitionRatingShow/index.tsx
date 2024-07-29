/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultPlayerCompetitionRatingShow from './DefaultPlayerCompetitionRatingShow';

const PlayerCompetitionRatingShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultPlayerCompetitionRatingShow {...props} />
);

export default PlayerCompetitionRatingShow;
