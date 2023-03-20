import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAdmRefreshTokenFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='create'
        label='catalogs.admRefreshTokens.fields.create'
      />
      <ReferenceInput
        source='managerId'
        reference='managers'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.admRefreshTokens.fields.managerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.admRefreshTokens.fields.managerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
          optionText='title'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='token'
        label='catalogs.admRefreshTokens.fields.token'
      />
    </Filter>
  );
};

export default DefaultAdmRefreshTokenFilter;
