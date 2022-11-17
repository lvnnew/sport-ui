import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultMailingCampaignStatusCreate from './DefaultMailingCampaignStatusCreate';

const MailingCampaignStatusCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultMailingCampaignStatusCreate {...props} />
);

export default MailingCampaignStatusCreate;
