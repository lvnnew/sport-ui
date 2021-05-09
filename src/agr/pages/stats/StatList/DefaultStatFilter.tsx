import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  DateTimeInput,
  NumberInput
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultStatFilter: FC<any> = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <DateTimeInput fullWidth source="updated" />
      <NumberInput fullWidth source="helloCount" />
  </Filter>
);

export default DefaultStatFilter;
