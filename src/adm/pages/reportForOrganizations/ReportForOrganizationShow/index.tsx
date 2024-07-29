/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultReportForOrganizationShow from './DefaultReportForOrganizationShow';

const ReportForOrganizationShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultReportForOrganizationShow {...props} />
);

export default ReportForOrganizationShow;
