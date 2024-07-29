import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPlayerForCompetitionTeamFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <ReferenceInput
        source='teamForCompetitionId'
        reference='teamForCompetitions'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.playerForCompetitionTeams.fields.teamForCompetitionId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.playerForCompetitionTeams.fields.teamForCompetitionId'
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
        label='catalogs.playerForCompetitionTeams.fields.playerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.playerForCompetitionTeams.fields.playerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultPlayerForCompetitionTeamFilter;
