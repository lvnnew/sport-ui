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
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        defaultValue={null}
        label={translate('catalogs.users.fields.title')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='lastname'
        label={translate('catalogs.users.fields.lastname')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='firstname'
        label={translate('catalogs.users.fields.firstname')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='email'
        label={translate('catalogs.users.fields.email')}
      />
      <ReferenceInput
        source='tenantId'
        reference='tenants'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.users.fields.tenantId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.users.fields.tenantId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultUserFilter;
