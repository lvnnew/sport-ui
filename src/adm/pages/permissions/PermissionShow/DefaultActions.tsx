import React from 'react';
import {
  EditButton,
  TopToolbar,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPermissionActions = () => (
  <TopToolbar sx={{alignItems: 'center'}}>
    <OpenAudit entityTypeId='permission' />
    <OpenHelp entityType='permissions' />
    <EditButton />
  </TopToolbar>
);

export default DefaultPermissionActions;
