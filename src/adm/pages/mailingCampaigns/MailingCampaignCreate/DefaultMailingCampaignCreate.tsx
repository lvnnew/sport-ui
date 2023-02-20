/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  NumberInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getMailingCampaignValidation from '../getMailingCampaignValidation';
import {LoadingContext} from '../../../../contexts/LoadingContext';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMailingCampaignCreate: FC<CreateProps> = (props: CreateProps) => {
  const resolver = useMemo(() => yupResolver(getMailingCampaignValidation()), []);

  return (
    <Create
      redirect='show'
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
        date: data.date || null,
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
                label='catalogs.mailingCampaigns.fields.title'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='mailingTypeId'
                reference='mailingTypes'
                sort={{field: 'id', order: 'DESC'}}
                label='catalogs.mailingCampaigns.fields.mailingTypeId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.mailingCampaigns.fields.mailingTypeId'
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <NumberInput
                fullWidth
                sx={{m: 1}}
                source='priority'
                required
                label='catalogs.mailingCampaigns.fields.priority'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateInput
                fullWidth
                sx={{m: 1}}
                source='date'
                defaultValue={null}
                label='catalogs.mailingCampaigns.fields.date'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='mailingCampaignStatusId'
                reference='mailingCampaignStatuses'
                sort={{field: 'id', order: 'DESC'}}
                label='catalogs.mailingCampaigns.fields.mailingCampaignStatusId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.mailingCampaigns.fields.mailingCampaignStatusId'
                  defaultValue={null}
                  parse={val => val || null}
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='messageTemplateId'
                reference='messageTemplates'
                sort={{field: 'id', order: 'DESC'}}
                label='catalogs.mailingCampaigns.fields.messageTemplateId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.mailingCampaigns.fields.messageTemplateId'
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
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

export default DefaultMailingCampaignCreate;
