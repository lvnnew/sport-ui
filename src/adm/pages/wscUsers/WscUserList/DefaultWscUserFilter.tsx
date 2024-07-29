import React, {FC} from 'react';
import {
  Filter,
  TextInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultWscUserFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='login'
        label='catalogs.wscUsers.fields.login'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='passwordHash'
        label='catalogs.wscUsers.fields.passwordHash'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='accessToken'
        defaultValue={null}
        label='catalogs.wscUsers.fields.accessToken'
      />
    </Filter>
  );
};

export default DefaultWscUserFilter;
