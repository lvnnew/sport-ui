import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRolesToPermissionFilter: FC<any> = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <TextInput fullWidth source='title' />
      <ReferenceInput source='{field.name}' reference='roles'>
  <AutocompleteInput fullWidth optionText='title' />
</ReferenceInput>
      <ReferenceInput source='{field.name}' reference='permissions'>
  <AutocompleteInput fullWidth optionText='title' />
</ReferenceInput>
  </Filter>
);

export default DefaultRolesToPermissionFilter;
