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
        required
        label={translate('catalogs.users.fields.lastname')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='firstname'
        required
        label={translate('catalogs.users.fields.firstname')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='email'
        required
        label={translate('catalogs.users.fields.email')}
      />
      <ReferenceInput
        source='tenantId'
        reference='tenants'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('catalogs.users.fields.tenantId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.users.fields.tenantId')}
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultUserFilter;
