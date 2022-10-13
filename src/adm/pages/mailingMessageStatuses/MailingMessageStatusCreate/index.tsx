import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultMailingMessageStatusCreate from './DefaultMailingMessageStatusCreate';

const MailingMessageStatusCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultMailingMessageStatusCreate {...props} />
);

export default MailingMessageStatusCreate;
