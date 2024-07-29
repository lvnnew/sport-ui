import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultParentCreate from './DefaultParentCreate';

const ParentCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultParentCreate {...props} />
);

export default ParentCreate;
