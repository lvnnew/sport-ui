/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getRoleValidation from '../getRoleValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRoleCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getRoleValidation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        defaultValues={{
          hasAllPermissions: false,
          allTenantsAvailable: false,
        }}
        resolver={resolver}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='id'
              label={translate('catalogs.roles.fields.id')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='title'
              defaultValue={null}
              label={translate('catalogs.roles.fields.title')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput
              fullWidth
              source='hasAllPermissions'
              label={translate('catalogs.roles.fields.hasAllPermissions')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput
              fullWidth
              source='allTenantsAvailable'
              label={translate('catalogs.roles.fields.allTenantsAvailable')}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultRoleCreate;
