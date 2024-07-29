import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultReportForParentCreate from './DefaultReportForParentCreate';

const ReportForParentCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultReportForParentCreate {...props} />
);

export default ReportForParentCreate;
