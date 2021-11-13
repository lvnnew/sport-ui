/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getStatValudation from '../getStatValudation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultStatCreate: FC<CreateProps> = (props: CreateProps) => {
  const t = useTranslate();

  const validate = useMemo(() => makeValidate(getStatValudation(t)), [t]);

  return (
    <Create
      {...props}
      transform={useCallback((data) => ({
        ...data,
        updated: data.updated || null,
      }), [])}
    >
      <SimpleForm
        initialValues={{}}
        validate={validate}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='id' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <DateTimeInput fullWidth source='updated' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <NumberInput fullWidth source='helloCount' />
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultStatCreate;
