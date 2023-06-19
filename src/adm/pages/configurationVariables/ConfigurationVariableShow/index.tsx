/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultConfigurationVariableShow from './DefaultConfigurationVariableShow';

const ConfigurationVariableShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultConfigurationVariableShow {...props} />
);

export default ConfigurationVariableShow;
