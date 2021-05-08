import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultAppLoginCreate from './DefaultAppLoginCreate';

const AppLoginCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultAppLoginCreate {...props} />
);

export default AppLoginCreate;
