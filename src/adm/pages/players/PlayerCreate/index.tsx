import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultPlayerCreate from './DefaultPlayerCreate';

const PlayerCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultPlayerCreate {...props} />
);

export default PlayerCreate;
