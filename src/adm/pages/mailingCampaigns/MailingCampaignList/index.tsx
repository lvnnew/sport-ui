import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultMailingCampaignList from './DefaultMailingCampaignList';

const MailingCampaignList: FC<ListProps> = (props: ListProps) => (
  <DefaultMailingCampaignList {...props} />
);

export default MailingCampaignList;
