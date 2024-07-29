import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultPlayerRankCreate from './DefaultPlayerRankCreate';

const PlayerRankCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultPlayerRankCreate {...props} />
);

export default PlayerRankCreate;
