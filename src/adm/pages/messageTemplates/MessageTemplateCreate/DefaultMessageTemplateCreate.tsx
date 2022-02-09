/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getMessageTemplateValudation from '../getMessageTemplateValudation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateCreate: FC<CreateProps> = (props: CreateProps) => {
  const t = useTranslate();

  const validate = useMemo(() => makeValidate(getMessageTemplateValudation(t)), [t]);

  return (
    <Create
      {...props}
      transform={useCallback((data) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        initialValues={{
          secretData: false,
        }}
        validate={validate}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='id' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='title' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput fullWidth source='secretData' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput source='messageTypeId' reference='messageTypes'>
              <AutocompleteInput fullWidth optionText='title' resettable />
            </ReferenceInput>
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultMessageTemplateCreate;
