import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToPermissionFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput source='managerId' reference='managers'>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
    <ReferenceInput source='permissionId' reference='permissions'>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
  </Filter>
);

export default DefaultManagersToPermissionFilter;
