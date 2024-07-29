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
import {PlayerForTeamMatchListFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountPlayerForTeamMatchListsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: PlayerForTeamMatchListFilter;
}

const CountPlayerForTeamMatchListsWidget: FC<CountPlayerForTeamMatchListsWidgetProps> = ({
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
        query ($filter: PlayerForTeamMatchListFilter) {
          _allPlayerForTeamMatchListsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allPlayerForTeamMatchListsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountPlayerForTeamMatchListsWidget;
