import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultEventFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='timeSecond'
        defaultValue={null}
        label='documents.events.fields.timeSecond'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='linkToTimeSecond'
        defaultValue={null}
        label='documents.events.fields.linkToTimeSecond'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='controversialPoint'
        defaultValue={null}
        label='documents.events.fields.controversialPoint'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='startControversialPoint'
        defaultValue={null}
        label='documents.events.fields.startControversialPoint'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='highlight'
        defaultValue={null}
        label='documents.events.fields.highlight'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='startHighlight'
        defaultValue={null}
        label='documents.events.fields.startHighlight'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='order'
        label='documents.events.fields.order'
      />
      <ReferenceInput
        source='eventTypeId'
        reference='eventTypes'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='documents.events.fields.eventTypeId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='documents.events.fields.eventTypeId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='videoId'
        reference='matchVideos'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='documents.events.fields.videoId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='documents.events.fields.videoId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='teamForCompetitionId'
        reference='teamForCompetitions'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='documents.events.fields.teamForCompetitionId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='documents.events.fields.teamForCompetitionId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='mainPlayerId'
        reference='players'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='documents.events.fields.mainPlayerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='documents.events.fields.mainPlayerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='secondPlayerId'
        reference='players'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='documents.events.fields.secondPlayerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='documents.events.fields.secondPlayerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='firstPlayerRoleId'
        reference='playerRoles'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='documents.events.fields.firstPlayerRoleId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='documents.events.fields.firstPlayerRoleId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='secondPlayerRoleId'
        reference='playerRoles'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='documents.events.fields.secondPlayerRoleId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='documents.events.fields.secondPlayerRoleId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='periodTypeId'
        reference='periodTypes'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='documents.events.fields.periodTypeId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='documents.events.fields.periodTypeId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='matchId'
        reference='matches'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='documents.events.fields.matchId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='documents.events.fields.matchId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='points'
        label='documents.events.fields.points'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='periodNumber'
        defaultValue={null}
        label='documents.events.fields.periodNumber'
      />
    </Filter>
  );
};

export default DefaultEventFilter;
