import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultUnitCreate from './DefaultUnitCreate';

const UnitCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultUnitCreate {...props} />
);

export default UnitCreate;
