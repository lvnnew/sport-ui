import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  DateInput,
  BooleanInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultDelegationFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput source='fromId' reference='managers'>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
    <ReferenceInput source='toId' reference='managers'>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
    <DateInput fullWidth source='expiresAt' />
    <BooleanInput fullWidth source='active' />
  </Filter>
);

export default DefaultDelegationFilter;
