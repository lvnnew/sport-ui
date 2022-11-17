/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultMailingCampaignStatusShow from './DefaultMailingCampaignStatusShow';

const MailingCampaignStatusShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultMailingCampaignStatusShow {...props} />
);

export default MailingCampaignStatusShow;
