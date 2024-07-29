import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultReportForParentEdit from './DefaultReportForParentEdit';

const ReportForParentEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultReportForParentEdit {...props} />
);

export default ReportForParentEdit;
