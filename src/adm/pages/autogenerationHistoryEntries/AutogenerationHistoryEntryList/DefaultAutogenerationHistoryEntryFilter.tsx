import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationHistoryEntryFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <DateTimeInput fullWidth source='date' />
    <TextInput fullWidth source='originalEntityType' />
    <TextInput fullWidth source='originalEntityId' />
    <ReferenceInput source='autogenerationRuleId' reference='autogenerationRules' sort={{id: 'id', order: 'DESC'}}>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
    <DateInput fullWidth source='version' />
    <BooleanInput fullWidth source='errorOccurred' />
    <TextInput fullWidth source='error' />
  </Filter>
);

export default DefaultAutogenerationHistoryEntryFilter;
