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
import {CompetitionFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountCompetitionsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: CompetitionFilter;
}

const CountCompetitionsWidget: FC<CountCompetitionsWidgetProps> = ({
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
        query ($filter: CompetitionFilter) {
          _allCompetitionsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allCompetitionsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountCompetitionsWidget;
