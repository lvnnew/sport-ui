import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultManagerCreate from './DefaultManagerCreate';

const ManagerCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultManagerCreate {...props} />
);

export default ManagerCreate;
