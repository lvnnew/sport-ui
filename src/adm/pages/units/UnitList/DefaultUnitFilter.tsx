import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUnitFilter: FC<any> = (props) => {
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
        label='catalogs.units.fields.title'
      />
      <ReferenceInput
        source='parentId'
        reference='units'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.units.fields.parentId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.units.fields.parentId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultUnitFilter;
