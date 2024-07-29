import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultPlayerCompetitionRatingList from './DefaultPlayerCompetitionRatingList';

const PlayerCompetitionRatingList: FC<ListProps> = (props: ListProps) => (
  <DefaultPlayerCompetitionRatingList {...props} />
);

export default PlayerCompetitionRatingList;
