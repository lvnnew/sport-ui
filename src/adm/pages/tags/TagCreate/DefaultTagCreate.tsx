/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getTagValidation from '../getTagValidation';
import {LoadingContext} from '../../../../contexts/LoadingContext';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const defaultValues = {};

const DefaultTagCreate: FC<CreateProps> = (props: CreateProps) => {
  const resolver = useMemo(() => yupResolver(getTagValidation()), []);

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
                source='comment'
                defaultValue={null}
                label='catalogs.tags.fields.comment'
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Create>
  );
};

export default DefaultTagCreate;
