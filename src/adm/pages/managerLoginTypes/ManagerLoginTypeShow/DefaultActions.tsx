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

const DefaultManagerLoginTypeActions = () => {
  const {permissions} = usePermissions<string[]>();

  return (
    <TopToolbar sx={{alignItems: 'center'}}>
      {/* <OpenAudit entityTypeId='managerLoginType' />
      <OpenHelp entityType='managerLoginTypes' /> */}
      {hasPermission(permissions, 'managerLoginTypes.update') && <EditButton />}
    </TopToolbar>
  );
};

export default DefaultManagerLoginTypeActions;
