/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
} from 'react-admin';
import {useDebug} from '../../../../contexts/DebugContext';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getManagerValidation from '../getManagerValidation';
import {LoadingContext} from '../../../../contexts/LoadingContext';
import {FileInput} from '../../../../uiLib/file/FileInput';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const defaultValues = {
  headOfUnit: false,
  active: true,
};

const DefaultManagerCreate: FC<CreateProps> = (props: CreateProps) => {
  const {debug} = useDebug();
  const resolver = useMemo(() => yupResolver(getManagerValidation()), []);

  return (
    <Create
      redirect='show'
      {...props}
      transform={useCallback((data: any) => {
        const mergedData = {...defaultValues, ...data};
        return mergedData;
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
                source='title'
                defaultValue={null}
                label='catalogs.managers.fields.title'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='lastName'
                isRequired
                label='catalogs.managers.fields.lastName'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='firstName'
                isRequired
                label='catalogs.managers.fields.firstName'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='languageId'
                reference='languages'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.managers.fields.languageId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.managers.fields.languageId'
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
                source='email'
                isRequired
                label='catalogs.managers.fields.email'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='phone'
                defaultValue={null}
                label='catalogs.managers.fields.phone'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <FileInput source='photoId' type='image' />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='telegramLogin'
                defaultValue={null}
                label='catalogs.managers.fields.telegramLogin'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='unitId'
                reference='units'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.managers.fields.unitId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.managers.fields.unitId'
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
                source='headOfUnit'
                label='catalogs.managers.fields.headOfUnit'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='active'
                label='catalogs.managers.fields.active'
              />
            </Grid>
            {debug && <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='tenantId'
                reference='tenants'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.managers.fields.tenantId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.managers.fields.tenantId'
                  defaultValue={null}
                  parse={val => val || null}
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>}
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Create>
  );
};

export default DefaultManagerCreate;
