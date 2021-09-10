import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppLoginFilter: FC<any> = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <TextInput fullWidth source='login' />
      <TextInput fullWidth source='passwordHash' />
      <ReferenceInput source='userId' reference='users'>
  <SelectInput fullWidth optionText='id' />
</ReferenceInput>
  </Filter>
);

export default DefaultAppLoginFilter;
