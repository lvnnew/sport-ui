/* eslint-disable max-len */
import React, {FC, useMemo} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  DateInput,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getAuditLogValudation from '../getAuditLogValudation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAuditLogEdit: FC<EditProps> = (props: EditProps) => {
  const t = useTranslate();

  const validate = useMemo(() => makeValidate(getAuditLogValudation(t)), [t]);

  return (
    <Edit {...props}>
      <SimpleForm
        initialValues={{
          foreign: false,
        }}
        validate={validate}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <DateInput fullWidth source='date' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='title' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='entityType' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='entityId' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='action' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput source='managerId' reference='managers'>
              <AutocompleteInput fullWidth optionText='title' />
            </ReferenceInput>
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput source='userId' reference='users'>
              <AutocompleteInput fullWidth optionText='title' />
            </ReferenceInput>
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput fullWidth source='foreign' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='foreignEntityType' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='foreignEntityId' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='actionData' />
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultAuditLogEdit;
