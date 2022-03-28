import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRolesToPermissionFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput label='Search' source='q' alwaysOn />
      <ReferenceInput
        source='roleId'
        label={translate('catalogs.rolesToPermissions.fields.roleId')}
        reference='roles'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' />
      </ReferenceInput>
      <ReferenceInput
        source='permissionId'
        label={translate('catalogs.rolesToPermissions.fields.permissionId')}
        reference='permissions'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultRolesToPermissionFilter;
