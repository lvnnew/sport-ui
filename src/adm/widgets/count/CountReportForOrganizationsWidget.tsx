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
import {ReportForOrganizationFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountReportForOrganizationsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: ReportForOrganizationFilter;
}

const CountReportForOrganizationsWidget: FC<CountReportForOrganizationsWidgetProps> = ({
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
        query ($filter: ReportForOrganizationFilter) {
          _allReportForOrganizationsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allReportForOrganizationsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountReportForOrganizationsWidget;
