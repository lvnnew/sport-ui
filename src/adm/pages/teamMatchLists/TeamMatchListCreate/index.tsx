import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultTeamMatchListCreate from './DefaultTeamMatchListCreate';

const TeamMatchListCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultTeamMatchListCreate {...props} />
);

export default TeamMatchListCreate;
