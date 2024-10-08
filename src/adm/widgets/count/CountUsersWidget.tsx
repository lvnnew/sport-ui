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
import {UserFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountUsersWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: UserFilter;
}

const CountUsersWidget: FC<CountUsersWidgetProps> = ({
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
        query ($filter: UserFilter) {
          _allUsersMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allUsersMeta?.count?.toLocaleString()}
    />
  );
};

export default CountUsersWidget;
