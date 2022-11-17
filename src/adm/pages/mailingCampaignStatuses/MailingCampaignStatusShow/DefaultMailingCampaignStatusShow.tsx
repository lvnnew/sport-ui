/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import MailingCampaignsMailingCampaignStatusIdTab from './tabs/MailingCampaignsMailingCampaignStatusIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMailingCampaignStatusShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <MailingCampaignsMailingCampaignStatusIdTab label={translate('catalogs.mailingCampaigns.title')} path='mailingCampaigns-mailingCampaignStatusId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultMailingCampaignStatusShow;
