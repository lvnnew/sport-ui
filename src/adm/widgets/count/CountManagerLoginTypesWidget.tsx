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
import {ManagerLoginTypeFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountManagerLoginTypesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: ManagerLoginTypeFilter;
}

const CountManagerLoginTypesWidget: FC<CountManagerLoginTypesWidgetProps> = ({
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
        query ($filter: ManagerLoginTypeFilter) {
          _allManagerLoginTypesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allManagerLoginTypesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountManagerLoginTypesWidget;
