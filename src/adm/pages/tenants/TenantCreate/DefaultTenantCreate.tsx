/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getTenantValidation from '../getTenantValidation';
import {LoadingContext} from '../../../../contexts/LoadingContext';

// DO NOT EDIT! THIS IS GENERATED FILE

const defaultValues = {};

const DefaultTenantCreate: FC<CreateProps> = (props: CreateProps) => {
  const resolver = useMemo(() => yupResolver(getTenantValidation()), []);

  return (
    <Create
      redirect='show'
      {...props}
      transform={useCallback((data: any) => {
        const mergedData = {...defaultValues, ...data};
        return mergedData;
      }, [])}
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
                label='catalogs.tenants.fields.title'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <NumberInput
                fullWidth
                sx={{m: 1}}
                source='utcOffset'
                isRequired
                label='catalogs.tenants.fields.utcOffset'
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Create>
  );
};

export default DefaultTenantCreate;
