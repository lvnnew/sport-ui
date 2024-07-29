import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultMatchStatusCreate from './DefaultMatchStatusCreate';

const MatchStatusCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultMatchStatusCreate {...props} />
);

export default MatchStatusCreate;
