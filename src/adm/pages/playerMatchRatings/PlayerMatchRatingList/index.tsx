import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultPlayerMatchRatingList from './DefaultPlayerMatchRatingList';

const PlayerMatchRatingList: FC<ListProps> = (props: ListProps) => (
  <DefaultPlayerMatchRatingList {...props} />
);

export default PlayerMatchRatingList;
