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
        label={translate('infoRegistries.aggregateTrackings.fields.entityTypeId')}
        reference='entities'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' defaultValue={null} />
      </ReferenceInput>
      <TextInput
        fullWidth
        source='entityId'
        label={translate('infoRegistries.aggregateTrackings.fields.entityId')}
      />
      <DateTimeInput
        fullWidth
        source='lastAggregatesComputed'
        label={translate('infoRegistries.aggregateTrackings.fields.lastAggregatesComputed')}
      />
      <DateTimeInput
        fullWidth
        source='lastEntityUpdate'
        label={translate('infoRegistries.aggregateTrackings.fields.lastEntityUpdate')}
      />
      <NumberInput
        fullWidth
        source='aggregateVersion'
        label={translate('infoRegistries.aggregateTrackings.fields.aggregateVersion')}
      />
    </Filter>
  );
};

export default DefaultAggregateTrackingFilter;
