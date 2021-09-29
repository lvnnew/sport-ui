/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToPermissionEdit: FC<EditProps> = (props: EditProps) => {
  return (
    <Edit {...props}>
      <SimpleForm
        initialValues={{}}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput source='managerId' reference='managers'>
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
    </Edit>
  );
};

export default DefaultManagersToPermissionEdit;
