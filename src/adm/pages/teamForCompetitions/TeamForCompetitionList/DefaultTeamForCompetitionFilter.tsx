import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTeamForCompetitionFilter: FC<any> = (props) => {
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
        label='catalogs.teamForCompetitions.fields.title'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='fullTitle'
        defaultValue={null}
        label='catalogs.teamForCompetitions.fields.fullTitle'
      />
      <ReferenceInput
        source='teamId'
        reference='teams'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.teamForCompetitions.fields.teamId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.teamForCompetitions.fields.teamId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='competitionId'
        reference='competitions'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.teamForCompetitions.fields.competitionId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.teamForCompetitions.fields.competitionId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultTeamForCompetitionFilter;
