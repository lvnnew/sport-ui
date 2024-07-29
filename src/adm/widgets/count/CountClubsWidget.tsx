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
import {ClubFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountClubsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: ClubFilter;
}

const CountClubsWidget: FC<CountClubsWidgetProps> = ({
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
        query ($filter: ClubFilter) {
          _allClubsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allClubsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountClubsWidget;
