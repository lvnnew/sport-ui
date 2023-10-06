import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultManagerLoginTypeCreate from './DefaultManagerLoginTypeCreate';

const ManagerLoginTypeCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultManagerLoginTypeCreate {...props} />
);

export default ManagerLoginTypeCreate;
