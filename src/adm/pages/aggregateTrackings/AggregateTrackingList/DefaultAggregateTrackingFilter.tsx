import React, {FC} from 'react';
import {
  Filter,
  ReferenceInput,
  AutocompleteInput,
  TextInput,
  NumberInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAggregateTrackingFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <ReferenceInput
        source='entityTypeId'
        reference='entities'
        sort={{field: 'id', order: 'DESC'}}
        label='infoRegistries.aggregateTrackings.fields.entityTypeId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='infoRegistries.aggregateTrackings.fields.entityTypeId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='entityId'
        defaultValue={null}
        label='infoRegistries.aggregateTrackings.fields.entityId'
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='lastAggregatesComputed'
        defaultValue={null}
        label='infoRegistries.aggregateTrackings.fields.lastAggregatesComputed'
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='lastAggregatesScheduled'
        defaultValue={null}
        label='infoRegistries.aggregateTrackings.fields.lastAggregatesScheduled'
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='lastEntityUpdate'
        defaultValue={null}
        label='infoRegistries.aggregateTrackings.fields.lastEntityUpdate'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='aggregateVersion'
        defaultValue={null}
        label='infoRegistries.aggregateTrackings.fields.aggregateVersion'
      />
    </Filter>
  );
};

export default DefaultAggregateTrackingFilter;
