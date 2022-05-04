import React from 'react';
import {
  EditButton,
  TopToolbar,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAuditLogActionTypeActions = () => (
  <TopToolbar sx={{alignItems: 'center'}}>
    <OpenAudit entityTypeId='auditLogActionType' />
    <OpenHelp entityType='auditLogActionTypes' />
    <EditButton />
  </TopToolbar>
);

export default DefaultAuditLogActionTypeActions;
