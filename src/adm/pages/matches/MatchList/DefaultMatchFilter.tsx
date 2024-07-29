import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  NumberInput,
  BooleanInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMatchFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <ReferenceInput
        source='createdByManagerId'
        reference='managers'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.matches.fields.createdByManagerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.matches.fields.createdByManagerId'
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
        label='catalogs.matches.fields.lastChangedByManagerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.matches.fields.lastChangedByManagerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        label='catalogs.matches.fields.title'
      />
      <ReferenceInput
        source='competitionId'
        reference='competitions'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.matches.fields.competitionId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.matches.fields.competitionId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='firstTeamId'
        reference='teamForCompetitions'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.matches.fields.firstTeamId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.matches.fields.firstTeamId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='firstTeamColor'
        defaultValue={null}
        label='catalogs.matches.fields.firstTeamColor'
      />
      <ReferenceInput
        source='firstTeamOnFieldId'
        reference='teamForCompetitions'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.matches.fields.firstTeamOnFieldId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.matches.fields.firstTeamOnFieldId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='secondTeamId'
        reference='teamForCompetitions'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.matches.fields.secondTeamId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.matches.fields.secondTeamId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='secondTeamColor'
        defaultValue={null}
        label='catalogs.matches.fields.secondTeamColor'
      />
      <DateInput
        fullWidth
        sx={{m: 1}}
        source='matchDate'
        label='catalogs.matches.fields.matchDate'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='matchTime'
        label='catalogs.matches.fields.matchTime'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='duration'
        label='catalogs.matches.fields.duration'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='place'
        defaultValue={null}
        label='catalogs.matches.fields.place'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='active'
        defaultValue={null}
        label='catalogs.matches.fields.active'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='firstTeamPoints'
        defaultValue={null}
        label='catalogs.matches.fields.firstTeamPoints'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='secondTeamPoints'
        defaultValue={null}
        label='catalogs.matches.fields.secondTeamPoints'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='redCardFirstTeam'
        defaultValue={null}
        label='catalogs.matches.fields.redCardFirstTeam'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='redCardSecondTeam'
        defaultValue={null}
        label='catalogs.matches.fields.redCardSecondTeam'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='yellowCardFirstTeam'
        defaultValue={null}
        label='catalogs.matches.fields.yellowCardFirstTeam'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='yellowCardSecondTeam'
        defaultValue={null}
        label='catalogs.matches.fields.yellowCardSecondTeam'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='firstTeamHandleTime'
        defaultValue={null}
        label='catalogs.matches.fields.firstTeamHandleTime'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='secondTeamHandleTime'
        defaultValue={null}
        label='catalogs.matches.fields.secondTeamHandleTime'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='linkToProtocol'
        defaultValue={null}
        label='catalogs.matches.fields.linkToProtocol'
      />
      <ReferenceInput
        source='matchStatusId'
        reference='matchStatuses'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.matches.fields.matchStatusId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.matches.fields.matchStatusId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultMatchFilter;
