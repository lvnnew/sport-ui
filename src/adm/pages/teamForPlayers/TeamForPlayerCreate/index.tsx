import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultTeamForPlayerCreate from './DefaultTeamForPlayerCreate';

const TeamForPlayerCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultTeamForPlayerCreate {...props} />
);

export default TeamForPlayerCreate;
