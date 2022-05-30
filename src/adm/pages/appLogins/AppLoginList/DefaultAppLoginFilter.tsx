import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppLoginFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.appLogins.fields.search')}
        source='q'
        alwaysOn
      />
      <TextInput
        fullWidth
        source='login'
        label={translate('catalogs.appLogins.fields.login')}
      />
      <TextInput
        fullWidth
        source='passwordHash'
        label={translate('catalogs.appLogins.fields.passwordHash')}
      />
      <ReferenceInput
        source='userId'
        label={translate('catalogs.appLogins.fields.userId')}
        reference='users'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' defaultValue={null} parse={val => val || null} />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultAppLoginFilter;
