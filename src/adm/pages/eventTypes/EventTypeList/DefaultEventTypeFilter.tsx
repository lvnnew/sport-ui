import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultEventTypeFilter: FC<any> = (props) => {
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
        label='catalogs.eventTypes.fields.title'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='points'
        label='catalogs.eventTypes.fields.points'
      />
      <ReferenceInput
        source='eventTypeCategoryId'
        reference='eventTypeCategories'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.eventTypes.fields.eventTypeCategoryId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.eventTypes.fields.eventTypeCategoryId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='order'
        defaultValue={null}
        label='catalogs.eventTypes.fields.order'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='showInTranslationMode'
        defaultValue={null}
        label='catalogs.eventTypes.fields.showInTranslationMode'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='needForSecondPlayer'
        defaultValue={null}
        label='catalogs.eventTypes.fields.needForSecondPlayer'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='dependsOnPoint'
        defaultValue={null}
        label='catalogs.eventTypes.fields.dependsOnPoint'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='redCard'
        defaultValue={null}
        label='catalogs.eventTypes.fields.redCard'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='yellowCard'
        defaultValue={null}
        label='catalogs.eventTypes.fields.yellowCard'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateBlock'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateBlock'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateTakeaway'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateTakeaway'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateSelection'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateSelection'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateInterseption'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateInterseption'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateGuardian'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateGuardian'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculatePositionError'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculatePositionError'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateGrossError'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateGrossError'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculatePositiveDribling'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculatePositiveDribling'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateNegativeDribling'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateNegativeDribling'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculatePositiveSgm'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculatePositiveSgm'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateNegativeSgm'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateNegativeSgm'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculatePositiveRgm'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculatePositiveRgm'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateNegativeRgm'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateNegativeRgm'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateLosses'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateLosses'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateGegenPressing'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateGegenPressing'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculatePressing'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculatePressing'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateSaveBall'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateSaveBall'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculatePositiveTransfer'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculatePositiveTransfer'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateNegativeTransfer'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateNegativeTransfer'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateHit'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateHit'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateHitTarget'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateHitTarget'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateCorner'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateCorner'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateFoul'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateFoul'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='calculateOffside'
        defaultValue={null}
        label='catalogs.eventTypes.fields.calculateOffside'
      />
    </Filter>
  );
};

export default DefaultEventTypeFilter;
