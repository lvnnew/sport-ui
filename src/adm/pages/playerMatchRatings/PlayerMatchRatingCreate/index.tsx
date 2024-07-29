import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultPlayerMatchRatingCreate from './DefaultPlayerMatchRatingCreate';

const PlayerMatchRatingCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultPlayerMatchRatingCreate {...props} />
);

export default PlayerMatchRatingCreate;
