/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerLoginEdit: FC<EditProps> = (props: EditProps) => {
  
  return (
    <Edit {...props}>
      <SimpleForm
        initialValues={{
          emailVerified: false,
initialPasswordChanged: false,
locked: false
        }}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><TextInput fullWidth source="login" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><TextInput fullWidth source="passwordHash" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><TextInput fullWidth source="role" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanInput fullWidth source="emailVerified" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanInput fullWidth source="initialPasswordChanged" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanInput fullWidth source="locked" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceInput source="managerId" reference="managers">
      <AutocompleteInput fullWidth optionText="title" />
    </ReferenceInput></FormGrid>
        </FormGrid>
      </SimpleForm>
    </Edit>
  )
};

export default DefaultManagerLoginEdit;
