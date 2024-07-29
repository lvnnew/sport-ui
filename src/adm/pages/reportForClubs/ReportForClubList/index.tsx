import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultReportForClubList from './DefaultReportForClubList';

const ReportForClubList: FC<ListProps> = (props: ListProps) => (
  <DefaultReportForClubList {...props} />
);

export default ReportForClubList;
