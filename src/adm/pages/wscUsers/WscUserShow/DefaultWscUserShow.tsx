/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  useTranslate,
} from 'react-admin';
import WscContactsWscUserIdTab from './tabs/WscContactsWscUserIdTab';
import WscMessagesWscUserIdTab from './tabs/WscMessagesWscUserIdTab';
import MainTab from './MainTab';
import {additionalTabs} from './additionalTabs';
import DefaultActions from './DefaultActions';
import CatalogTitle from '../../../../raUiLib/CatalogTitle';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultWscUserShow: FC<ShowProps> = (props: ShowProps) => {
  const translate = useTranslate();

  return (
    <Show actions={<Breadcrumbs><DefaultActions /></Breadcrumbs>} title={<CatalogTitle />} {...props}>
      <TabbedShowLayout>
        <MainTab label={translate('app.mainTab')} />
        {additionalTabs.map(({Tab, label}, i) => <Tab label={label} key={i} />)}
        <WscContactsWscUserIdTab label={translate('catalogs.wscContacts.title.plural')} path='wscContacts-wscUserId' />
        <WscMessagesWscUserIdTab label={translate('catalogs.wscMessages.title.plural')} path='wscMessages-wscUserId' />
      </TabbedShowLayout>
    </Show>
  );
};

export default DefaultWscUserShow;
