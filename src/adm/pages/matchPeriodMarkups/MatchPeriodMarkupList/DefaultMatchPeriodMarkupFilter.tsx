import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMatchPeriodMarkupFilter: FC<any> = (props) => {
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
        source='timestamp'
        defaultValue={null}
        label='catalogs.matchPeriodMarkups.fields.timestamp'
      />
      <ReferenceInput
        source='periodTypeId'
        reference='periodTypes'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.matchPeriodMarkups.fields.periodTypeId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.matchPeriodMarkups.fields.periodTypeId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='matchVideoId'
        reference='matchVideos'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.matchPeriodMarkups.fields.matchVideoId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.matchPeriodMarkups.fields.matchVideoId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultMatchPeriodMarkupFilter;
