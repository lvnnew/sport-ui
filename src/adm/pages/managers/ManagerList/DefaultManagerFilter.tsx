import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput fullWidth source='title' />
    <TextInput fullWidth source='lastName' />
    <TextInput fullWidth source='firstName' />
    <ReferenceInput source='languageId' reference='languages'>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
    <TextInput fullWidth source='email' />
    <TextInput fullWidth source='telegramLogin' />
    <ReferenceInput source='unitId' reference='units'>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
    <BooleanInput fullWidth source='headOfUnit' />
    <BooleanInput fullWidth source='active' />
  </Filter>
);

export default DefaultManagerFilter;
