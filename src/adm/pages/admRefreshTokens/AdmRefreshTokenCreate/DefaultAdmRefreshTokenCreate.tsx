/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  AutocompleteInput,
  TextInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getAdmRefreshTokenValidation from '../getAdmRefreshTokenValidation';
import {LoadingContext} from '../../../../contexts/LoadingContext';

// DO NOT EDIT! THIS IS GENERATED FILE

const defaultValues = {};

const DefaultAdmRefreshTokenCreate: FC<CreateProps> = (props: CreateProps) => {
  const resolver = useMemo(() => yupResolver(getAdmRefreshTokenValidation()), []);

  return (
    <Create
      redirect='show'
      {...props}
      transform={useCallback((data: any) => {
        const mergedData = {...defaultValues, ...data};
        return {
          ...mergedData,
          create: mergedData.create || null,
        };
      }, [])}
    >
      <LoadingContext>
        <SimpleForm
          defaultValues={defaultValues}
          resolver={resolver}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateTimeInput
                fullWidth
                sx={{m: 1}}
                source='create'
                isRequired
                label='catalogs.admRefreshTokens.fields.create'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='managerId'
                reference='managers'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.admRefreshTokens.fields.managerId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.admRefreshTokens.fields.managerId'
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
                source='token'
                isRequired
                label='catalogs.admRefreshTokens.fields.token'
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Create>
  );
};

export default DefaultAdmRefreshTokenCreate;
