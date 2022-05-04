import React from 'react';
import {
  EditButton,
  TopToolbar,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAggregateTrackingActions = () => (
  <TopToolbar sx={{alignItems: 'center'}}>
    <OpenAudit entityTypeId='aggregateTracking' />
    <OpenHelp entityType='aggregateTrackings' />
    <EditButton />
  </TopToolbar>
);

export default DefaultAggregateTrackingActions;
