import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUserFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.users.fields.search')}
        source='q'
        alwaysOn
      />
      <TextInput
        fullWidth
        source='title'
        defaultValue={null}
        label={translate('catalogs.users.fields.title')}
      />
      <TextInput
        fullWidth
        source='lastname'
        label={translate('catalogs.users.fields.lastname')}
      />
      <TextInput
        fullWidth
        source='firstname'
        label={translate('catalogs.users.fields.firstname')}
      />
      <TextInput
        fullWidth
        source='email'
        label={translate('catalogs.users.fields.email')}
      />
      <ReferenceInput
        source='tenantId'
        label={translate('catalogs.users.fields.tenantId')}
        reference='tenants'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' defaultValue={null} parse={val => val || null} />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultUserFilter;
