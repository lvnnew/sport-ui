/* eslint-disable max-len */
import React, {
  FC,
} from 'react';
import NumberWidget, {
  NumberWidgetProps,
} from '../../../widgets/NumberWidget';
import {
  gql,
} from '@apollo/client';
import {ConfigurationVariableFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountConfigurationVariablesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: ConfigurationVariableFilter;
}

const CountConfigurationVariablesWidget: FC<CountConfigurationVariablesWidgetProps> = ({
  filter,
  ...rest
}) => {
  return (
    <NumberWidget
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
