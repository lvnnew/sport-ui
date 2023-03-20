import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUserFilter: FC<any> = (props) => {
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
        source='title'
        defaultValue={null}
        label='catalogs.users.fields.title'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='lastname'
        label='catalogs.users.fields.lastname'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='firstname'
        label='catalogs.users.fields.firstname'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='email'
        label='catalogs.users.fields.email'
      />
      <ReferenceInput
        source='tenantId'
        reference='tenants'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.users.fields.tenantId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.users.fields.tenantId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultUserFilter;
