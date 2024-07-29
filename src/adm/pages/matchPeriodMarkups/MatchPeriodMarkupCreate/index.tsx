import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultMatchPeriodMarkupCreate from './DefaultMatchPeriodMarkupCreate';

const MatchPeriodMarkupCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultMatchPeriodMarkupCreate {...props} />
);

export default MatchPeriodMarkupCreate;
