import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultMatchVideoCreate from './DefaultMatchVideoCreate';

const MatchVideoCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultMatchVideoCreate {...props} />
);

export default MatchVideoCreate;
