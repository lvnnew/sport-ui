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
    <ReferenceInput
      source='managerId'
      reference='managers'
      sort={{id: 'id', order: 'DESC'}}
    >
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
    <ReferenceInput
      source='permissionId'
      reference='permissions'
      sort={{id: 'id', order: 'DESC'}}
    >
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
  </Filter>
);

export default DefaultManagersToPermissionFilter;
