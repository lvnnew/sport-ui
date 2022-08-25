import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultTemplateStyleCreate from './DefaultTemplateStyleCreate';

const TemplateStyleCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultTemplateStyleCreate {...props} />
);

export default TemplateStyleCreate;
