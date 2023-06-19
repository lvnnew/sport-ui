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
import {ConfigurationVariableFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountConfigurationVariablesWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: ConfigurationVariableFilter;
}

const CountConfigurationVariablesWidget: FC<CountConfigurationVariablesWidgetProps> = ({
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
        query ($filter: ConfigurationVariableFilter) {
          _allConfigurationVariablesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allConfigurationVariablesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountConfigurationVariablesWidget;
