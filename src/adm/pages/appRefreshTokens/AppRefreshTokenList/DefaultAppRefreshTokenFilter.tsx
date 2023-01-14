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
        label='catalogs.appRefreshTokens.fields.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='create'
        defaultValue={null}
        label='catalogs.appRefreshTokens.fields.create'
      />
      <ReferenceInput
        source='userId'
        reference='users'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.appRefreshTokens.fields.userId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
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
        defaultValue={null}
        label='catalogs.appRefreshTokens.fields.token'
      />
    </Filter>
  );
};

export default DefaultAppRefreshTokenFilter;
