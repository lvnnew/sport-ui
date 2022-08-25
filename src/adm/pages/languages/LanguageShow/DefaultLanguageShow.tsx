/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import ManagersLanguageIdTab from './tabs/ManagersLanguageIdTab';
import MessageTemplateLangVariantsLanguageIdTab from './tabs/MessageTemplateLangVariantsLanguageIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultLanguageShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<DefaultActions />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <ManagersLanguageIdTab label={translate('catalogs.managers.title')} path='managers-languageId' />
        <MessageTemplateLangVariantsLanguageIdTab label={translate('catalogs.messageTemplateLangVariants.title')} path='messageTemplateLangVariants-languageId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultLanguageShow;
