import React, {FC} from 'react';
import {
  Filter,
  TextInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTypeFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput fullWidth source='title' />
    <TextInput fullWidth source='description' />
  </Filter>
);

export default DefaultMessageTypeFilter;
