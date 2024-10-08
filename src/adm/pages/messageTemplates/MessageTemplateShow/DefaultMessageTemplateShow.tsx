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
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <MailingCampaignsMessageTemplateIdTab label={translate('catalogs.mailingCampaigns.title.plural')} path='mailingCampaigns-messageTemplateId' />
        <MailingMessagesTemplateIdTab label={translate('catalogs.mailingMessages.title.plural')} path='mailingMessages-templateId' />
        <MessageTemplateLangVariantsMessageTemplateIdTab label={translate('catalogs.messageTemplateLangVariants.title.plural')} path='messageTemplateLangVariants-messageTemplateId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultMessageTemplateShow;
