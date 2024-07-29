import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultTeamMatchReportEdit from './DefaultTeamMatchReportEdit';

const TeamMatchReportEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultTeamMatchReportEdit {...props} />
);

export default TeamMatchReportEdit;
