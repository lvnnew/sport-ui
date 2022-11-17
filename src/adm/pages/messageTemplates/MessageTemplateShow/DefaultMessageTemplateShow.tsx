/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import MailingCampaignsMessageTemplateIdTab from './tabs/MailingCampaignsMessageTemplateIdTab';
import MailingMessagesTemplateIdTab from './tabs/MailingMessagesTemplateIdTab';
import MessageTemplateLangVariantsMessageTemplateIdTab from './tabs/MessageTemplateLangVariantsMessageTemplateIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <MailingCampaignsMessageTemplateIdTab label={translate('catalogs.mailingCampaigns.title')} path='mailingCampaigns-messageTemplateId' />
        <MailingMessagesTemplateIdTab label={translate('catalogs.mailingMessages.title')} path='mailingMessages-templateId' />
        <MessageTemplateLangVariantsMessageTemplateIdTab label={translate('catalogs.messageTemplateLangVariants.title')} path='messageTemplateLangVariants-messageTemplateId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultMessageTemplateShow;
