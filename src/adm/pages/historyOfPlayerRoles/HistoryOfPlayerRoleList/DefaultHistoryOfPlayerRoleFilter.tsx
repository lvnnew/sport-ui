import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
  NumberInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultHistoryOfPlayerRoleFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <ReferenceInput
        source='matchId'
        reference='matches'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.historyOfPlayerRoles.fields.matchId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.historyOfPlayerRoles.fields.matchId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='playerId'
        reference='players'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.historyOfPlayerRoles.fields.playerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.historyOfPlayerRoles.fields.playerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='playerRoleId'
        reference='playerRoles'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.historyOfPlayerRoles.fields.playerRoleId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.historyOfPlayerRoles.fields.playerRoleId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='status'
        defaultValue={null}
        label='catalogs.historyOfPlayerRoles.fields.status'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='order'
        label='catalogs.historyOfPlayerRoles.fields.order'
      />
    </Filter>
  );
};

export default DefaultHistoryOfPlayerRoleFilter;
