/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  Edit,
  SimpleForm,
  EditProps,
  ToolbarProps,
  Toolbar,
  SaveButton,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getAuditLogValidation from '../getAuditLogValidation';
import {LoadingContext} from '../../../../contexts/LoadingContext';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultToolbar = (props: ToolbarProps) => {
  return (
    <Toolbar
      {...props}
      sx={{display: 'flex', justifyContent: 'space-between'}}
    >
      <SaveButton />
    </Toolbar>
  );
};

const defaultValues = {
  success: false,
  foreign: false,
};

const DefaultAuditLogEdit: FC<EditProps> = (props: EditProps) => {
  const resolver = useMemo(() => yupResolver(getAuditLogValidation()), []);

  return (
    <Edit
      redirect='show'
      {...props}
      transform={useCallback((data: any, previousData?: { previousData: any }) => {
        const mergedData = {...defaultValues, ...previousData?.previousData, ...data};
        return {
          ...mergedData,
          date: mergedData.date || null,
        };
      }, [])}
      mutationMode='pessimistic'
      actions={<Breadcrumbs />}
    >
      <LoadingContext>
        <SimpleForm
          defaultValues={defaultValues}
          resolver={resolver}
          toolbar={<DefaultToolbar />}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateTimeInput
                fullWidth
                sx={{m: 1}}
                source='date'
                isRequired
                label='catalogs.auditLogs.fields.date'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='title'
                isRequired
                label='catalogs.auditLogs.fields.title'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='success'
                defaultValue={null}
                label='catalogs.auditLogs.fields.success'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='error'
                defaultValue={null}
                label='catalogs.auditLogs.fields.error'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='entityTypeId'
                reference='entities'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.auditLogs.fields.entityTypeId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.auditLogs.fields.entityTypeId'
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='entityId'
                isRequired
                label='catalogs.auditLogs.fields.entityId'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='actionTypeId'
                reference='auditLogActionTypes'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.auditLogs.fields.actionTypeId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.auditLogs.fields.actionTypeId'
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='managerId'
                reference='managers'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.auditLogs.fields.managerId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.auditLogs.fields.managerId'
                  defaultValue={null}
                  parse={val => val || null}
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='managerLogin'
                defaultValue={null}
                label='catalogs.auditLogs.fields.managerLogin'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='userId'
                reference='users'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.auditLogs.fields.userId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.auditLogs.fields.userId'
                  defaultValue={null}
                  parse={val => val || null}
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='foreign'
                defaultValue={null}
                label='catalogs.auditLogs.fields.foreign'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='foreignEntityType'
                defaultValue={null}
                label='catalogs.auditLogs.fields.foreignEntityType'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='foreignEntityId'
                defaultValue={null}
                label='catalogs.auditLogs.fields.foreignEntityId'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='actionData'
                defaultValue={null}
                label='catalogs.auditLogs.fields.actionData'
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Edit>
  );
};

export default DefaultAuditLogEdit;
