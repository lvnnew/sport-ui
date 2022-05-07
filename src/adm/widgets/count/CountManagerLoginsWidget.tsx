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
import {ManagerLoginFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountManagerLoginsWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: ManagerLoginFilter;
}

const CountManagerLoginsWidget: FC<CountManagerLoginsWidgetProps> = ({
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
        query ($filter: ManagerLoginFilter) {
          _allManagerLoginsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allManagerLoginsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountManagerLoginsWidget;
