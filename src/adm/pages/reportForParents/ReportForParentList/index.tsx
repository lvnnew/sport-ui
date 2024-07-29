import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultReportForParentList from './DefaultReportForParentList';

const ReportForParentList: FC<ListProps> = (props: ListProps) => (
  <DefaultReportForParentList {...props} />
);

export default ReportForParentList;
