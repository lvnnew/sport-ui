import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
  useTranslate,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultDelegationFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.delegations.fields.search')}
        source='q'
        alwaysOn
      />
      <ReferenceInput
        source='fromId'
        label={translate('catalogs.delegations.fields.fromId')}
        reference='managers'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' disableClearable defaultValue={null} />
      </ReferenceInput>
      <ReferenceInput
        source='toId'
        label={translate('catalogs.delegations.fields.toId')}
        reference='managers'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' disableClearable defaultValue={null} />
      </ReferenceInput>
      <DateInput
        fullWidth
        source='expiresAt'
        defaultValue={null}
        label={translate('catalogs.delegations.fields.expiresAt')}
      />
      <BooleanInput
        fullWidth
        source='active'
        label={translate('catalogs.delegations.fields.active')}
      />
    </Filter>
  );
};

export default DefaultDelegationFilter;
