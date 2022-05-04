import React from 'react';
import {
  EditButton,
  TopToolbar,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToPermissionActions = () => (
  <TopToolbar sx={{alignItems: 'center'}}>
    <OpenAudit entityTypeId='managersToPermission' />
    <OpenHelp entityType='managersToPermissions' />
    <EditButton />
  </TopToolbar>
);

export default DefaultManagersToPermissionActions;
