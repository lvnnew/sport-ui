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
import {ManagersToRoleFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountManagersToRolesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: ManagersToRoleFilter;
}

const CountManagersToRolesWidget: FC<CountManagersToRolesWidgetProps> = ({
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
        query ($filter: ManagersToRoleFilter) {
          _allManagersToRolesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allManagersToRolesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountManagersToRolesWidget;
