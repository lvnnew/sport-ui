import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRoleFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.roles.fields.search')}
        source='q'
        alwaysOn
      />
      <TextInput
        fullWidth
        source='title'
        label={translate('catalogs.roles.fields.title')}
      />
      <BooleanInput
        fullWidth
        source='hasAllPermissions'
        label={translate('catalogs.roles.fields.hasAllPermissions')}
      />
      <BooleanInput
        fullWidth
        source='allTenantsAvailable'
        label={translate('catalogs.roles.fields.allTenantsAvailable')}
      />
    </Filter>
  );
};

export default DefaultRoleFilter;
