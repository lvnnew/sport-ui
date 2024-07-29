import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultWscContactFilter: FC<any> = (props) => {
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
        source='name'
        label='catalogs.wscContacts.fields.name'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='phoneNumber'
        label='catalogs.wscContacts.fields.phoneNumber'
      />
      <ReferenceInput
        source='wscUserId'
        reference='wscUsers'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.wscContacts.fields.wscUserId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.wscContacts.fields.wscUserId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultWscContactFilter;
