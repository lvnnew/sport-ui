import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppRefreshTokenFilter: FC<any> = (props) => {
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
        label='catalogs.appRefreshTokens.fields.create'
      />
      <ReferenceInput
        source='userId'
        reference='users'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.appRefreshTokens.fields.userId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.appRefreshTokens.fields.userId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='token'
        label='catalogs.appRefreshTokens.fields.token'
      />
    </Filter>
  );
};

export default DefaultAppRefreshTokenFilter;
