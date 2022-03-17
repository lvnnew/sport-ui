import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRolesToPermissionFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput
      source='roleId'
      reference='roles'
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

export default DefaultRolesToPermissionFilter;
