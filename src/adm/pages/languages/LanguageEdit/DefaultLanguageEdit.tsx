/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getLanguageValidation from '../getLanguageValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultLanguageEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const validate = useMemo(() => makeValidate(getLanguageValidation(translate)), [translate]);

  return (
    <Edit
      {...props}
      transform={useCallback((data) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        initialValues={{}}
        validate={validate}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='title'
              label={translate('catalogs.languages.fields.title')}
            />
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultLanguageEdit;
