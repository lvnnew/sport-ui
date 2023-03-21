import React from 'react';
import {
  TopToolbar,
  EditButton,
  usePermissions,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import {hasPermission} from '../../../../utils/permissions';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMailingCampaignActions = () => {
  const {permissions} = usePermissions<string[]>();

  return (
    <TopToolbar sx={{alignItems: 'center'}}>
      <OpenAudit entityTypeId='mailingCampaign' />
      <OpenHelp entityType='mailingCampaigns' />
      {hasPermission(permissions, 'mailingCampaigns.update') && <EditButton />}
    </TopToolbar>
  );
};

export default DefaultMailingCampaignActions;
