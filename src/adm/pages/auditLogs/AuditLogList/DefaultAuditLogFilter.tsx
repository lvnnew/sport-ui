import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAuditLogFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <DateInput fullWidth source='date' />
    <TextInput fullWidth source='title' />
    <TextInput fullWidth source='entityType' />
    <TextInput fullWidth source='entityId' />
    <TextInput fullWidth source='action' />
    <ReferenceInput source='managerId' reference='managers'>
      <AutocompleteInput fullWidth optionText='title' resettable />
    </ReferenceInput>
    <ReferenceInput source='userId' reference='users'>
      <AutocompleteInput fullWidth optionText='title' resettable />
    </ReferenceInput>
    <BooleanInput fullWidth source='foreign' />
    <TextInput fullWidth source='foreignEntityType' />
    <TextInput fullWidth source='foreignEntityId' />
    <TextInput fullWidth source='actionData' />
  </Filter>
);

export default DefaultAuditLogFilter;
