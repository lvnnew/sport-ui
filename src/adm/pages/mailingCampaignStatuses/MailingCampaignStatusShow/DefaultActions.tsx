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

const DefaultMailingCampaignStatusActions = () => {
  const {permissions} = usePermissions<string[]>();

  return (
    <TopToolbar sx={{alignItems: 'center'}}>
      <OpenAudit entityTypeId='mailingCampaignStatus' />
      <OpenHelp entityType='mailingCampaignStatuses' />
      {hasPermission(permissions, 'mailingCampaignStatuses.update') && <EditButton />}
    </TopToolbar>
  );
};

export default DefaultMailingCampaignStatusActions;
