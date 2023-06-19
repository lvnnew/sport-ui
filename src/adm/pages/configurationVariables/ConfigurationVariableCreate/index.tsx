import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultConfigurationVariableCreate from './DefaultConfigurationVariableCreate';

const ConfigurationVariableCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultConfigurationVariableCreate {...props} />
);

export default ConfigurationVariableCreate;
