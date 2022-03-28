/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getManagerLoginValudation from '../getManagerLoginValudation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerLoginEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const validate = useMemo(() => makeValidate(getManagerLoginValudation(translate)), [translate]);

  return (
    <Edit
      {...props}
      transform={useCallback((data) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        initialValues={{
          emailVerified: false,
          initialPasswordChanged: false,
          locked: false,
        }}
        validate={validate}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='login' label={translate('catalogs.managerLogins.fields.login')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='passwordHash' label={translate('catalogs.managerLogins.fields.passwordHash')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='role' label={translate('catalogs.managerLogins.fields.role')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput fullWidth source='emailVerified' label={translate('catalogs.managerLogins.fields.emailVerified')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput fullWidth source='initialPasswordChanged' label={translate('catalogs.managerLogins.fields.initialPasswordChanged')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput fullWidth source='locked' label={translate('catalogs.managerLogins.fields.locked')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='managerId'
              label={translate('catalogs.managerLogins.fields.managerId')}
              reference='managers'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' />
            </ReferenceInput>
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultManagerLoginEdit;
