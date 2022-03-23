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
import {useDebug} from '../../../../contexts/DebugContext';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getUserValudation from '../getUserValudation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUserCreate: FC<CreateProps> = (props: CreateProps) => {
  const {debug} = useDebug();
  const t = useTranslate();

  const validate = useMemo(() => makeValidate(getUserValudation(t)), [t]);

  return (
    <Create
      {...props}
      transform={useCallback((data) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        initialValues={{
          tenantId: 1,
        }}
        validate={validate}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='title' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='lastname' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='firstname' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='email' />
          </FormGrid>
          {debug && <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='tenantId'
              reference='tenants'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' resettable />
            </ReferenceInput>
          </FormGrid>}
        </FormGrid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultUserCreate;
