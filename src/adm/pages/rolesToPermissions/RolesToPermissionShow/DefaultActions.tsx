import React from 'react';
import {
  EditButton,
  TopToolbar,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRolesToPermissionActions = () => (
  <TopToolbar sx={{alignItems: 'center'}}>
    <OpenAudit entityTypeId='rolesToPermission' />
    <OpenHelp entityType='rolesToPermissions' />
    <EditButton />
  </TopToolbar>
);

export default DefaultRolesToPermissionActions;
