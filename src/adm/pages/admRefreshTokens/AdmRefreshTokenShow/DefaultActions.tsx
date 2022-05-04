import React from 'react';
import {
  EditButton,
  TopToolbar,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAdmRefreshTokenActions = () => (
  <TopToolbar sx={{alignItems: 'center'}}>
    <OpenAudit entityTypeId='admRefreshToken' />
    <OpenHelp entityType='admRefreshTokens' />
    <EditButton />
  </TopToolbar>
);

export default DefaultAdmRefreshTokenActions;
