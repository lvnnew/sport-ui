import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  NumberInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPlayerMatchRatingFilter: FC<any> = (props) => {
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
        label='catalogs.playerMatchRatings.fields.matchId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.playerMatchRatings.fields.matchId'
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
        label='catalogs.playerMatchRatings.fields.playerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.playerMatchRatings.fields.playerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='rating'
        label='catalogs.playerMatchRatings.fields.rating'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='progressivePassAccuracy'
        defaultValue={null}
        label='catalogs.playerMatchRatings.fields.progressivePassAccuracy'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='playerRatingAverage'
        defaultValue={null}
        label='catalogs.playerMatchRatings.fields.playerRatingAverage'
      />
    </Filter>
  );
};

export default DefaultPlayerMatchRatingFilter;
