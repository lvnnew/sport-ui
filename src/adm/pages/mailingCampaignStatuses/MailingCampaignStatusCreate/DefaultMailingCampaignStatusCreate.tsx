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
import getMailingCampaignStatusValidation from '../getMailingCampaignStatusValidation';
import {LoadingContext} from '../../../../contexts/LoadingContext';

// DO NOT EDIT! THIS IS GENERATED FILE

const defaultValues = {};

const DefaultMailingCampaignStatusCreate: FC<CreateProps> = (props: CreateProps) => {
  const resolver = useMemo(() => yupResolver(getMailingCampaignStatusValidation()), []);

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
                source='id'
                isRequired
                label='catalogs.mailingCampaignStatuses.fields.id'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='title'
                isRequired
                label='catalogs.mailingCampaignStatuses.fields.title'
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Create>
  );
};

export default DefaultMailingCampaignStatusCreate;
