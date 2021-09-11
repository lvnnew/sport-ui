import React, {FC} from 'react';
import {
  Filter,
  TextInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUserFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput fullWidth source='lastname' />
    <TextInput fullWidth source='firstname' />
    <TextInput fullWidth source='email' />
  </Filter>
);

export default DefaultUserFilter;
