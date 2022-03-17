import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppLoginFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput fullWidth source='login' />
    <TextInput fullWidth source='passwordHash' />
    <ReferenceInput
      source='userId'
      reference='users'
      sort={{id: 'id', order: 'DESC'}}
    >
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
  </Filter>
);

export default DefaultAppLoginFilter;
