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
import {MailingCampaignStatusFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMailingCampaignStatusesWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: MailingCampaignStatusFilter;
}

const CountMailingCampaignStatusesWidget: FC<CountMailingCampaignStatusesWidgetProps> = ({
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
        query ($filter: MailingCampaignStatusFilter) {
          _allMailingCampaignStatusesMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMailingCampaignStatusesMeta?.count?.toLocaleString()}
    />
  );
};

export default CountMailingCampaignStatusesWidget;
