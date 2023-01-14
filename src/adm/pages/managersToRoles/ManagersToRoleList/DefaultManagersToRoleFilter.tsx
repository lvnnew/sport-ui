import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToRoleFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='catalogs.managersToRoles.fields.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <ReferenceInput
        source='managerId'
        reference='managers'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.managersToRoles.fields.managerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.managersToRoles.fields.managerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='roleId'
        reference='roles'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.managersToRoles.fields.roleId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.managersToRoles.fields.roleId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <DateInput
        fullWidth
        sx={{m: 1}}
        source='expiresAt'
        defaultValue={null}
        label='catalogs.managersToRoles.fields.expiresAt'
      />
    </Filter>
  );
};

export default DefaultManagersToRoleFilter;
