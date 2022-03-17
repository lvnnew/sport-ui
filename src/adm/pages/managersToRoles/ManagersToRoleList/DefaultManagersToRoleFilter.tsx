import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToRoleFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput source='managerId' reference='managers' sort={{id: 'id', order: 'DESC'}}>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
    <ReferenceInput source='roleId' reference='roles' sort={{id: 'id', order: 'DESC'}}>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
  </Filter>
);

export default DefaultManagersToRoleFilter;
