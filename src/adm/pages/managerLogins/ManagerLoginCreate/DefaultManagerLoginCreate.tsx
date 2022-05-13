/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getManagerLoginValidation from '../getManagerLoginValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerLoginCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getManagerLoginValidation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        defaultValues={{
          emailVerified: false,
          initialPasswordChanged: false,
          locked: false,
        }}
        resolver={resolver}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='login'
              label={translate('catalogs.managerLogins.fields.login')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='passwordHash'
              label={translate('catalogs.managerLogins.fields.passwordHash')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='role'
              label={translate('catalogs.managerLogins.fields.role')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput
              fullWidth
              source='emailVerified'
              label={translate('catalogs.managerLogins.fields.emailVerified')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput
              fullWidth
              source='initialPasswordChanged'
              label={translate('catalogs.managerLogins.fields.initialPasswordChanged')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput
              fullWidth
              source='locked'
              label={translate('catalogs.managerLogins.fields.locked')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='managerId'
              label={translate('catalogs.managerLogins.fields.managerId')}
              reference='managers'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' disableClearable defaultValue={null} />
            </ReferenceInput>
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultManagerLoginCreate;
