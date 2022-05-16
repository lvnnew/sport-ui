/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getMessageTypeValidation from '../getMessageTypeValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTypeEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getMessageTypeValidation(translate)), [translate]);

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
              source='title'
              label={translate('catalogs.messageTypes.fields.title')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='description'
              defaultValue={null}
              label={translate('catalogs.messageTypes.fields.description')}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultMessageTypeEdit;
