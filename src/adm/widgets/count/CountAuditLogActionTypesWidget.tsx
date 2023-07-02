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
import {AuditLogActionTypeFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAuditLogActionTypesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: AuditLogActionTypeFilter;
}

const CountAuditLogActionTypesWidget: FC<CountAuditLogActionTypesWidgetProps> = ({
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
        query ($filter: AuditLogActionTypeFilter) {
          _allAuditLogActionTypesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allAuditLogActionTypesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountAuditLogActionTypesWidget;
