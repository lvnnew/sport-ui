import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPlayerRoleFilter: FC<any> = (props) => {
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
        label='catalogs.playerRoles.fields.title'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='shortTitle'
        label='catalogs.playerRoles.fields.shortTitle'
      />
      <ReferenceInput
        source='playerAggregatedRoleId'
        reference='playerAggregatedRoles'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.playerRoles.fields.playerAggregatedRoleId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.playerRoles.fields.playerAggregatedRoleId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultPlayerRoleFilter;
