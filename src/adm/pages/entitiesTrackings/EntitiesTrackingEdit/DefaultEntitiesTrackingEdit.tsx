/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  Edit,
  SimpleForm,
  EditProps,
  ToolbarProps,
  Toolbar,
  SaveButton,
  ReferenceInput,
  AutocompleteInput,
  TextInput,
  DeleteButton,
  usePermissions,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getEntitiesTrackingValidation from '../getEntitiesTrackingValidation';
import {hasPermission} from '../../../../utils/permissions';
import {LoadingContext} from '../../../../contexts/LoadingContext';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultToolbar = (props: ToolbarProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <Toolbar
      {...props}
      sx={{display: 'flex', justifyContent: 'space-between'}}
    >
      <SaveButton />
      {hasPermission(permissions, 'entitiesTrackings.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

const defaultValues = {};

const DefaultEntitiesTrackingEdit: FC<EditProps> = (props: EditProps) => {
  const resolver = useMemo(() => yupResolver(getEntitiesTrackingValidation()), []);

  return (
    <Edit
      redirect='show'
      {...props}
      transform={useCallback((data: any, previousData?: { previousData: any }) => {
        const mergedData = {...defaultValues, ...previousData?.previousData, ...data};
        return {
          ...mergedData,
          lastEntityComputed: mergedData.lastEntityComputed || null,
          lastEntityScheduled: mergedData.lastEntityScheduled || null,
          lastEntityUpdate: mergedData.lastEntityUpdate || null,
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
              <ReferenceInput
                source='entityTypeId'
                reference='entities'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.entitiesTrackings.fields.entityTypeId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.entitiesTrackings.fields.entityTypeId'
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
                label='catalogs.entitiesTrackings.fields.entityId'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateTimeInput
                fullWidth
                sx={{m: 1}}
                source='lastEntityComputed'
                isRequired
                label='catalogs.entitiesTrackings.fields.lastEntityComputed'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateTimeInput
                fullWidth
                sx={{m: 1}}
                source='lastEntityScheduled'
                defaultValue={null}
                label='catalogs.entitiesTrackings.fields.lastEntityScheduled'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateTimeInput
                fullWidth
                sx={{m: 1}}
                source='lastEntityUpdate'
                isRequired
                label='catalogs.entitiesTrackings.fields.lastEntityUpdate'
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Edit>
  );
};

export default DefaultEntitiesTrackingEdit;
