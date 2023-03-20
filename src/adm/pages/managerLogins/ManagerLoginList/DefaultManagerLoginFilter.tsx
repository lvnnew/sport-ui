import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerLoginFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='login'
        label='catalogs.managerLogins.fields.login'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='passwordHash'
        label='catalogs.managerLogins.fields.passwordHash'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='emailVerified'
        label='catalogs.managerLogins.fields.emailVerified'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='initialPasswordChanged'
        label='catalogs.managerLogins.fields.initialPasswordChanged'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='locked'
        label='catalogs.managerLogins.fields.locked'
      />
      <ReferenceInput
        source='managerId'
        reference='managers'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.managerLogins.fields.managerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.managerLogins.fields.managerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultManagerLoginFilter;
