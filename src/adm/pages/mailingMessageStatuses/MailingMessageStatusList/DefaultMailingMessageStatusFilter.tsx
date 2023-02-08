import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMailingMessageStatusFilter: FC<any> = (props) => {
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
        source='title'
        defaultValue={null}
        label='catalogs.mailingMessageStatuses.fields.title'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='final'
        label='catalogs.mailingMessageStatuses.fields.final'
      />
    </Filter>
  );
};

export default DefaultMailingMessageStatusFilter;
