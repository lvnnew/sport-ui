import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRoleFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='catalogs.roles.fields.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        defaultValue={null}
        label='catalogs.roles.fields.title'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='hasAllPermissions'
        defaultValue={null}
        label='catalogs.roles.fields.hasAllPermissions'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='allTenantsAvailable'
        defaultValue={null}
        label='catalogs.roles.fields.allTenantsAvailable'
      />
    </Filter>
  );
};

export default DefaultRoleFilter;
