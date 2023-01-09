/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getDelegationValidation from '../getDelegationValidation';
import {LoadingContext} from '../../../../contexts/LoadingContext';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultDelegationCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getDelegationValidation(translate)), [translate]);

  return (
    <Create
      redirect='show'
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
        expiresAt: data.expiresAt || null,
      }), [])}
    >
      <LoadingContext>
        <SimpleForm
          defaultValues={{
            active: false,
          }}
          resolver={resolver}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='fromId'
                reference='managers'
                sort={{field: 'id', order: 'DESC'}}
                label={translate('catalogs.delegations.fields.fromId')}
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label={translate('catalogs.delegations.fields.fromId')}
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='toId'
                reference='managers'
                sort={{field: 'id', order: 'DESC'}}
                label={translate('catalogs.delegations.fields.toId')}
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label={translate('catalogs.delegations.fields.toId')}
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateInput
                fullWidth
                sx={{m: 1}}
                source='expiresAt'
                defaultValue={null}
                label={translate('catalogs.delegations.fields.expiresAt')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='active'
                required
                label={translate('catalogs.delegations.fields.active')}
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Create>
  );
};

export default DefaultDelegationCreate;
