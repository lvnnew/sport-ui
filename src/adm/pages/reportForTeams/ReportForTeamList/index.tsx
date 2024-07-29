import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultReportForTeamList from './DefaultReportForTeamList';

const ReportForTeamList: FC<ListProps> = (props: ListProps) => (
  <DefaultReportForTeamList {...props} />
);

export default ReportForTeamList;
