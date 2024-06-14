/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import MailingMessagesLanguageIdTab from './tabs/MailingMessagesLanguageIdTab';
import ManagersLanguageIdTab from './tabs/ManagersLanguageIdTab';
import MessageTemplateLangVariantsLanguageIdTab from './tabs/MessageTemplateLangVariantsLanguageIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultLanguageShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <MailingMessagesLanguageIdTab label={translate('catalogs.mailingMessages.title.plural')} path='mailingMessages-languageId' />
        <ManagersLanguageIdTab label={translate('catalogs.managers.title.plural')} path='managers-languageId' />
        <MessageTemplateLangVariantsLanguageIdTab label={translate('catalogs.messageTemplateLangVariants.title.plural')} path='messageTemplateLangVariants-languageId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultLanguageShow;
