import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultUserCreate from './DefaultUserCreate';

const UserCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultUserCreate {...props} />
);

export default UserCreate;
