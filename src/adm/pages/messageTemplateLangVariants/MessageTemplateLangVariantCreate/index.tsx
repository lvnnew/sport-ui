import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultMessageTemplateLangVariantCreate from './DefaultMessageTemplateLangVariantCreate';

const MessageTemplateLangVariantCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultMessageTemplateLangVariantCreate {...props} />
);

export default MessageTemplateLangVariantCreate;
