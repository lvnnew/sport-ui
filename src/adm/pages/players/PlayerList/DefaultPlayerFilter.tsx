import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPlayerFilter: FC<any> = (props) => {
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
        source='firstname'
        label='catalogs.players.fields.firstname'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='lastname'
        label='catalogs.players.fields.lastname'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='patronymic'
        defaultValue={null}
        label='catalogs.players.fields.patronymic'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        label='catalogs.players.fields.title'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='playerName'
        defaultValue={null}
        label='catalogs.players.fields.playerName'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='number'
        label='catalogs.players.fields.number'
      />
      <DateInput
        fullWidth
        sx={{m: 1}}
        source='dateOfBirth'
        label='catalogs.players.fields.dateOfBirth'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='age'
        defaultValue={null}
        label='catalogs.players.fields.age'
      />
      <ReferenceInput
        source='teamId'
        reference='teams'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.players.fields.teamId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.players.fields.teamId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='createdByManagerId'
        reference='managers'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.players.fields.createdByManagerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.players.fields.createdByManagerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='lastChangedByManagerId'
        reference='managers'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.players.fields.lastChangedByManagerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.players.fields.lastChangedByManagerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='parentId'
        reference='parents'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.players.fields.parentId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.players.fields.parentId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='linkToProfile'
        defaultValue={null}
        label='catalogs.players.fields.linkToProfile'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='playerRating'
        defaultValue={null}
        label='catalogs.players.fields.playerRating'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='playerRatingAverage'
        defaultValue={null}
        label='catalogs.players.fields.playerRatingAverage'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='commonPlayerRatingGoalkeeper'
        defaultValue={null}
        label='catalogs.players.fields.commonPlayerRatingGoalkeeper'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='commonPlayerRatingAttack'
        defaultValue={null}
        label='catalogs.players.fields.commonPlayerRatingAttack'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='commonPlayerRatingMidfielder'
        defaultValue={null}
        label='catalogs.players.fields.commonPlayerRatingMidfielder'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='commonPlayerRatingDefender'
        defaultValue={null}
        label='catalogs.players.fields.commonPlayerRatingDefender'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='playedMatches'
        defaultValue={null}
        label='catalogs.players.fields.playedMatches'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='averagePlayerRatingGoalkeeper'
        defaultValue={null}
        label='catalogs.players.fields.averagePlayerRatingGoalkeeper'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='averagePlayerRatingAttack'
        defaultValue={null}
        label='catalogs.players.fields.averagePlayerRatingAttack'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='averagePlayerRatingMidfielder'
        defaultValue={null}
        label='catalogs.players.fields.averagePlayerRatingMidfielder'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='averagePlayerRatingDefender'
        defaultValue={null}
        label='catalogs.players.fields.averagePlayerRatingDefender'
      />
      <ReferenceInput
        source='playerAggregatedRoleId'
        reference='playerAggregatedRoles'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.players.fields.playerAggregatedRoleId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.players.fields.playerAggregatedRoleId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='playerTag'
        defaultValue={null}
        label='catalogs.players.fields.playerTag'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='progressivePassAccuracy'
        defaultValue={null}
        label='catalogs.players.fields.progressivePassAccuracy'
      />
      <ReferenceInput
        source='playerRankId'
        reference='playerRanks'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.players.fields.playerRankId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.players.fields.playerRankId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultPlayerFilter;
