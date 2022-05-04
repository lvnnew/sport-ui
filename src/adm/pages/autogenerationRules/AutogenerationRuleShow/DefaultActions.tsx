import React from 'react';
import {
  EditButton,
  TopToolbar,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationRuleActions = () => (
  <TopToolbar sx={{alignItems: 'center'}}>
    <OpenAudit entityTypeId='autogenerationRule' />
    <OpenHelp entityType='autogenerationRules' />
    <EditButton />
  </TopToolbar>
);

export default DefaultAutogenerationRuleActions;
