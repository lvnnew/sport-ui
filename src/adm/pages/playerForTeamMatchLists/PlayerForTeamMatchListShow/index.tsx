/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultPlayerForTeamMatchListShow from './DefaultPlayerForTeamMatchListShow';

const PlayerForTeamMatchListShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultPlayerForTeamMatchListShow {...props} />
);

export default PlayerForTeamMatchListShow;
