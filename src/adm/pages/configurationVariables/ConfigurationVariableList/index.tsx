import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultConfigurationVariableList from './DefaultConfigurationVariableList';

const ConfigurationVariableList: FC<ListProps> = (props: ListProps) => (
  <DefaultConfigurationVariableList {...props} />
);

export default ConfigurationVariableList;
