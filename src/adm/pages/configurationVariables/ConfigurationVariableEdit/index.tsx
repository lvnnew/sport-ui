import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultConfigurationVariableEdit from './DefaultConfigurationVariableEdit';

const ConfigurationVariableEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultConfigurationVariableEdit {...props} />
);

export default ConfigurationVariableEdit;
