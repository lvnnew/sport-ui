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
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        defaultValue={null}
        label={translate('catalogs.roles.fields.title')}
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='hasAllPermissions'
        required
        label={translate('catalogs.roles.fields.hasAllPermissions')}
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='allTenantsAvailable'
        required
        label={translate('catalogs.roles.fields.allTenantsAvailable')}
      />
    </Filter>
  );
};

export default DefaultRoleFilter;
