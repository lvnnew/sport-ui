/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import {useDebug} from '../../../../contexts/DebugContext';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getUserValidation from '../getUserValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUserCreate: FC<CreateProps> = (props: CreateProps) => {
  const {debug} = useDebug();
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getUserValidation(translate)), [translate]);

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
              label={translate('catalogs.users.fields.title')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='lastname'
              label={translate('catalogs.users.fields.lastname')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='firstname'
              label={translate('catalogs.users.fields.firstname')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='email'
              label={translate('catalogs.users.fields.email')}
            />
          </Grid>
          {debug && <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='tenantId'
              label={translate('catalogs.users.fields.tenantId')}
              reference='tenants'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' defaultValue={null} />
            </ReferenceInput>
          </Grid>}
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultUserCreate;
