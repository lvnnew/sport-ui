import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPlayerRankFilter: FC<any> = (props) => {
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
        label='catalogs.playerRanks.fields.title'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='rating'
        label='catalogs.playerRanks.fields.rating'
      />
      <ReferenceInput
        source='fileId'
        reference='files'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.playerRanks.fields.fileId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.playerRanks.fields.fileId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultPlayerRankFilter;
