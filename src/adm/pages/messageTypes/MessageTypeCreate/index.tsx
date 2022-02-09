import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultMessageTypeCreate from './DefaultMessageTypeCreate';

const MessageTypeCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultMessageTypeCreate {...props} />
);

export default MessageTypeCreate;
