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

const DefaultMailingMessageStatusActions = () => {
  const {permissions} = usePermissions<string[]>();

  return (
    <TopToolbar sx={{alignItems: 'center'}}>
      <OpenAudit entityTypeId='mailingMessageStatus' />
      <OpenHelp entityType='mailingMessageStatuses' />
      {hasPermission(permissions, 'mailingMessageStatuses.update') && <EditButton />}
    </TopToolbar>
  );
};

export default DefaultMailingMessageStatusActions;
