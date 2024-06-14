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
  NumberInput,
  DeleteButton,
  usePermissions,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getAggregateTrackingValidation from '../getAggregateTrackingValidation';
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
      {hasPermission(permissions, 'aggregateTrackings.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

const defaultValues = {};

const DefaultAggregateTrackingEdit: FC<EditProps> = (props: EditProps) => {
  const resolver = useMemo(() => yupResolver(getAggregateTrackingValidation()), []);

  return (
    <Edit
      redirect='show'
      {...props}
      transform={useCallback((data: any, previousData?: { previousData: any }) => {
        const mergedData = {...defaultValues, ...previousData?.previousData, ...data};
        return {
          ...mergedData,
          lastAggregatesComputed: mergedData.lastAggregatesComputed || null,
          lastAggregatesScheduled: mergedData.lastAggregatesScheduled || null,
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
                label='infoRegistries.aggregateTrackings.fields.entityTypeId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='infoRegistries.aggregateTrackings.fields.entityTypeId'
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
                label='infoRegistries.aggregateTrackings.fields.entityId'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateTimeInput
                fullWidth
                sx={{m: 1}}
                source='lastAggregatesComputed'
                isRequired
                label='infoRegistries.aggregateTrackings.fields.lastAggregatesComputed'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateTimeInput
                fullWidth
                sx={{m: 1}}
                source='lastAggregatesScheduled'
                defaultValue={null}
                label='infoRegistries.aggregateTrackings.fields.lastAggregatesScheduled'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateTimeInput
                fullWidth
                sx={{m: 1}}
                source='lastEntityUpdate'
                isRequired
                label='infoRegistries.aggregateTrackings.fields.lastEntityUpdate'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <NumberInput
                fullWidth
                sx={{m: 1}}
                source='aggregateVersion'
                isRequired
                label='infoRegistries.aggregateTrackings.fields.aggregateVersion'
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Edit>
  );
};

export default DefaultAggregateTrackingEdit;
