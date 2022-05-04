import React from 'react';
import {
  EditButton,
  TopToolbar,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationHistoryEntryActions = () => (
  <TopToolbar sx={{alignItems: 'center'}}>
    <OpenAudit entityTypeId='autogenerationHistoryEntry' />
    <OpenHelp entityType='autogenerationHistoryEntries' />
    <EditButton />
  </TopToolbar>
);

export default DefaultAutogenerationHistoryEntryActions;
