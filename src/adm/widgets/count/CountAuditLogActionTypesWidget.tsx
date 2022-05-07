/* eslint-disable max-len */
import React, {
  FC,
} from 'react';
import NumberWiget, {
  NumberWigetProps,
} from '../../../widgets/NumberWiget';
import {
  gql,
} from '@apollo/client';
import {AuditLogActionTypeFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountAuditLogActionTypesWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: AuditLogActionTypeFilter;
}

const CountAuditLogActionTypesWidget: FC<CountAuditLogActionTypesWidgetProps> = ({
  filter,
  ...rest
}) => {
  return (
    <NumberWiget
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
