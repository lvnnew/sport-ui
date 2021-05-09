import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultStatCreate from './DefaultStatCreate';

const StatCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultStatCreate {...props} />
);

export default StatCreate;
