import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTeamFilter: FC<any> = (props) => {
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
        label='catalogs.teams.fields.title'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='dateOfBirthFrom'
        label='catalogs.teams.fields.dateOfBirthFrom'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='dateOfBirthTo'
        defaultValue={null}
        label='catalogs.teams.fields.dateOfBirthTo'
      />
      <ReferenceInput
        source='createdByManagerId'
        reference='managers'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.teams.fields.createdByManagerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.teams.fields.createdByManagerId'
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
        label='catalogs.teams.fields.lastChangedByManagerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.teams.fields.lastChangedByManagerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='clubId'
        reference='clubs'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.teams.fields.clubId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.teams.fields.clubId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='fileId'
        reference='files'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.teams.fields.fileId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.teams.fields.fileId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultTeamFilter;
