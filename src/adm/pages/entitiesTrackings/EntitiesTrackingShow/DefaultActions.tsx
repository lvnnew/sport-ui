import React from 'react';
import {
  TopToolbar,
  EditButton,
  usePermissions,
} from 'react-admin';
// import OpenAudit from '../../../commonActions/OpenAudit';
import {hasPermission} from '../../../../utils/permissions';
// import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultEntitiesTrackingActions = () => {
  const {permissions} = usePermissions<string[]>();

  return (
    <TopToolbar sx={{alignItems: 'center'}}>
      {/* <OpenAudit entityTypeId='entitiesTracking' />
      <OpenHelp entityType='entitiesTrackings' /> */}
      {hasPermission(permissions, 'entitiesTrackings.update') && <EditButton />}
    </TopToolbar>
  );
};

export default DefaultEntitiesTrackingActions;
