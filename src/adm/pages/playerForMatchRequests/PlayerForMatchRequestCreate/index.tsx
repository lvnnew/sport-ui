import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultPlayerForMatchRequestCreate from './DefaultPlayerForMatchRequestCreate';

const PlayerForMatchRequestCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultPlayerForMatchRequestCreate {...props} />
);

export default PlayerForMatchRequestCreate;
