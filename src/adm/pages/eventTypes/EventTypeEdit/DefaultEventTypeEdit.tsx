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
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
  DeleteButton,
  usePermissions,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getEventTypeValidation from '../getEventTypeValidation';
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
      {hasPermission(permissions, 'eventTypes.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

const defaultValues = {
  showInTranslationMode: false,
  needForSecondPlayer: false,
  dependsOnPoint: false,
  redCard: false,
  yellowCard: false,
  calculateBlock: false,
  calculateTakeaway: false,
  calculateSelection: false,
  calculateInterseption: false,
  calculateGuardian: false,
  calculatePositionError: false,
  calculateGrossError: false,
  calculatePositiveDribling: false,
  calculateNegativeDribling: false,
  calculatePositiveSgm: false,
  calculateNegativeSgm: false,
  calculatePositiveRgm: false,
  calculateNegativeRgm: false,
  calculateLosses: false,
  calculateGegenPressing: false,
  calculatePressing: false,
  calculateSaveBall: false,
  calculatePositiveTransfer: false,
  calculateNegativeTransfer: false,
  calculateHit: false,
  calculateHitTarget: false,
  calculateCorner: false,
  calculateFoul: false,
  calculateOffside: false,
};

const DefaultEventTypeEdit: FC<EditProps> = (props: EditProps) => {
  const resolver = useMemo(() => yupResolver(getEventTypeValidation()), []);

  return (
    <Edit
      redirect='show'
      {...props}
      transform={useCallback((data: any, previousData?: { previousData: any }) => {
        const mergedData = {...defaultValues, ...previousData?.previousData, ...data};
        return mergedData;
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
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='title'
                isRequired
                label='catalogs.eventTypes.fields.title'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <NumberInput
                fullWidth
                sx={{m: 1}}
                source='points'
                isRequired
                label='catalogs.eventTypes.fields.points'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='eventTypeCategoryId'
                reference='eventTypeCategories'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.eventTypes.fields.eventTypeCategoryId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.eventTypes.fields.eventTypeCategoryId'
                  defaultValue={null}
                  parse={val => val || null}
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <NumberInput
                fullWidth
                sx={{m: 1}}
                source='order'
                defaultValue={null}
                label='catalogs.eventTypes.fields.order'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='showInTranslationMode'
                defaultValue={null}
                label='catalogs.eventTypes.fields.showInTranslationMode'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='needForSecondPlayer'
                defaultValue={null}
                label='catalogs.eventTypes.fields.needForSecondPlayer'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='dependsOnPoint'
                defaultValue={null}
                label='catalogs.eventTypes.fields.dependsOnPoint'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='redCard'
                defaultValue={null}
                label='catalogs.eventTypes.fields.redCard'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='yellowCard'
                defaultValue={null}
                label='catalogs.eventTypes.fields.yellowCard'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateBlock'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateBlock'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateTakeaway'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateTakeaway'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateSelection'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateSelection'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateInterseption'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateInterseption'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateGuardian'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateGuardian'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculatePositionError'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculatePositionError'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateGrossError'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateGrossError'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculatePositiveDribling'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculatePositiveDribling'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateNegativeDribling'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateNegativeDribling'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculatePositiveSgm'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculatePositiveSgm'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateNegativeSgm'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateNegativeSgm'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculatePositiveRgm'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculatePositiveRgm'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateNegativeRgm'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateNegativeRgm'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateLosses'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateLosses'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateGegenPressing'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateGegenPressing'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculatePressing'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculatePressing'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateSaveBall'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateSaveBall'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculatePositiveTransfer'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculatePositiveTransfer'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateNegativeTransfer'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateNegativeTransfer'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateHit'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateHit'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateHitTarget'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateHitTarget'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateCorner'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateCorner'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateFoul'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateFoul'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='calculateOffside'
                defaultValue={null}
                label='catalogs.eventTypes.fields.calculateOffside'
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Edit>
  );
};

export default DefaultEventTypeEdit;
