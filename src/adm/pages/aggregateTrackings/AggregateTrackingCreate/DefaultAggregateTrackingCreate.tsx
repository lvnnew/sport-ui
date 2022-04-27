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
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getAggregateTrackingValidation from '../getAggregateTrackingValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAggregateTrackingCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const validate = useMemo(() => makeValidate(getAggregateTrackingValidation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data) => ({
        ...data,
        lastAggregatesComputed: data.lastAggregatesComputed || null,
        lastEntityUpdate: data.lastEntityUpdate || null,
      }), [])}
    >
      <SimpleForm
        defaultValues={{}}
        validate={validate}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='entityTypeId'
              label={translate('infoRegistries.aggregateTrackings.fields.entityTypeId')}
              reference='entities'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' />
            </ReferenceInput>
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='entityId'
              label={translate('infoRegistries.aggregateTrackings.fields.entityId')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <DateTimeInput
              fullWidth
              source='lastAggregatesComputed'
              label={translate('infoRegistries.aggregateTrackings.fields.lastAggregatesComputed')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <DateTimeInput
              fullWidth
              source='lastEntityUpdate'
              label={translate('infoRegistries.aggregateTrackings.fields.lastEntityUpdate')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <NumberInput
              fullWidth
              source='aggregateVersion'
              label={translate('infoRegistries.aggregateTrackings.fields.aggregateVersion')}
            />
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultAggregateTrackingCreate;
