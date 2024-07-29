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
import {TeamFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountTeamsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: TeamFilter;
}

const CountTeamsWidget: FC<CountTeamsWidgetProps> = ({
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
        query ($filter: TeamFilter) {
          _allTeamsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allTeamsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountTeamsWidget;
