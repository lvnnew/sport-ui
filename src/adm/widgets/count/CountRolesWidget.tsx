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
import {RoleFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountRolesWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: RoleFilter;
}

const CountRolesWidget: FC<CountRolesWidgetProps> = ({
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
        query ($filter: RoleFilter) {
          _allRolesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allRolesMeta?.count}
    />
  );
};

export default CountRolesWidget;
