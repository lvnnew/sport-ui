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
      <TextInput label='Search' source='q' alwaysOn />
      <DateTimeInput fullWidth source='create' label={translate('catalogs.appRefreshTokens.fields.create')} />
      <ReferenceInput
        source='userId'
        label={translate('catalogs.appRefreshTokens.fields.userId')}
        reference='users'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' />
      </ReferenceInput>
      <TextInput fullWidth source='token' label={translate('catalogs.appRefreshTokens.fields.token')} />
    </Filter>
  );
};

export default DefaultAppRefreshTokenFilter;
