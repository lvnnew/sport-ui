import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultLanguageCreate from './DefaultLanguageCreate';

const LanguageCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultLanguageCreate {...props} />
);

export default LanguageCreate;
