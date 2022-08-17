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
        sort={{id: 'id', order: 'DESC'}}
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
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='entityId'
        label={translate('infoRegistries.aggregateTrackings.fields.entityId')}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='lastAggregatesComputed'
        label={translate('infoRegistries.aggregateTrackings.fields.lastAggregatesComputed')}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='lastEntityUpdate'
        label={translate('infoRegistries.aggregateTrackings.fields.lastEntityUpdate')}
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='aggregateVersion'
        label={translate('infoRegistries.aggregateTrackings.fields.aggregateVersion')}
      />
    </Filter>
  );
};

export default DefaultAggregateTrackingFilter;
