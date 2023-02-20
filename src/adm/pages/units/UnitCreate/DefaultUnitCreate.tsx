/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getUnitValidation from '../getUnitValidation';
import {LoadingContext} from '../../../../contexts/LoadingContext';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUnitCreate: FC<CreateProps> = (props: CreateProps) => {
  const resolver = useMemo(() => yupResolver(getUnitValidation()), []);

  return (
    <Create
      redirect='show'
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
      }), [])}
    >
      <LoadingContext>
        <SimpleForm
          defaultValues={{}}
          resolver={resolver}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='title'
                required
                label='catalogs.units.fields.title'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='parentId'
                reference='units'
                sort={{field: 'id', order: 'DESC'}}
                label='catalogs.units.fields.parentId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.units.fields.parentId'
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

export default DefaultUnitCreate;
