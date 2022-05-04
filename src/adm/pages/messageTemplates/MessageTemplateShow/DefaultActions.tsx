import React from 'react';
import {
  EditButton,
  TopToolbar,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateActions = () => (
  <TopToolbar sx={{alignItems: 'center'}}>
    <OpenAudit entityTypeId='messageTemplate' />
    <OpenHelp entityType='messageTemplates' />
    <EditButton />
  </TopToolbar>
);

export default DefaultMessageTemplateActions;
