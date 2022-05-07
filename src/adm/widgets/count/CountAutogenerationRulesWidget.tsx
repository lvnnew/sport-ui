/* eslint-disable max-len */
import React, {
  FC,
} from 'react';
import NumberWiget, {
  NumberWigetProps,
} from '../../../widgets/NumberWiget';
import {
  gql,
} from '@apollo/client';
import {AutogenerationRuleFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAutogenerationRulesWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: AutogenerationRuleFilter;
}

const CountAutogenerationRulesWidget: FC<CountAutogenerationRulesWidgetProps> = ({
  filter,
  ...rest
}) => {
  return (
    <NumberWiget
      measuring='шт'
      {...rest}
      options={{
        variables: {
          filter,
        },
      }}
      request={gql`
        query ($filter: AutogenerationRuleFilter) {
          _allAutogenerationRulesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allAutogenerationRulesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountAutogenerationRulesWidget;
