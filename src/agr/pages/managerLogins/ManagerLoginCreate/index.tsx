import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultManagerLoginCreate from './DefaultManagerLoginCreate';

const ManagerLoginCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultManagerLoginCreate {...props} />
);

export default ManagerLoginCreate;
