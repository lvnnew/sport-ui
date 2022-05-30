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

const DefaultAdmRefreshTokenActions = () => {
  const {permissions} = usePermissions<string[]>();

  return (
    <TopToolbar sx={{alignItems: 'center'}}>
      <OpenAudit entityTypeId='admRefreshToken' />
      <OpenHelp entityType='admRefreshTokens' />
      {hasPermission(permissions, 'admRefreshTokens.update') && <EditButton />}
    </TopToolbar>
  );
};

export default DefaultAdmRefreshTokenActions;
