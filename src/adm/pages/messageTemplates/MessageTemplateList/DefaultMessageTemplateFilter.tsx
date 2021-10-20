import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput fullWidth source='title' />
    <BooleanInput fullWidth source='secretData' />
  </Filter>
);

export default DefaultMessageTemplateFilter;
