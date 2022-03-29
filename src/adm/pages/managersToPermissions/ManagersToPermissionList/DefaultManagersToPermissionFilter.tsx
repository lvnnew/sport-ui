import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToPermissionFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.managersToPermissions.fields.search')}
        source='q'
        alwaysOn
      />
      <ReferenceInput
        source='managerId'
        label={translate('catalogs.managersToPermissions.fields.managerId')}
        reference='managers'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' />
      </ReferenceInput>
      <ReferenceInput
        source='permissionId'
        label={translate('catalogs.managersToPermissions.fields.permissionId')}
        reference='permissions'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultManagersToPermissionFilter;
