import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultTagCreate from './DefaultTagCreate';

const TagCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultTagCreate {...props} />
);

export default TagCreate;
