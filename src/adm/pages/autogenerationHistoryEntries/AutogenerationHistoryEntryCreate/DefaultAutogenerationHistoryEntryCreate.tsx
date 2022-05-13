/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';
import DateInput from '../../../../uiLib/DateInput';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getAutogenerationHistoryEntryValidation from '../getAutogenerationHistoryEntryValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationHistoryEntryCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getAutogenerationHistoryEntryValidation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
        date: data.date || null,
        version: data.version || null,
      }), [])}
    >
      <SimpleForm
        defaultValues={{
          errorOccurred: false,
        }}
        resolver={resolver}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <DateTimeInput
              fullWidth
              source='date'
              label={translate('catalogs.autogenerationHistoryEntries.fields.date')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='originalEntityType'
              label={translate('catalogs.autogenerationHistoryEntries.fields.originalEntityType')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='originalEntityId'
              label={translate('catalogs.autogenerationHistoryEntries.fields.originalEntityId')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='autogenerationRuleId'
              label={translate('catalogs.autogenerationHistoryEntries.fields.autogenerationRuleId')}
              reference='autogenerationRules'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' disableClearable defaultValue={null} />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <DateInput
              fullWidth
              source='version'
              label={translate('catalogs.autogenerationHistoryEntries.fields.version')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput
              fullWidth
              source='errorOccurred'
              label={translate('catalogs.autogenerationHistoryEntries.fields.errorOccurred')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='error'
              label={translate('catalogs.autogenerationHistoryEntries.fields.error')}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultAutogenerationHistoryEntryCreate;
