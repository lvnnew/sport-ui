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
import {MailingCampaignStatusFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMailingCampaignStatusesWidgetProps extends
Omit<NumberWigetProps, 'request' | 'resultToValue'> {
  filter?: MailingCampaignStatusFilter;
}

const CountMailingCampaignStatusesWidget: FC<CountMailingCampaignStatusesWidgetProps> = ({
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
