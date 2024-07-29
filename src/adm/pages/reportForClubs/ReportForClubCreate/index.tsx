import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultReportForClubCreate from './DefaultReportForClubCreate';

const ReportForClubCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultReportForClubCreate {...props} />
);

export default ReportForClubCreate;
