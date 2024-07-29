import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultPlayerForTeamMatchListCreate from './DefaultPlayerForTeamMatchListCreate';

const PlayerForTeamMatchListCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultPlayerForTeamMatchListCreate {...props} />
);

export default PlayerForTeamMatchListCreate;
