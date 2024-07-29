import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultWscUserCreate from './DefaultWscUserCreate';

const WscUserCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultWscUserCreate {...props} />
);

export default WscUserCreate;
