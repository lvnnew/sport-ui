import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppRefreshTokenFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.appRefreshTokens.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='create'
        label={translate('catalogs.appRefreshTokens.fields.create')}
      />
      <ReferenceInput
        source='userId'
        reference='users'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.appRefreshTokens.fields.userId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.appRefreshTokens.fields.userId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='token'
        label={translate('catalogs.appRefreshTokens.fields.token')}
      />
    </Filter>
  );
};

export default DefaultAppRefreshTokenFilter;
