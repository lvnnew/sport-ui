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
import {PlayerForCompetitionTeamFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountPlayerForCompetitionTeamsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: PlayerForCompetitionTeamFilter;
}

const CountPlayerForCompetitionTeamsWidget: FC<CountPlayerForCompetitionTeamsWidgetProps> = ({
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
        query ($filter: PlayerForCompetitionTeamFilter) {
          _allPlayerForCompetitionTeamsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allPlayerForCompetitionTeamsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountPlayerForCompetitionTeamsWidget;
