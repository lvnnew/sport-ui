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
import {PermissionFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountPermissionsWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: PermissionFilter;
}

const CountPermissionsWidget: FC<CountPermissionsWidgetProps> = ({
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
        query ($filter: PermissionFilter) {
          _allPermissionsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allPermissionsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountPermissionsWidget;
