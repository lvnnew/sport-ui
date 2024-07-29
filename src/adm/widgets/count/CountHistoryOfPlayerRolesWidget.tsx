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
import {HistoryOfPlayerRoleFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountHistoryOfPlayerRolesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: HistoryOfPlayerRoleFilter;
}

const CountHistoryOfPlayerRolesWidget: FC<CountHistoryOfPlayerRolesWidgetProps> = ({
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
        query ($filter: HistoryOfPlayerRoleFilter) {
          _allHistoryOfPlayerRolesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allHistoryOfPlayerRolesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountHistoryOfPlayerRolesWidget;
