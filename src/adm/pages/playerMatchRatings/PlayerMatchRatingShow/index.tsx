/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultPlayerMatchRatingShow from './DefaultPlayerMatchRatingShow';

const PlayerMatchRatingShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultPlayerMatchRatingShow {...props} />
);

export default PlayerMatchRatingShow;
