import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultMailingTypeCreate from './DefaultMailingTypeCreate';

const MailingTypeCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultMailingTypeCreate {...props} />
);

export default MailingTypeCreate;
