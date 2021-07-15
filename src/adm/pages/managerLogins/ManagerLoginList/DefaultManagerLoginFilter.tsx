import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerLoginFilter: FC<any> = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <TextInput fullWidth source="login" />
      <TextInput fullWidth source="passwordHash" />
      <TextInput fullWidth source="role" />
      <BooleanInput fullWidth source="emailVerified" />
      <BooleanInput fullWidth source="initialPasswordChanged" />
      <BooleanInput fullWidth source="locked" />
      <ReferenceInput source="managerId" reference="managers">
      <AutocompleteInput fullWidth optionText="title" />
    </ReferenceInput>
  </Filter>
);

export default DefaultManagerLoginFilter;
