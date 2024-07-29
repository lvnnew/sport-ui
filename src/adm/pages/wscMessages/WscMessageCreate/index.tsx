import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultWscMessageCreate from './DefaultWscMessageCreate';

const WscMessageCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultWscMessageCreate {...props} />
);

export default WscMessageCreate;
