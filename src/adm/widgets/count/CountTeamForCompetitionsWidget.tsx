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
import {TeamForCompetitionFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountTeamForCompetitionsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: TeamForCompetitionFilter;
}

const CountTeamForCompetitionsWidget: FC<CountTeamForCompetitionsWidgetProps> = ({
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
        query ($filter: TeamForCompetitionFilter) {
          _allTeamForCompetitionsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allTeamForCompetitionsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountTeamForCompetitionsWidget;
