/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getEntityValudation from '../getEntityValudation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultEntityCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const validate = useMemo(() => makeValidate(getEntityValudation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        initialValues={{}}
        validate={validate}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='id' label={translate('catalogs.entities.fields.id')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='title' label={translate('catalogs.entities.fields.title')} />
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultEntityCreate;
