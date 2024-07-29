import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultMatchCreate from './DefaultMatchCreate';

const MatchCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultMatchCreate {...props} />
);

export default MatchCreate;
