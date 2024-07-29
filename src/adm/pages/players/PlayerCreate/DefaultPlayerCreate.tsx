/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';
import {useDebug} from '../../../../contexts/DebugContext';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getPlayerValidation from '../getPlayerValidation';
import {LoadingContext} from '../../../../contexts/LoadingContext';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const defaultValues = {};

const DefaultPlayerCreate: FC<CreateProps> = (props: CreateProps) => {
  const {debug} = useDebug();
  const resolver = useMemo(() => yupResolver(getPlayerValidation()), []);

  return (
    <Create
      redirect='show'
      {...props}
      transform={useCallback((data: any) => {
        const mergedData = {...defaultValues, ...data};
        return {
          ...mergedData,
          dateOfBirth: mergedData.dateOfBirth || null,
        };
      }, [])}
      actions={<Breadcrumbs />}
    >
      <LoadingContext>
        <SimpleForm
          defaultValues={defaultValues}
          resolver={resolver}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='firstname'
                isRequired
                label='catalogs.players.fields.firstname'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='lastname'
                isRequired
                label='catalogs.players.fields.lastname'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='patronymic'
                defaultValue={null}
                label='catalogs.players.fields.patronymic'
              />
            </Grid>
            {debug && <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='title'
                label='catalogs.players.fields.title'
              />
            </Grid>}
            {debug && <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='playerName'
                defaultValue={null}
                label='catalogs.players.fields.playerName'
              />
            </Grid>}
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <NumberInput
                fullWidth
                sx={{m: 1}}
                source='number'
                isRequired
                label='catalogs.players.fields.number'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateInput
                fullWidth
                sx={{m: 1}}
                source='dateOfBirth'
                isRequired
                label='catalogs.players.fields.dateOfBirth'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='teamId'
                reference='teams'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.players.fields.teamId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.players.fields.teamId'
                  defaultValue={null}
                  parse={val => val || null}
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            {debug && <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='createdByManagerId'
                reference='managers'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.players.fields.createdByManagerId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.players.fields.createdByManagerId'
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>}
            {debug && <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='lastChangedByManagerId'
                reference='managers'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.players.fields.lastChangedByManagerId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.players.fields.lastChangedByManagerId'
                  defaultValue={null}
                  parse={val => val || null}
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>}
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='parentId'
                reference='parents'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.players.fields.parentId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.players.fields.parentId'
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
                source='linkToProfile'
                defaultValue={null}
                label='catalogs.players.fields.linkToProfile'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <NumberInput
                fullWidth
                sx={{m: 1}}
                source='playerRating'
                defaultValue={null}
                label='catalogs.players.fields.playerRating'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='photoId'
                reference='files'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.players.fields.photoId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.players.fields.photoId'
                  defaultValue={null}
                  parse={val => val || null}
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Create>
  );
};

export default DefaultPlayerCreate;
