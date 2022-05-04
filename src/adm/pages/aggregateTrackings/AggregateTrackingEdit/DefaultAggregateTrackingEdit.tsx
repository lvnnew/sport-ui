/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  AutocompleteInput,
  TextInput,
  NumberInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getAggregateTrackingValidation from '../getAggregateTrackingValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAggregateTrackingEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getAggregateTrackingValidation(translate)), [translate]);

  return (
    <Edit
      {...props}
      transform={useCallback((data) => ({
        ...data,
        lastAggregatesComputed: data.lastAggregatesComputed || null,
        lastEntityUpdate: data.lastEntityUpdate || null,
      }), [])}
    >
      <SimpleForm
        defaultValues={{}}
        resolver={resolver}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='entityTypeId'
              label={translate('infoRegistries.aggregateTrackings.fields.entityTypeId')}
              reference='entities'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' disableClearable defaultValue={null} />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='entityId'
              label={translate('infoRegistries.aggregateTrackings.fields.entityId')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <DateTimeInput
              fullWidth
              source='lastAggregatesComputed'
              label={translate('infoRegistries.aggregateTrackings.fields.lastAggregatesComputed')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <DateTimeInput
              fullWidth
              source='lastEntityUpdate'
              label={translate('infoRegistries.aggregateTrackings.fields.lastEntityUpdate')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <NumberInput
              fullWidth
              source='aggregateVersion'
              label={translate('infoRegistries.aggregateTrackings.fields.aggregateVersion')}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultAggregateTrackingEdit;
