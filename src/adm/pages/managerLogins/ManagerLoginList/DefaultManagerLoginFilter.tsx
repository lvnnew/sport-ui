import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerLoginFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.managerLogins.fields.search')}
        source='q'
        alwaysOn
      />
      <TextInput
        fullWidth
        source='login'
        label={translate('catalogs.managerLogins.fields.login')}
      />
      <TextInput
        fullWidth
        source='passwordHash'
        label={translate('catalogs.managerLogins.fields.passwordHash')}
      />
      <TextInput
        fullWidth
        source='role'
        label={translate('catalogs.managerLogins.fields.role')}
      />
      <BooleanInput
        fullWidth
        source='emailVerified'
        label={translate('catalogs.managerLogins.fields.emailVerified')}
      />
      <BooleanInput
        fullWidth
        source='initialPasswordChanged'
        label={translate('catalogs.managerLogins.fields.initialPasswordChanged')}
      />
      <BooleanInput
        fullWidth
        source='locked'
        label={translate('catalogs.managerLogins.fields.locked')}
      />
      <ReferenceInput
        source='managerId'
        label={translate('catalogs.managerLogins.fields.managerId')}
        reference='managers'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' defaultValue={null} />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultManagerLoginFilter;
