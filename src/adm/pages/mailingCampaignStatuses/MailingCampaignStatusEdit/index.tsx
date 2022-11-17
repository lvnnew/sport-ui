import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultMailingCampaignStatusEdit from './DefaultMailingCampaignStatusEdit';

const MailingCampaignStatusEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultMailingCampaignStatusEdit {...props} />
);

export default MailingCampaignStatusEdit;
