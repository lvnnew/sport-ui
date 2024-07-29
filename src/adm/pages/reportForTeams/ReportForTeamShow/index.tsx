/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultReportForTeamShow from './DefaultReportForTeamShow';

const ReportForTeamShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultReportForTeamShow {...props} />
);

export default ReportForTeamShow;
