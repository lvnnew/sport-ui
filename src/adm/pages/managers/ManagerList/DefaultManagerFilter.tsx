import React, {FC} from 'react';
import {
  Filter,
  TextInput
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerFilter: FC<any> = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <TextInput fullWidth source="title" />
      <TextInput fullWidth source="lastName" />
      <TextInput fullWidth source="firstName" />
      <TextInput fullWidth source="email" />
  </Filter>
);

export default DefaultManagerFilter;
