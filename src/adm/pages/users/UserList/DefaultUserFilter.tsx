import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUserFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput fullWidth source='title' />
    <TextInput fullWidth source='lastname' />
    <TextInput fullWidth source='firstname' />
    <TextInput fullWidth source='email' />
    <ReferenceInput
      source='tenantId'
      reference='tenants'
      sort={{id: 'id', order: 'DESC'}}
    >
      <AutocompleteInput fullWidth optionText='title' resettable />
    </ReferenceInput>
  </Filter>
);

export default DefaultUserFilter;
