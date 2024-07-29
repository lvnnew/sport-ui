import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultCompetitionFilter: FC<any> = (props) => {
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
        label='catalogs.competitions.fields.title'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='dateOfBirthFrom'
        defaultValue={null}
        label='catalogs.competitions.fields.dateOfBirthFrom'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='dateOfBirthTo'
        defaultValue={null}
        label='catalogs.competitions.fields.dateOfBirthTo'
      />
      <ReferenceInput
        source='organizationId'
        reference='organizators'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.competitions.fields.organizationId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.competitions.fields.organizationId'
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
        label='catalogs.competitions.fields.createdByManagerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.competitions.fields.createdByManagerId'
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
        label='catalogs.competitions.fields.lastChangedByManagerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.competitions.fields.lastChangedByManagerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultCompetitionFilter;
