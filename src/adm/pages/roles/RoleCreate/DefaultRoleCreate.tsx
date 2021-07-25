/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRoleCreate: FC<CreateProps> = (props: CreateProps) => {
  
  return (
    <Create {...props}>
      <SimpleForm
        initialValues={{
          hasFullAccess: false
        }}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><TextInput fullWidth source="id" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><TextInput fullWidth source="title" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><BooleanInput fullWidth source="hasFullAccess" /></FormGrid>
        </FormGrid>
      </SimpleForm>
    </Create>
  )
};

export default DefaultRoleCreate;
