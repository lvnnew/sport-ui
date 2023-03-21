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

const DefaultMessageTemplateActions = () => {
  const {permissions} = usePermissions<string[]>();

  return (
    <TopToolbar sx={{alignItems: 'center'}}>
      <OpenAudit entityTypeId='messageTemplate' />
      <OpenHelp entityType='messageTemplates' />
      {hasPermission(permissions, 'messageTemplates.update') && <EditButton />}
    </TopToolbar>
  );
};

export default DefaultMessageTemplateActions;
