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

const DefaultAutogenerationHistoryEntryFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <DateInput fullWidth source='date' />
    <TextInput fullWidth source='originalEntityType' />
    <TextInput fullWidth source='originalEntityId' />
    <ReferenceInput source='autogenerationRuleId' reference='autogenerationRules'>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
    <DateInput fullWidth source='version' />
    <BooleanInput fullWidth source='errorOccurred' />
    <TextInput fullWidth source='error' />
  </Filter>
);

export default DefaultAutogenerationHistoryEntryFilter;
