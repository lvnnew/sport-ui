import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppLoginFilter: FC<any> = (props) => {
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
        label='catalogs.appLogins.fields.login'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='passwordHash'
        label='catalogs.appLogins.fields.passwordHash'
      />
      <ReferenceInput
        source='userId'
        reference='users'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.appLogins.fields.userId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.appLogins.fields.userId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
          optionText='title'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultAppLoginFilter;
