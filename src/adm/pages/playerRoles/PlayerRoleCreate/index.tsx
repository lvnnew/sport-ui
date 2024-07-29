import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultPlayerRoleCreate from './DefaultPlayerRoleCreate';

const PlayerRoleCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultPlayerRoleCreate {...props} />
);

export default PlayerRoleCreate;
