import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerFilter: FC<any> = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <TextInput fullWidth source="title" />
      <TextInput fullWidth source="lastName" />
      <TextInput fullWidth source="firstName" />
      <ReferenceInput source="languageId" reference="languages">
      <AutocompleteInput fullWidth optionText="title" />
    </ReferenceInput>
      <TextInput fullWidth source="email" />
  </Filter>
);

export default DefaultManagerFilter;
