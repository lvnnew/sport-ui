import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultMessageTemplateCreate from './DefaultMessageTemplateCreate';

const MessageTemplateCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultMessageTemplateCreate {...props} />
);

export default MessageTemplateCreate;
