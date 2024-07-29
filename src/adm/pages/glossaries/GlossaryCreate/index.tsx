import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultGlossaryCreate from './DefaultGlossaryCreate';

const GlossaryCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultGlossaryCreate {...props} />
);

export default GlossaryCreate;
