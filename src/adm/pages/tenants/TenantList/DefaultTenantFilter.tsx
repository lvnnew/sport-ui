import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  NumberInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTenantFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='catalogs.tenants.fields.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        defaultValue={null}
        label='catalogs.tenants.fields.title'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='utcOffset'
        label='catalogs.tenants.fields.utcOffset'
      />
    </Filter>
  );
};

export default DefaultTenantFilter;
