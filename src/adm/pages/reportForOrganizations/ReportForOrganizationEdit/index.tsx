import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultReportForOrganizationEdit from './DefaultReportForOrganizationEdit';

const ReportForOrganizationEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultReportForOrganizationEdit {...props} />
);

export default ReportForOrganizationEdit;
