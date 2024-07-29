import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultMatchRequestCreate from './DefaultMatchRequestCreate';

const MatchRequestCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultMatchRequestCreate {...props} />
);

export default MatchRequestCreate;
