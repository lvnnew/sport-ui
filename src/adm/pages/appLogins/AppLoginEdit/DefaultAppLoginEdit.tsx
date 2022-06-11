/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getAppLoginValidation from '../getAppLoginValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppLoginEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getAppLoginValidation(translate)), [translate]);

  return (
    <Edit
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
              source='login'
              label={translate('catalogs.appLogins.fields.login')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='passwordHash'
              label={translate('catalogs.appLogins.fields.passwordHash')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='userId'
              reference='users'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput
                fullWidth
                label={translate('catalogs.appLogins.fields.userId')}
                optionText='title'
                defaultValue={null}
                parse={val => val || null}
              />
            </ReferenceInput>
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultAppLoginEdit;
