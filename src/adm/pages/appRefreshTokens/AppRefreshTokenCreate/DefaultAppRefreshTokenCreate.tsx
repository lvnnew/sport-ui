/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  AutocompleteInput,
  TextInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getAppRefreshTokenValudation from '../getAppRefreshTokenValudation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppRefreshTokenCreate: FC<CreateProps> = (props: CreateProps) => {
  const t = useTranslate();

  const validate = useMemo(() => makeValidate(getAppRefreshTokenValudation(t)), [t]);

  return (
    <Create
      {...props}
      transform={useCallback((data) => ({
        ...data,
        create: data.create || null,
      }), [])}
    >
      <SimpleForm
        initialValues={{}}
        validate={validate}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <DateTimeInput fullWidth source='create' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput source='userId' reference='users'>
              <AutocompleteInput fullWidth optionText='title' />
            </ReferenceInput>
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='token' />
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultAppRefreshTokenCreate;
