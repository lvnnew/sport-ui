import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultAutogenerationRuleCreate from './DefaultAutogenerationRuleCreate';

const AutogenerationRuleCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultAutogenerationRuleCreate {...props} />
);

export default AutogenerationRuleCreate;
