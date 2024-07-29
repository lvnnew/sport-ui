/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultPlayerRankShow from './DefaultPlayerRankShow';

const PlayerRankShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultPlayerRankShow {...props} />
);

export default PlayerRankShow;
