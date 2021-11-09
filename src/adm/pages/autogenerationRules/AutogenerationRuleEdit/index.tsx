import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultAutogenerationRuleEdit from './DefaultAutogenerationRuleEdit';

const AutogenerationRuleEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultAutogenerationRuleEdit {...props} />
);

export default AutogenerationRuleEdit;
