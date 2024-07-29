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
import {TeamMatchReportFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountTeamMatchReportsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: TeamMatchReportFilter;
}

const CountTeamMatchReportsWidget: FC<CountTeamMatchReportsWidgetProps> = ({
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
        query ($filter: TeamMatchReportFilter) {
          _allTeamMatchReportsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allTeamMatchReportsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountTeamMatchReportsWidget;
