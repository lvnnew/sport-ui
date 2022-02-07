import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultAdmRefreshTokenCreate from './DefaultAdmRefreshTokenCreate';

const AdmRefreshTokenCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultAdmRefreshTokenCreate {...props} />
);

export default AdmRefreshTokenCreate;
