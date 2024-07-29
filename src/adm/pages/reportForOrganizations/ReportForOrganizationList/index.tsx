import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultReportForOrganizationList from './DefaultReportForOrganizationList';

const ReportForOrganizationList: FC<ListProps> = (props: ListProps) => (
  <DefaultReportForOrganizationList {...props} />
);

export default ReportForOrganizationList;
