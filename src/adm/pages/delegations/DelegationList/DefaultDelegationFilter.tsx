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
        sx={{m: 1}}
      />
      <ReferenceInput
        source='fromId'
        reference='managers'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.delegations.fields.fromId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.delegations.fields.fromId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
      <ReferenceInput
        source='toId'
        reference='managers'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.delegations.fields.toId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.delegations.fields.toId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
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
