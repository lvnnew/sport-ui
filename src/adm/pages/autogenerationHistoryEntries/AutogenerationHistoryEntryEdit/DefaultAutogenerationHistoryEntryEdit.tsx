/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  ToolbarProps,
  Toolbar,
  SaveButton,
  DeleteButton,
  usePermissions,
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
import {hasPermission} from '../../../../utils/permissions';
import {LoadingContext} from '../../../../contexts/LoadingContext';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultToolbar = (props: ToolbarProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <Toolbar
      {...props}
      sx={{display: 'flex', justifyContent: 'space-between'}}
    >
      <SaveButton />
      {hasPermission(permissions, 'autogenerationHistoryEntries.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

const DefaultAutogenerationHistoryEntryEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getAutogenerationHistoryEntryValidation(translate)), [translate]);

  return (
    <Edit
      redirect='show'
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
        date: data.date || null,
        version: data.version || null,
      }), [])}
      mutationMode='pessimistic'
    >
      <LoadingContext>
        <SimpleForm
          defaultValues={{
            errorOccurred: false,
          }}
          resolver={resolver}
          toolbar={<DefaultToolbar />}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateTimeInput
                fullWidth
                sx={{m: 1}}
                source='date'
                required
                label='catalogs.autogenerationHistoryEntries.fields.date'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='originalEntityType'
                required
                label='catalogs.autogenerationHistoryEntries.fields.originalEntityType'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='originalEntityId'
                required
                label='catalogs.autogenerationHistoryEntries.fields.originalEntityId'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='autogenerationRuleId'
                reference='autogenerationRules'
                sort={{field: 'id', order: 'DESC'}}
                label='catalogs.autogenerationHistoryEntries.fields.autogenerationRuleId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.autogenerationHistoryEntries.fields.autogenerationRuleId'
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateInput
                fullWidth
                sx={{m: 1}}
                source='version'
                required
                label='catalogs.autogenerationHistoryEntries.fields.version'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='errorOccurred'
                required
                label='catalogs.autogenerationHistoryEntries.fields.errorOccurred'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='error'
                defaultValue={null}
                label='catalogs.autogenerationHistoryEntries.fields.error'
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Edit>
  );
};

export default DefaultAutogenerationHistoryEntryEdit;
