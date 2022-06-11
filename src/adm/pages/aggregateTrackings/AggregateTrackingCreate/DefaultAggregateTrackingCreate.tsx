/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
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

const DefaultAggregateTrackingCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getAggregateTrackingValidation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data: any) => ({
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
              reference='entities'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput
                fullWidth
                label={translate('infoRegistries.aggregateTrackings.fields.entityTypeId')}
                optionText='title'
                defaultValue={null}
                parse={val => val || null}
              />
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
    </Create>
  );
};

export default DefaultAggregateTrackingCreate;
