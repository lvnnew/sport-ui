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
import getMessageTypeValidation from '../getMessageTypeValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTypeCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getMessageTypeValidation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data) => ({
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
              source='id'
              label={translate('catalogs.messageTypes.fields.id')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='title'
              label={translate('catalogs.messageTypes.fields.title')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='description'
              label={translate('catalogs.messageTypes.fields.description')}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultMessageTypeCreate;
