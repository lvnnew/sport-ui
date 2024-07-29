import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultReportForTeamEdit from './DefaultReportForTeamEdit';

const ReportForTeamEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultReportForTeamEdit {...props} />
);

export default ReportForTeamEdit;
