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
import {TeamMatchListFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountTeamMatchListsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: TeamMatchListFilter;
}

const CountTeamMatchListsWidget: FC<CountTeamMatchListsWidgetProps> = ({
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
        query ($filter: TeamMatchListFilter) {
          _allTeamMatchListsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allTeamMatchListsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountTeamMatchListsWidget;
