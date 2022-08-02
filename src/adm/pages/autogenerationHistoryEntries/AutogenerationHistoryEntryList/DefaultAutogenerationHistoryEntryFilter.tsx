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
        source='date'
        label={translate('catalogs.autogenerationHistoryEntries.fields.date')}
      />
      <TextInput
        fullWidth
        source='originalEntityType'
        label={translate('catalogs.autogenerationHistoryEntries.fields.originalEntityType')}
      />
      <TextInput
        fullWidth
        source='originalEntityId'
        label={translate('catalogs.autogenerationHistoryEntries.fields.originalEntityId')}
      />
      <ReferenceInput
        source='autogenerationRuleId'
        reference='autogenerationRules'
        sort={{id: 'id', order: 'DESC'}}
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
        source='version'
        label={translate('catalogs.autogenerationHistoryEntries.fields.version')}
      />
      <BooleanInput
        fullWidth
        source='errorOccurred'
        label={translate('catalogs.autogenerationHistoryEntries.fields.errorOccurred')}
      />
      <TextInput
        fullWidth
        source='error'
        defaultValue={null}
        label={translate('catalogs.autogenerationHistoryEntries.fields.error')}
      />
    </Filter>
  );
};

export default DefaultAutogenerationHistoryEntryFilter;
