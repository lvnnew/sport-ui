import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultEntitiesTrackingFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <ReferenceInput
        source='entityTypeId'
        reference='entities'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.entitiesTrackings.fields.entityTypeId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.entitiesTrackings.fields.entityTypeId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='entityId'
        label='catalogs.entitiesTrackings.fields.entityId'
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='lastEntityComputed'
        label='catalogs.entitiesTrackings.fields.lastEntityComputed'
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='lastEntityScheduled'
        defaultValue={null}
        label='catalogs.entitiesTrackings.fields.lastEntityScheduled'
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='lastEntityUpdate'
        label='catalogs.entitiesTrackings.fields.lastEntityUpdate'
      />
    </Filter>
  );
};

export default DefaultEntitiesTrackingFilter;
