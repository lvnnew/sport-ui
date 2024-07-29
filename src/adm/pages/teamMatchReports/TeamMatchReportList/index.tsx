import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultTeamMatchReportList from './DefaultTeamMatchReportList';

const TeamMatchReportList: FC<ListProps> = (props: ListProps) => (
  <DefaultTeamMatchReportList {...props} />
);

export default TeamMatchReportList;
