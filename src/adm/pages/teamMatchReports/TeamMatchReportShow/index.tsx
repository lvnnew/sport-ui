/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultTeamMatchReportShow from './DefaultTeamMatchReportShow';

const TeamMatchReportShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultTeamMatchReportShow {...props} />
);

export default TeamMatchReportShow;
