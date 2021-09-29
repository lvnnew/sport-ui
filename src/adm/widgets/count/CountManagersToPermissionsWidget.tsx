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
import {ManagersToPermissionFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountManagersToPermissionsWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: ManagersToPermissionFilter;
}

const CountManagersToPermissionsWidget: FC<CountManagersToPermissionsWidgetProps> = ({
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
        query ($filter: ManagersToPermissionFilter) {
          _allManagersToPermissionsMeta(filter: $filter) {
            count
          }
        }`}
      resultToValue={result => result?._allManagersToPermissionsMeta?.count}
    />
  );
};

export default CountManagersToPermissionsWidget;
