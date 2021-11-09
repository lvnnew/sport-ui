/* eslint-disable max-len */
import React, {FC, useMemo} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getLanguageValudation from '../getLanguageValudation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultLanguageEdit: FC<EditProps> = (props: EditProps) => {
  const t = useTranslate();

  const validate = useMemo(() => makeValidate(getLanguageValudation(t)), [t]);

  return (
    <Edit {...props}>
      <SimpleForm
        initialValues={{}}
        validate={validate}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='title' />
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultLanguageEdit;
