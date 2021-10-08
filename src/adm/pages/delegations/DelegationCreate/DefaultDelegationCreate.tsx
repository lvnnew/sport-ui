/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  AutocompleteInput,
  DateInput,
  BooleanInput,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultDelegationCreate: FC<CreateProps> = (props: CreateProps) => {
  return (
    <Create {...props}>
      <SimpleForm
        initialValues={{
          active: false,
        }}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput source='fromId' reference='managers'>
              <AutocompleteInput fullWidth optionText='title' />
            </ReferenceInput>
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput source='toId' reference='managers'>
              <AutocompleteInput fullWidth optionText='title' />
            </ReferenceInput>
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <DateInput fullWidth source='expiresAt' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput fullWidth source='active' />
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultDelegationCreate;
