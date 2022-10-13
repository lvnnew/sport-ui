import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
  useTranslate,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationHistoryEntryFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.autogenerationHistoryEntries.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='date'
        label={translate('catalogs.autogenerationHistoryEntries.fields.date')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='originalEntityType'
        label={translate('catalogs.autogenerationHistoryEntries.fields.originalEntityType')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='originalEntityId'
        label={translate('catalogs.autogenerationHistoryEntries.fields.originalEntityId')}
      />
      <ReferenceInput
        source='autogenerationRuleId'
        reference='autogenerationRules'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('catalogs.autogenerationHistoryEntries.fields.autogenerationRuleId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.autogenerationHistoryEntries.fields.autogenerationRuleId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
      <DateInput
        fullWidth
        sx={{m: 1}}
        source='version'
        label={translate('catalogs.autogenerationHistoryEntries.fields.version')}
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='errorOccurred'
        label={translate('catalogs.autogenerationHistoryEntries.fields.errorOccurred')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='error'
        defaultValue={null}
        label={translate('catalogs.autogenerationHistoryEntries.fields.error')}
      />
    </Filter>
  );
};

export default DefaultAutogenerationHistoryEntryFilter;
