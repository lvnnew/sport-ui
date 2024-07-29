import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultPeriodTypeCreate from './DefaultPeriodTypeCreate';

const PeriodTypeCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultPeriodTypeCreate {...props} />
);

export default PeriodTypeCreate;
