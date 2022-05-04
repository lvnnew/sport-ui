import React from 'react';
import {
  EditButton,
  TopToolbar,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToRoleActions = () => (
  <TopToolbar sx={{alignItems: 'center'}}>
    <OpenAudit entityTypeId='managersToRole' />
    <OpenHelp entityType='managersToRoles' />
    <EditButton />
  </TopToolbar>
);

export default DefaultManagersToRoleActions;
