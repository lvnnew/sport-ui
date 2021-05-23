import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAdminLoginFilter: FC<any> = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <TextInput  fullWidth source="login" />
      <TextInput  fullWidth source="passwordHash" />
      <TextInput  fullWidth source="role" />
      <BooleanInput defaultValue={false} fullWidth source="emailVerified" />
      <BooleanInput defaultValue={false} fullWidth source="initialPasswordChanged" />
      <BooleanInput defaultValue={false} fullWidth source="locked" />
  </Filter>
);

export default DefaultAdminLoginFilter;
