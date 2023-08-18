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

const DefaultConfigurationVariableActions = () => {
  const {permissions} = usePermissions<string[]>();

  return (
    <TopToolbar sx={{alignItems: 'center'}}>
      {/* <OpenAudit entityTypeId='configurationVariable' />
      <OpenHelp entityType='configurationVariables' /> */}
      {hasPermission(permissions, 'configurationVariables.update') && <EditButton />}
    </TopToolbar>
  );
};

export default DefaultConfigurationVariableActions;
