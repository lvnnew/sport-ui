import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultReportForClubEdit from './DefaultReportForClubEdit';

const ReportForClubEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultReportForClubEdit {...props} />
);

export default ReportForClubEdit;
