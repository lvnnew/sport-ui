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
import {PlayerCompetitionRatingFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountPlayerCompetitionRatingsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: PlayerCompetitionRatingFilter;
}

const CountPlayerCompetitionRatingsWidget: FC<CountPlayerCompetitionRatingsWidgetProps> = ({
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
        query ($filter: PlayerCompetitionRatingFilter) {
          _allPlayerCompetitionRatingsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allPlayerCompetitionRatingsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountPlayerCompetitionRatingsWidget;
