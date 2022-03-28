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
import getAdmRefreshTokenValudation from '../getAdmRefreshTokenValudation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAdmRefreshTokenCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const validate = useMemo(() => makeValidate(getAdmRefreshTokenValudation(translate)), [translate]);

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
            <DateTimeInput fullWidth source='create' label={translate('catalogs.admRefreshTokens.fields.create')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='managerId'
              label={translate('catalogs.admRefreshTokens.fields.managerId')}
              reference='managers'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' />
            </ReferenceInput>
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='token' label={translate('catalogs.admRefreshTokens.fields.token')} />
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultAdmRefreshTokenCreate;
