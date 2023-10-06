import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
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
      <ReferenceInput
        source='managerLoginTypeId'
        reference='managerLoginTypes'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.managerLogins.fields.managerLoginTypeId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.managerLogins.fields.managerLoginTypeId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
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
        defaultValue={null}
        label='catalogs.managerLogins.fields.passwordHash'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='emailVerified'
        defaultValue={null}
        label='catalogs.managerLogins.fields.emailVerified'
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
        perPage={100}
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
