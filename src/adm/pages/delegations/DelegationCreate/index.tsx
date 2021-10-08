import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultDelegationCreate from './DefaultDelegationCreate';

const DelegationCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultDelegationCreate {...props} />
);

export default DelegationCreate;
