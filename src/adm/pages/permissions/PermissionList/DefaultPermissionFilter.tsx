import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPermissionFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.permissions.fields.search')}
        source='q'
        alwaysOn
      />
      <TextInput
        fullWidth
        source='title'
        label={translate('catalogs.permissions.fields.title')}
      />
    </Filter>
  );
};

export default DefaultPermissionFilter;
