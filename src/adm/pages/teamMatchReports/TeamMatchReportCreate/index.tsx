import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultTeamMatchReportCreate from './DefaultTeamMatchReportCreate';

const TeamMatchReportCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultTeamMatchReportCreate {...props} />
);

export default TeamMatchReportCreate;
