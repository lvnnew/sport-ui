import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultParentFilter: FC<any> = (props) => {
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
        label='catalogs.parents.fields.title'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='firstname'
        label='catalogs.parents.fields.firstname'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='lastname'
        label='catalogs.parents.fields.lastname'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='patronymic'
        defaultValue={null}
        label='catalogs.parents.fields.patronymic'
      />
      <ReferenceInput
        source='createdByManagerId'
        reference='managers'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.parents.fields.createdByManagerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.parents.fields.createdByManagerId'
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
        label='catalogs.parents.fields.lastChangedByManagerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.parents.fields.lastChangedByManagerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultParentFilter;
