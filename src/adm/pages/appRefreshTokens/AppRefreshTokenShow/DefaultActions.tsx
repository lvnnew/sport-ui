import React from 'react';
import {
  EditButton,
  TopToolbar,
  usePermissions,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import {hasPermission} from '../../../../utils/permissions';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppRefreshTokenActions = () => {
  const {permissions} = usePermissions<string[]>();

  return (
    <TopToolbar sx={{alignItems: 'center'}}>
      <OpenAudit entityTypeId='appRefreshToken' />
      <OpenHelp entityType='appRefreshTokens' />
      {hasPermission(permissions, 'appRefreshTokens.update') && <EditButton />}
    </TopToolbar>
  );
};

export default DefaultAppRefreshTokenActions;
