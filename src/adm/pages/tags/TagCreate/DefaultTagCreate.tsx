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
import getTagValidation from '../getTagValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTagCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getTagValidation(translate)), [translate]);

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
              source='comment'
              defaultValue={null}
              label={translate('catalogs.tags.fields.comment')}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultTagCreate;
