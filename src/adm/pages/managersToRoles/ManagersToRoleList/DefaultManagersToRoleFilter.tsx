import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToRoleFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.managersToRoles.fields.search')}
        source='q'
        alwaysOn
      />
      <ReferenceInput
        source='managerId'
        label={translate('catalogs.managersToRoles.fields.managerId')}
        reference='managers'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' disableClearable />
      </ReferenceInput>
      <ReferenceInput
        source='roleId'
        label={translate('catalogs.managersToRoles.fields.roleId')}
        reference='roles'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' disableClearable />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultManagersToRoleFilter;
