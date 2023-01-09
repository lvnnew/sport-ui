import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToRoleFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.managersToRoles.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <ReferenceInput
        source='managerId'
        reference='managers'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('catalogs.managersToRoles.fields.managerId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.managersToRoles.fields.managerId')}
          defaultValue={null}
          parse={val => val || null}
          isRequired
        />
      </ReferenceInput>
      <ReferenceInput
        source='roleId'
        reference='roles'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('catalogs.managersToRoles.fields.roleId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.managersToRoles.fields.roleId')}
          defaultValue={null}
          parse={val => val || null}
          isRequired
        />
      </ReferenceInput>
      <DateInput
        fullWidth
        sx={{m: 1}}
        source='expiresAt'
        defaultValue={null}
        label={translate('catalogs.managersToRoles.fields.expiresAt')}
      />
    </Filter>
  );
};

export default DefaultManagersToRoleFilter;
