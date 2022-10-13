import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultMailingMessageCreate from './DefaultMailingMessageCreate';

const MailingMessageCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultMailingMessageCreate {...props} />
);

export default MailingMessageCreate;
