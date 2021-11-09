import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultAutogenerationRuleList from './DefaultAutogenerationRuleList';

const AutogenerationRuleList: FC<ListProps> = (props: ListProps) => (
  <DefaultAutogenerationRuleList {...props} />
);

export default AutogenerationRuleList;
