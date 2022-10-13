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
import {LoadingContext} from '../../../../contexts/LoadingContext';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationHistoryEntryCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getAutogenerationHistoryEntryValidation(translate)), [translate]);

  return (
    <Create
      redirect='show'
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
        date: data.date || null,
        version: data.version || null,
      }), [])}
    >
      <LoadingContext>
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
                sx={{m: 1}}
                source='date'
                label={translate('catalogs.autogenerationHistoryEntries.fields.date')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='originalEntityType'
                label={translate('catalogs.autogenerationHistoryEntries.fields.originalEntityType')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='originalEntityId'
                label={translate('catalogs.autogenerationHistoryEntries.fields.originalEntityId')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='autogenerationRuleId'
                reference='autogenerationRules'
                sort={{field: 'id', order: 'DESC'}}
                label={translate('catalogs.autogenerationHistoryEntries.fields.autogenerationRuleId')}
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label={translate('catalogs.autogenerationHistoryEntries.fields.autogenerationRuleId')}
                  optionText='title'
                  defaultValue={null}
                  parse={val => val || null}
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateInput
                fullWidth
                sx={{m: 1}}
                source='version'
                label={translate('catalogs.autogenerationHistoryEntries.fields.version')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='errorOccurred'
                label={translate('catalogs.autogenerationHistoryEntries.fields.errorOccurred')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='error'
                defaultValue={null}
                label={translate('catalogs.autogenerationHistoryEntries.fields.error')}
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Create>
  );
};

export default DefaultAutogenerationHistoryEntryCreate;
