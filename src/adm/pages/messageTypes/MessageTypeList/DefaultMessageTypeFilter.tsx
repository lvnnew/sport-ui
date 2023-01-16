import React, {FC} from 'react';
import {
  Filter,
  TextInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTypeFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='catalogs.messageTypes.fields.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        label='catalogs.messageTypes.fields.title'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='description'
        defaultValue={null}
        label='catalogs.messageTypes.fields.description'
      />
    </Filter>
  );
};

export default DefaultMessageTypeFilter;
