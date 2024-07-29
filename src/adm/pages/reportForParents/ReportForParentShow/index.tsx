/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultReportForParentShow from './DefaultReportForParentShow';

const ReportForParentShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultReportForParentShow {...props} />
);

export default ReportForParentShow;
