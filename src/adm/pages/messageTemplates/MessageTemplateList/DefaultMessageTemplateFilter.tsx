import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput fullWidth source='title' />
    <BooleanInput fullWidth source='secretData' />
    <ReferenceInput source='messageTypeId' reference='messageTypes' sort={{id: 'id', order: 'DESC'}}>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
  </Filter>
);

export default DefaultMessageTemplateFilter;
