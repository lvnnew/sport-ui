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
      <TextInput
        label={translate('catalogs.rolesToPermissions.fields.search')}
        source='q'
        alwaysOn
      />
      <ReferenceInput
        source='roleId'
        label={translate('catalogs.rolesToPermissions.fields.roleId')}
        reference='roles'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' defaultValue={null} parse={val => val || null} />
      </ReferenceInput>
      <ReferenceInput
        source='permissionId'
        label={translate('catalogs.rolesToPermissions.fields.permissionId')}
        reference='permissions'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' defaultValue={null} parse={val => val || null} />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultRolesToPermissionFilter;
