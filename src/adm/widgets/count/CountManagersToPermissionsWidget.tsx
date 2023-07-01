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
import {ManagersToPermissionFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountManagersToPermissionsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: ManagersToPermissionFilter;
}

const CountManagersToPermissionsWidget: FC<CountManagersToPermissionsWidgetProps> = ({
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
        query ($filter: ManagersToPermissionFilter) {
          _allManagersToPermissionsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allManagersToPermissionsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountManagersToPermissionsWidget;
