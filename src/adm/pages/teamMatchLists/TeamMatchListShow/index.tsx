/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultTeamMatchListShow from './DefaultTeamMatchListShow';

const TeamMatchListShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultTeamMatchListShow {...props} />
);

export default TeamMatchListShow;
