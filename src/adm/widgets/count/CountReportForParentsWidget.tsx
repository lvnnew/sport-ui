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
import {ReportForParentFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountReportForParentsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: ReportForParentFilter;
}

const CountReportForParentsWidget: FC<CountReportForParentsWidgetProps> = ({
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
        query ($filter: ReportForParentFilter) {
          _allReportForParentsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allReportForParentsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountReportForParentsWidget;
