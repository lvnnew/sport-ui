import React from 'react';
import {
  EditButton,
  TopToolbar,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppRefreshTokenActions = () => (
  <TopToolbar sx={{alignItems: 'center'}}>
    <OpenAudit entityTypeId='appRefreshToken' />
    <OpenHelp entityType='appRefreshTokens' />
    <EditButton />
  </TopToolbar>
);

export default DefaultAppRefreshTokenActions;
