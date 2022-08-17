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
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='login'
        label={translate('catalogs.managerLogins.fields.login')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='passwordHash'
        label={translate('catalogs.managerLogins.fields.passwordHash')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='role'
        label={translate('catalogs.managerLogins.fields.role')}
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='emailVerified'
        label={translate('catalogs.managerLogins.fields.emailVerified')}
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='initialPasswordChanged'
        label={translate('catalogs.managerLogins.fields.initialPasswordChanged')}
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='locked'
        label={translate('catalogs.managerLogins.fields.locked')}
      />
      <ReferenceInput
        source='managerId'
        reference='managers'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.managerLogins.fields.managerId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.managerLogins.fields.managerId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultManagerLoginFilter;
