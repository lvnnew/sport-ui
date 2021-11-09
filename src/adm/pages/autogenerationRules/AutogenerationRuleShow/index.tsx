/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultAutogenerationRuleShow from './DefaultAutogenerationRuleShow';

const AutogenerationRuleShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultAutogenerationRuleShow {...props} />
);

export default AutogenerationRuleShow;
