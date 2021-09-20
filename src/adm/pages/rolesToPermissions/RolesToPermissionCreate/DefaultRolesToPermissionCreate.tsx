/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRolesToPermissionCreate: FC<CreateProps> = (props: CreateProps) => {
  return (
    <Create {...props}>
      <SimpleForm
        initialValues={{}}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput source='roleId' reference='roles'>
              <AutocompleteInput fullWidth optionText='title' />
            </ReferenceInput>
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput source='permissionId' reference='permissions'>
              <AutocompleteInput fullWidth optionText='title' />
            </ReferenceInput>
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultRolesToPermissionCreate;
