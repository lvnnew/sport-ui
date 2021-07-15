/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppLoginEdit: FC<EditProps> = (props: EditProps) => {
  
  return (
    <Edit {...props}>
      <SimpleForm
        initialValues={{
          
        }}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><TextInput fullWidth source="login" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><TextInput fullWidth source="passwordHash" /></FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}><ReferenceInput source="userId" reference="users">
      <SelectInput fullWidth optionText="id" />
    </ReferenceInput></FormGrid>
        </FormGrid>
      </SimpleForm>
    </Edit>
  )
};

export default DefaultAppLoginEdit;
