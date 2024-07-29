import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultReportForTeamCreate from './DefaultReportForTeamCreate';

const ReportForTeamCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultReportForTeamCreate {...props} />
);

export default ReportForTeamCreate;
