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
  BooleanInput,
} from 'react-admin';
import {useDebug} from '../../../../contexts/DebugContext';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getManagerValidation from '../getManagerValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerCreate: FC<CreateProps> = (props: CreateProps) => {
  const {debug} = useDebug();
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getManagerValidation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        defaultValues={{
          headOfUnit: false,
          active: true,
        }}
        resolver={resolver}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              sx={{m: 1}}
              source='title'
              defaultValue={null}
              label={translate('catalogs.managers.fields.title')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              sx={{m: 1}}
              source='lastName'
              label={translate('catalogs.managers.fields.lastName')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              sx={{m: 1}}
              source='firstName'
              label={translate('catalogs.managers.fields.firstName')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='languageId'
              reference='languages'
              sort={{id: 'id', order: 'DESC'}}
              label={translate('catalogs.managers.fields.languageId')}
            >
              <AutocompleteInput
                fullWidth
                sx={{m: 1}}
                size='small'
                label={translate('catalogs.managers.fields.languageId')}
                optionText='title'
                defaultValue={null}
                parse={val => val || null}
              />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              sx={{m: 1}}
              source='email'
              label={translate('catalogs.managers.fields.email')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              sx={{m: 1}}
              source='phone'
              defaultValue={null}
              label={translate('catalogs.managers.fields.phone')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              sx={{m: 1}}
              source='photo'
              defaultValue={null}
              label={translate('catalogs.managers.fields.photo')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              sx={{m: 1}}
              source='telegramLogin'
              defaultValue={null}
              label={translate('catalogs.managers.fields.telegramLogin')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='unitId'
              reference='units'
              sort={{id: 'id', order: 'DESC'}}
              label={translate('catalogs.managers.fields.unitId')}
            >
              <AutocompleteInput
                fullWidth
                sx={{m: 1}}
                size='small'
                label={translate('catalogs.managers.fields.unitId')}
                optionText='title'
                defaultValue={null}
                parse={val => val || null}
              />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput
              fullWidth
              sx={{m: 1}}
              source='headOfUnit'
              label={translate('catalogs.managers.fields.headOfUnit')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput
              fullWidth
              sx={{m: 1}}
              source='active'
              label={translate('catalogs.managers.fields.active')}
            />
          </Grid>
          {debug && <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='tenantId'
              reference='tenants'
              sort={{id: 'id', order: 'DESC'}}
              label={translate('catalogs.managers.fields.tenantId')}
            >
              <AutocompleteInput
                fullWidth
                sx={{m: 1}}
                size='small'
                label={translate('catalogs.managers.fields.tenantId')}
                optionText='title'
                defaultValue={null}
                parse={val => val || null}
              />
            </ReferenceInput>
          </Grid>}
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultManagerCreate;
