import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  NumberInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTenantFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.tenants.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        source='title'
        defaultValue={null}
        label={translate('catalogs.tenants.fields.title')}
      />
      <NumberInput
        fullWidth
        source='utcOffset'
        label={translate('catalogs.tenants.fields.utcOffset')}
      />
    </Filter>
  );
};

export default DefaultTenantFilter;
