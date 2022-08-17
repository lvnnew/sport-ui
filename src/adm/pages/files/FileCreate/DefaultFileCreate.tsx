/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getFileValidation from '../getFileValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultFileCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getFileValidation(translate)), [translate]);

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
              sx={{m: 1}}
              source='originalName'
              label={translate('catalogs.files.fields.originalName')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              sx={{m: 1}}
              source='url'
              label={translate('catalogs.files.fields.url')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              sx={{m: 1}}
              source='mimetype'
              label={translate('catalogs.files.fields.mimetype')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              sx={{m: 1}}
              source='s3Key'
              label={translate('catalogs.files.fields.s3Key')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              sx={{m: 1}}
              source='eTag'
              label={translate('catalogs.files.fields.eTag')}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultFileCreate;
