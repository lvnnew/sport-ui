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
import {MailingCampaignFilter} from '../../../generated/graphql';

// DO NOT EDIT! THIS IS GENERATED FILE

interface CountMailingCampaignsWidgetProps extends
Omit<NumberWidgetProps, 'request' | 'resultToValue'> {
  filter?: MailingCampaignFilter;
}

const CountMailingCampaignsWidget: FC<CountMailingCampaignsWidgetProps> = ({
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
        query ($filter: MailingCampaignFilter) {
          _allMailingCampaignsMeta(filter: $filter) {
            count
          }
        }
      `}
      resultToValue={result => result?._allMailingCampaignsMeta?.count?.toLocaleString()}
    />
  );
};

export default CountMailingCampaignsWidget;
