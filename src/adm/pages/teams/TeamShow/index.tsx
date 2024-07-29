/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultTeamShow from './DefaultTeamShow';

const TeamShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultTeamShow {...props} />
);

export default TeamShow;
