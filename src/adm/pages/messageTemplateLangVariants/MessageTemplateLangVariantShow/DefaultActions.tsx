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

const DefaultMessageTemplateLangVariantActions = () => {
  const {permissions} = usePermissions<string[]>();

  return (
    <TopToolbar sx={{alignItems: 'center'}}>
      <OpenAudit entityTypeId='messageTemplateLangVariant' />
      <OpenHelp entityType='messageTemplateLangVariants' />
      {hasPermission(permissions, 'messageTemplateLangVariants.update') && <EditButton />}
    </TopToolbar>
  );
};

export default DefaultMessageTemplateLangVariantActions;
