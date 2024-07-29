import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultWscContactCreate from './DefaultWscContactCreate';

const WscContactCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultWscContactCreate {...props} />
);

export default WscContactCreate;
