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

const DefaultDelegationFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='catalogs.delegations.fields.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <ReferenceInput
        source='fromId'
        reference='managers'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.delegations.fields.fromId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.delegations.fields.fromId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='toId'
        reference='managers'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.delegations.fields.toId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.delegations.fields.toId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <DateInput
        fullWidth
        sx={{m: 1}}
        source='expiresAt'
        defaultValue={null}
        label='catalogs.delegations.fields.expiresAt'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='active'
        label='catalogs.delegations.fields.active'
      />
    </Filter>
  );
};

export default DefaultDelegationFilter;
