import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultWscMessageFilter: FC<any> = (props) => {
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
        source='externalId'
        label='catalogs.wscMessages.fields.externalId'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='dateTimeRaw'
        label='catalogs.wscMessages.fields.dateTimeRaw'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='sender'
        label='catalogs.wscMessages.fields.sender'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='content'
        label='catalogs.wscMessages.fields.content'
      />
      <ReferenceInput
        source='wscUserId'
        reference='wscUsers'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.wscMessages.fields.wscUserId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.wscMessages.fields.wscUserId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='wscContactId'
        reference='wscContacts'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.wscMessages.fields.wscContactId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.wscMessages.fields.wscContactId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultWscMessageFilter;
