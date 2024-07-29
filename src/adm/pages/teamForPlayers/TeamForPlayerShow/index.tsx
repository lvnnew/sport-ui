/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultTeamForPlayerShow from './DefaultTeamForPlayerShow';

const TeamForPlayerShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultTeamForPlayerShow {...props} />
);

export default TeamForPlayerShow;
