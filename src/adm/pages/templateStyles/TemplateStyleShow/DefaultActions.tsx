import React from 'react';
import {
  TopToolbar,
  EditButton,
  usePermissions,
} from 'react-admin';
import OpenAudit from '../../../commonActions/OpenAudit';
import {hasPermission} from '../../../../utils/permissions';
import OpenHelp from '../../../commonActions/OpenHelp';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTemplateStyleActions = () => {
  const {permissions} = usePermissions<string[]>();

  return (
    <TopToolbar sx={{alignItems: 'center'}}>
      <OpenAudit entityTypeId='templateStyle' />
      <OpenHelp entityType='templateStyles' />
      {hasPermission(permissions, 'templateStyles.update') && <EditButton />}
    </TopToolbar>
  );
};

export default DefaultTemplateStyleActions;
