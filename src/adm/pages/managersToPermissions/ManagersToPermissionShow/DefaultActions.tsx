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

const DefaultManagersToPermissionActions = () => {
  const {permissions} = usePermissions<string[]>();

  return (
    <TopToolbar sx={{alignItems: 'center'}}>
      <OpenAudit entityTypeId='managersToPermission' />
      <OpenHelp entityType='managersToPermissions' />
      {hasPermission(permissions, 'managersToPermissions.update') && <EditButton />}
    </TopToolbar>
  );
};

export default DefaultManagersToPermissionActions;
