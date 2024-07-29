/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import {useDebug} from '../../../../contexts/DebugContext';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getCompetitionValidation from '../getCompetitionValidation';
import {LoadingContext} from '../../../../contexts/LoadingContext';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const defaultValues = {};

const DefaultCompetitionCreate: FC<CreateProps> = (props: CreateProps) => {
  const {debug} = useDebug();
  const resolver = useMemo(() => yupResolver(getCompetitionValidation()), []);

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
                source='title'
                isRequired
                label='catalogs.competitions.fields.title'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <NumberInput
                fullWidth
                sx={{m: 1}}
                source='dateOfBirthFrom'
                defaultValue={null}
                label='catalogs.competitions.fields.dateOfBirthFrom'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <NumberInput
                fullWidth
                sx={{m: 1}}
                source='dateOfBirthTo'
                defaultValue={null}
                label='catalogs.competitions.fields.dateOfBirthTo'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='organizationId'
                reference='organizators'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.competitions.fields.organizationId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.competitions.fields.organizationId'
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            {debug && <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='createdByManagerId'
                reference='managers'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.competitions.fields.createdByManagerId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.competitions.fields.createdByManagerId'
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>}
            {debug && <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='lastChangedByManagerId'
                reference='managers'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.competitions.fields.lastChangedByManagerId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.competitions.fields.lastChangedByManagerId'
                  defaultValue={null}
                  parse={val => val || null}
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>}
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Create>
  );
};

export default DefaultCompetitionCreate;
