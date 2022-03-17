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
    <ReferenceInput
      source='languageId'
      reference='languages'
      sort={{id: 'id', order: 'DESC'}}
    >
      <AutocompleteInput fullWidth optionText='title' resettable />
    </ReferenceInput>
    <TextInput fullWidth source='email' />
    <TextInput fullWidth source='telegramLogin' />
    <ReferenceInput
      source='unitId'
      reference='units'
      sort={{id: 'id', order: 'DESC'}}
    >
      <AutocompleteInput fullWidth optionText='title' resettable />
    </ReferenceInput>
    <BooleanInput fullWidth source='headOfUnit' />
    <BooleanInput fullWidth source='active' />
  </Filter>
);

export default DefaultManagerFilter;
