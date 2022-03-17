import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAuditLogFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <DateTimeInput fullWidth source='date' />
    <TextInput fullWidth source='title' />
    <ReferenceInput source='entityTypeId' reference='entities' sort={{id: 'id', order: 'DESC'}}>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
    <TextInput fullWidth source='entityId' />
    <ReferenceInput source='actionTypeId' reference='auditLogActionTypes' sort={{id: 'id', order: 'DESC'}}>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
    <ReferenceInput source='managerId' reference='managers' sort={{id: 'id', order: 'DESC'}}>
      <AutocompleteInput fullWidth optionText='title' resettable />
    </ReferenceInput>
    <ReferenceInput source='userId' reference='users' sort={{id: 'id', order: 'DESC'}}>
      <AutocompleteInput fullWidth optionText='title' resettable />
    </ReferenceInput>
    <BooleanInput fullWidth source='foreign' />
    <TextInput fullWidth source='foreignEntityType' />
    <TextInput fullWidth source='foreignEntityId' />
    <TextInput fullWidth source='actionData' />
  </Filter>
);

export default DefaultAuditLogFilter;
