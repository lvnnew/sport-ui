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
import {ReportForTeamFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountReportForTeamsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: ReportForTeamFilter;
}

const CountReportForTeamsWidget: FC<CountReportForTeamsWidgetProps> = ({
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
        query ($filter: ReportForTeamFilter) {
          _allReportForTeamsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allReportForTeamsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountReportForTeamsWidget;
