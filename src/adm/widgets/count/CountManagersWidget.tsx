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
import {ManagerFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountManagersWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: ManagerFilter;
}

const CountManagersWidget: FC<CountManagersWidgetProps> = ({
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
        query ($filter: ManagerFilter) {
          _allManagersMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allManagersMeta?.count?.toLocaleString()}
    />
  );
};

export default CountManagersWidget;
