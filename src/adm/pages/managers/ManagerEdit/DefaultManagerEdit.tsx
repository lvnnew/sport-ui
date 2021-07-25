/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerEdit: FC<EditProps> = (props: EditProps) => {
  
  return (
    <Edit {...props}>
      <SimpleForm
        initialValues={{
          
        }}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><TextInput fullWidth source="title" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><TextInput fullWidth source="lastName" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><TextInput fullWidth source="firstName" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><TextInput fullWidth source="email" /></FormGrid>
        </FormGrid>
      </SimpleForm>
    </Edit>
  )
};

export default DefaultManagerEdit;
