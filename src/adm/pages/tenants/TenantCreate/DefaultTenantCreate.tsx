/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getTenantValidation from '../getTenantValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTenantCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getTenantValidation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        defaultValues={{}}
        resolver={resolver}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='title'
              defaultValue={null}
              label={translate('catalogs.tenants.fields.title')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <NumberInput
              fullWidth
              source='utcOffset'
              label={translate('catalogs.tenants.fields.utcOffset')}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultTenantCreate;
