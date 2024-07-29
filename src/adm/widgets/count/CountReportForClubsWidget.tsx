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
import {ReportForClubFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountReportForClubsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: ReportForClubFilter;
}

const CountReportForClubsWidget: FC<CountReportForClubsWidgetProps> = ({
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
        query ($filter: ReportForClubFilter) {
          _allReportForClubsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allReportForClubsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountReportForClubsWidget;
