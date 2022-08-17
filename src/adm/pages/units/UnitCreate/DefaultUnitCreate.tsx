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
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getUnitValidation from '../getUnitValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUnitCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getUnitValidation(translate)), [translate]);

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
              source='title'
              label={translate('catalogs.units.fields.title')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='parentId'
              reference='units'
              sort={{id: 'id', order: 'DESC'}}
              label={translate('catalogs.units.fields.parentId')}
            >
              <AutocompleteInput
                fullWidth
                sx={{m: 1}}
                size='small'
                label={translate('catalogs.units.fields.parentId')}
                optionText='title'
                defaultValue={null}
                parse={val => val || null}
              />
            </ReferenceInput>
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultUnitCreate;
