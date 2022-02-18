import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultEntityCreate from './DefaultEntityCreate';

const EntityCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultEntityCreate {...props} />
);

export default EntityCreate;
