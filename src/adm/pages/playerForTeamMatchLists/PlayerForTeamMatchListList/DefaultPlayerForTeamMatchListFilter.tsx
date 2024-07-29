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

const DefaultPlayerForTeamMatchListFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <ReferenceInput
        source='teamMatchListId'
        reference='teamMatchLists'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.playerForTeamMatchLists.fields.teamMatchListId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.playerForTeamMatchLists.fields.teamMatchListId'
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
        label='catalogs.playerForTeamMatchLists.fields.playerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.playerForTeamMatchLists.fields.playerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='startingPosition'
        defaultValue={null}
        label='catalogs.playerForTeamMatchLists.fields.startingPosition'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='onField'
        defaultValue={null}
        label='catalogs.playerForTeamMatchLists.fields.onField'
      />
      <ReferenceInput
        source='playerRoleId'
        reference='playerRoles'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.playerForTeamMatchLists.fields.playerRoleId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.playerForTeamMatchLists.fields.playerRoleId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='playerOnMatchNumber'
        defaultValue={null}
        label='catalogs.playerForTeamMatchLists.fields.playerOnMatchNumber'
      />
    </Filter>
  );
};

export default DefaultPlayerForTeamMatchListFilter;
