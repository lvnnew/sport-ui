/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUserCreate: FC<CreateProps> = (props: CreateProps) => {
  
  return (
    <Create {...props}>
      <SimpleForm
        initialValues={{
          
        }}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><TextInput fullWidth source="lastname" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><TextInput fullWidth source="firstname" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><TextInput fullWidth source="email" /></FormGrid>
        </FormGrid>
      </SimpleForm>
    </Create>
  )
};

export default DefaultUserCreate;
