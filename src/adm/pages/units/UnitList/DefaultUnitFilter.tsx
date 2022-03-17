import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUnitFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput fullWidth source='title' />
    <ReferenceInput source='parentId' reference='units' sort={{id: 'id', order: 'DESC'}}>
      <AutocompleteInput fullWidth optionText='title' resettable />
    </ReferenceInput>
  </Filter>
);

export default DefaultUnitFilter;
