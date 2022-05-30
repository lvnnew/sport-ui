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

const DefaultAggregateTrackingActions = () => {
  const {permissions} = usePermissions<string[]>();

  return (
    <TopToolbar sx={{alignItems: 'center'}}>
      <OpenAudit entityTypeId='aggregateTracking' />
      <OpenHelp entityType='aggregateTrackings' />
      {hasPermission(permissions, 'aggregateTrackings.update') && <EditButton />}
    </TopToolbar>
  );
};

export default DefaultAggregateTrackingActions;
