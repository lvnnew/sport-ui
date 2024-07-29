import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultTeamCreate from './DefaultTeamCreate';

const TeamCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultTeamCreate {...props} />
);

export default TeamCreate;
