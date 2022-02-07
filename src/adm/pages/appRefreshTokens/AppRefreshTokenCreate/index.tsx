import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultAppRefreshTokenCreate from './DefaultAppRefreshTokenCreate';

const AppRefreshTokenCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultAppRefreshTokenCreate {...props} />
);

export default AppRefreshTokenCreate;
