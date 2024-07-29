/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultReportForClubShow from './DefaultReportForClubShow';

const ReportForClubShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultReportForClubShow {...props} />
);

export default ReportForClubShow;
