import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  NumberInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPlayerCompetitionRatingFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <ReferenceInput
        source='competitionId'
        reference='competitions'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.playerCompetitionRatings.fields.competitionId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.playerCompetitionRatings.fields.competitionId'
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
        label='catalogs.playerCompetitionRatings.fields.playerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.playerCompetitionRatings.fields.playerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='rating'
        label='catalogs.playerCompetitionRatings.fields.rating'
      />
    </Filter>
  );
};

export default DefaultPlayerCompetitionRatingFilter;
