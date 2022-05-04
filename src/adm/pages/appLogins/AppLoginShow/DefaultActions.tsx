import React from 'react';
import {
  EditButton,
  TopToolbar,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppLoginActions = () => (
  <TopToolbar sx={{alignItems: 'center'}}>
    <OpenAudit entityTypeId='appLogin' />
    <OpenHelp entityType='appLogins' />
    <EditButton />
  </TopToolbar>
);

export default DefaultAppLoginActions;
