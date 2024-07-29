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
import {TeamForPlayerFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountTeamForPlayersWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: TeamForPlayerFilter;
}

const CountTeamForPlayersWidget: FC<CountTeamForPlayersWidgetProps> = ({
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
        query ($filter: TeamForPlayerFilter) {
          _allTeamForPlayersMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allTeamForPlayersMeta?.count?.toLocaleString()}
    />
  );
};

export default CountTeamForPlayersWidget;
