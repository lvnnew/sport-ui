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

const DefaultAutogenerationHistoryEntryFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='catalogs.autogenerationHistoryEntries.fields.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='date'
        defaultValue={null}
        label='catalogs.autogenerationHistoryEntries.fields.date'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='originalEntityType'
        defaultValue={null}
        label='catalogs.autogenerationHistoryEntries.fields.originalEntityType'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='originalEntityId'
        defaultValue={null}
        label='catalogs.autogenerationHistoryEntries.fields.originalEntityId'
      />
      <ReferenceInput
        source='autogenerationRuleId'
        reference='autogenerationRules'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.autogenerationHistoryEntries.fields.autogenerationRuleId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.autogenerationHistoryEntries.fields.autogenerationRuleId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <DateInput
        fullWidth
        sx={{m: 1}}
        source='version'
        defaultValue={null}
        label='catalogs.autogenerationHistoryEntries.fields.version'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='errorOccurred'
        defaultValue={null}
        label='catalogs.autogenerationHistoryEntries.fields.errorOccurred'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='error'
        defaultValue={null}
        label='catalogs.autogenerationHistoryEntries.fields.error'
      />
    </Filter>
  );
};

export default DefaultAutogenerationHistoryEntryFilter;
