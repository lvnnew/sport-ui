import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultGlossaryFilter: FC<any> = (props) => {
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
        label='catalogs.glossaries.fields.title'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='description'
        label='catalogs.glossaries.fields.description'
      />
      <ReferenceInput
        source='periodTypeId'
        reference='periodTypes'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.glossaries.fields.periodTypeId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.glossaries.fields.periodTypeId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultGlossaryFilter;
