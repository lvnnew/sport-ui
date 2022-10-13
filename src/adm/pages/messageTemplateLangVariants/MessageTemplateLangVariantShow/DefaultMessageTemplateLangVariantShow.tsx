/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import MailingMessagesMessageTemplateLangVariantIdTab from './tabs/MailingMessagesMessageTemplateLangVariantIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateLangVariantShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <MailingMessagesMessageTemplateLangVariantIdTab label={translate('catalogs.mailingMessages.title')} path='mailingMessages-messageTemplateLangVariantId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultMessageTemplateLangVariantShow;
