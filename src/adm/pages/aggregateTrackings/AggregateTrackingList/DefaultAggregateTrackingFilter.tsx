import React, {FC} from 'react';
import {
  Filter,
  ReferenceInput,
  AutocompleteInput,
  TextInput,
  NumberInput,
  useTranslate,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAggregateTrackingFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <ReferenceInput
        source='entityTypeId'
        reference='entities'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('infoRegistries.aggregateTrackings.fields.entityTypeId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('infoRegistries.aggregateTrackings.fields.entityTypeId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
          isRequired
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='entityId'
        required
        label={translate('infoRegistries.aggregateTrackings.fields.entityId')}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='lastAggregatesComputed'
        required
        label={translate('infoRegistries.aggregateTrackings.fields.lastAggregatesComputed')}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='lastAggregatesScheduled'
        defaultValue={null}
        label={translate('infoRegistries.aggregateTrackings.fields.lastAggregatesScheduled')}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='lastEntityUpdate'
        required
        label={translate('infoRegistries.aggregateTrackings.fields.lastEntityUpdate')}
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='aggregateVersion'
        required
        label={translate('infoRegistries.aggregateTrackings.fields.aggregateVersion')}
      />
    </Filter>
  );
};

export default DefaultAggregateTrackingFilter;
