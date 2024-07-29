import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultReportForOrganizationCreate from './DefaultReportForOrganizationCreate';

const ReportForOrganizationCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultReportForOrganizationCreate {...props} />
);

export default ReportForOrganizationCreate;
